import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('server running');

    app.listen(config.port, () => {
      console.log(`The server is listening is port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
