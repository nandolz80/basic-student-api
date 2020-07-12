import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

const app = express();

(async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.t3954.mongodb.net/<dbname>?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (error) {
        console.log('Erro ao conectar no MongoDB');
    }
})();



app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('rodando'));