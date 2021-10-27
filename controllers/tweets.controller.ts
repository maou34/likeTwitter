import { NextFunction, Request, Response } from "express";
import {
  getTweets,
  getCurrentUserAndFollowersTweets,
  createTweet,
  deleteTweet,
  getTweet,
  updateTweet,
} from "../src/queries/tweets.queries";

exports.tweetList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweets = await getCurrentUserAndFollowersTweets(req.user);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweets = await getTweets();
    res.render("tweets/tweet-form", {
      tweets,
      tweet: {},
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};

exports.tweetCreate = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const body = req.body;
    await createTweet({ ...body, author: req.user._id });
    res.redirect("/tweets");
  } catch (e: any) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", {
      errors,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.tweetEdit = async (req: Request, res: Response, next: NextFunction) => {
  const tweetId = req.params.tweetId;
  const tweet = await getTweet(tweetId);
  res.render("tweets/tweet-form", {
    tweet,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.tweetDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getCurrentUserAndFollowersTweets(req.user);
    res.render("tweets/tweets-list", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const tweet = await getTweet(tweetId);
    res.status(400).render("tweets/tweet-form", {
      errors,
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};
