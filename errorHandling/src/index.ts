import userRoutes from './routes/userRoutes'
import Server from './server';
import { envs } from './config/envs';

(async () => {
  await main()
})()

async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: userRoutes
  })

  await server.start()

  let isShuttingDown = false;

  const shutdown = async (signal: string) => {
    if (isShuttingDown) return;
    isShuttingDown = true;

    console.log(`${signal} received, shutting down gracefully...`);

    try {
      await server.stop();
    } catch (err) {
      console.log(`Error during shutdown: ${err}`);
    }
  }

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}