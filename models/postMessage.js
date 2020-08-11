const mongoose = require("mongoose");
var PostMessage = mongoose.model(
  "PostMessage",
  {
    FirstName: { type: String },
    MiddleName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    date: { type: String },
    bio: { type: String },
  },
  "user"
);
module.exports = { PostMessage };
