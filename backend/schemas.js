const mongoose = require("mongoose");

// Item Schema
const itemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    discountedPrice: Number,
    category: String,
    availability: Boolean,
    photo: String,
    promotion: Boolean,
    foodPreferences: { type: String, enum: ["Veg", "Non-veg"] },
  },
  { collection: "menuItem", versionKey: false }
);
const Item = mongoose.model("menuItem", itemSchema);

// Home Schema
const homeItemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    discountedPrice: Number,
    category: Array,
    availability: Boolean,
    photo: String,
    count: Number,
  },
  { collection: "specialMenu", versionKey: false }
);
const Home = mongoose.model("specialMenu", homeItemSchema);

// Team Schema
const teamSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    Username: { type: String, required: [true, "Username is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    hashedPassword: String,
    age: Number,
    phone_number: String,
    photo: String,
    access_level: { type: String, enum: ["admin", "manager", "employee"] },
  },
  { collection: "team", versionKey: false }
);
const Team = mongoose.model("team", teamSchema);

// Order Schema
const orderSchema = new mongoose.Schema(
  {
    id: Number,
    table: Number,
    available: Boolean,
    orders: Array,
    deliveries: Array,
  },
  { collection: "TableOrders", versionKey: false }
);
const Orders = mongoose.model("TableOrders", orderSchema);

const userSchema = new mongoose.Schema(
  {
    credential: String,
    name: String,
    email: String,
  },
  { collection: "Users", versionKey: false }
);
const Users = mongoose.model("Users", userSchema);

const TransactionSchema = new mongoose.Schema(
  {
    _id: String,
    availability: Boolean,
    category: Array,
    count: Number,
    description: String,
    discountedPrice: Number,
    isDelivered: Boolean,
    name: String,
    orderedTime: Array,
    photo: String,
    price: Number,
  },
  { collection: "Transaction", versionKey: false }
);
const History = mongoose.model("Transaction", TransactionSchema);

module.exports = {
  Item,
  Orders,
  Home,
  Team,
  History,
  Users,
};
