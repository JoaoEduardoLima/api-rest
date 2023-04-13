import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joaoeduardoflima:MongoDB123@nodeapi.otgin5u.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
