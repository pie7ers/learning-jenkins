import express from 'express';
import userRoutes from './routes/userRoutes'
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})