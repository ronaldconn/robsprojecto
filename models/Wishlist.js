const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  postId: {            /////////////////////changed 'title to post'
        type: String,
        
      },
      cloudinaryId: {
        type: String,
      
      },
      title: {
        type: String,
       
      },
      caption: {
        type: String,
      },

      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      
    });
    

module.exports = mongoose.model("Wishlist", WishlistSchema);