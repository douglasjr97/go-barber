import express from 'express';

// src/server.ts
import routes from './routes';

const app = express();

app.get('/', (req, res) => res.json({ message: 'hello Worldd2' }));

app.listen(3333, () => {
  console.log('🚀 Server Started on port 3333');
});
