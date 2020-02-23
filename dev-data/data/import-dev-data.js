const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: '../../config.env' });

const DB = process.env.DATABASE.replace(
  'password',
  process.env.DATABASE_PASSWORD
);

const Proverb = require('../../models/proverbModel');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful'));

//Read JSON file

const proverb = JSON.parse(
  fs.readFileSync(`${__dirname}/proverb-simple.json`, 'utf-8')
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Proverb.create(proverb);
    console.log('Data successfully loaded!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// DELETION ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Proverb.deleteMany();
    console.log('Data successfully deleted!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
