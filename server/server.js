const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('Connected to DB!'))
  .catch(console.error);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log('Server running on port ${PORT}...')
);
