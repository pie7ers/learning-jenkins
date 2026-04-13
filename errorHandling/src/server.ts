import { Server as HttpServer } from 'http'
import express, { Router } from 'express'
import { errorHandler } from './middleware/errorHandler';

interface ServerOptions {
  port: number;
  routes: Router;
}

export default class Server {

  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  private server: HttpServer | null = null;

  constructor(options: ServerOptions) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app.use(express.json());
      this.app.use('/api', this.routes);
      this.app.use(errorHandler)

      this.server = this.app.listen(this.port, () => {
        console.log(`Server is running on port: ${this.port}`);
        resolve()
      })

      this.server.on('error', (error: Error) => {
        console.log(`Server error: ${error}`);
        reject(error)
      })
    })
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.server) {
        resolve()
        return
      }

      this.server.close((err) => {
        if (err) {
          console.log(`Server error: ${err}`);
          reject(err)
          return
        }

        console.log(`Server is stopped`);
        resolve()
      })
    })
  }

}