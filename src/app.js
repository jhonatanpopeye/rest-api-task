import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import TasksRoutes from './routes/tasks.routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//rutas
app.get('/', (req, res) => {
    res.json({
        message: 'bienenido a la aplicacion de Jhonatan Areiza'
    });
});

app.use('/api/tasks', TasksRoutes);

export default app;