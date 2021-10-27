import { Tweet } from "../database/models/tweet.model";
import { iTweet, iUser } from "../interfaces";

export const getTweets = () =>
  Tweet.find({}).sort({ createdAt: "desc" }).exec();

export const getCurrentUserAndFollowersTweets = (user: iUser) => {
  if (user.following) {
    return Tweet.find({
      author: { $in: [...user.following, user._id] },
    })
      .populate("author")
      .sort({ createdAt: "desc" })
      .exec();
  }

  return null;
};

export const getUserTweetsFormAuthorId = (authorId: string) => {
  return Tweet.find({ author: authorId })
    .populate("author")
    .sort({ createdAt: "desc" })
    .exec();
};

export const createTweet = (tweet: iTweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

export const deleteTweet = (tweetId: string) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};

export const getTweet = (tweetId: string) => {
  return Tweet.findById(tweetId).exec();
};

export const updateTweet = (tweetId: string, tweet: iTweet) => {
  return Tweet.findByIdAndUpdate(
    tweetId,
    { $set: tweet },
    { runValidators: true }
  );
};
