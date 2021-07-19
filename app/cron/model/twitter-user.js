const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        username: {
            type: String,
        },
        description: {
            type: String,
        },
        profile_image_url: {
            type: String,
        },
        location: {
            type: String,
        },
        twitter_id: {
            type: String,
            unique: true,
        },
        urls: {
            type: [String],
        },
        visited: {
            type: Boolean,
            default: false
        },
        following_count: {
            type: Number,
        },
        followers_count: {
            type: Number,
        },
        tweet_count: {
            type: Number,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                delete ret.__v;
            },
        },
    }
);


module.exports = mongoose.model('twitter-user', userSchema);
