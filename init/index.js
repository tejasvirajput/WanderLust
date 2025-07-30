const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany();
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68866f94a963abab3a856968",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
