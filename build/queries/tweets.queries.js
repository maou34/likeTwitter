"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweet = exports.getTweet = exports.deleteTweet = exports.createTweet = exports.getUserTweetsFormAuthorId = exports.getCurrentUserAndFollowersTweets = exports.getTweets = void 0;
const tweet_model_1 = require("../database/models/tweet.model");
const getTweets = () => tweet_model_1.Tweet.find({}).sort({ createdAt: "desc" }).exec();
exports.getTweets = getTweets;
const getCurrentUserAndFollowersTweets = (user) => {
    if (user.following) {
        return tweet_model_1.Tweet.find({
            author: { $in: [...user.following, user._id] },
        })
            .populate("author")
            .sort({ createdAt: "desc" })
            .exec();
    }
    return null;
};
exports.getCurrentUserAndFollowersTweets = getCurrentUserAndFollowersTweets;
const getUserTweetsFormAuthorId = (authorId) => {
    return tweet_model_1.Tweet.find({ author: authorId })
        .populate("author")
        .sort({ createdAt: "desc" })
        .exec();
};
exports.getUserTweetsFormAuthorId = getUserTweetsFormAuthorId;
const createTweet = (tweet) => {
    const newTweet = new tweet_model_1.Tweet(tweet);
    return newTweet.save();
};
exports.createTweet = createTweet;
const deleteTweet = (tweetId) => {
    return tweet_model_1.Tweet.findByIdAndDelete(tweetId).exec();
};
exports.deleteTweet = deleteTweet;
const getTweet = (tweetId) => {
    return tweet_model_1.Tweet.findById(tweetId).exec();
};
exports.getTweet = getTweet;
const updateTweet = (tweetId, tweet) => {
    return tweet_model_1.Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
};
exports.updateTweet = updateTweet;
//# sourceMappingURL=tweets.queries.js.map