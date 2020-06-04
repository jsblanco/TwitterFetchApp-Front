import * as constants from "./constants";

export const getTweetsRequest = () => ({
  type: constants.GET_TWEETS_REQUEST,
});

export const getTweetsSuccess = (payload) => ({
  type: constants.GET_TWEETS_SUCCESS,
  payload
});

export const getTweetsFail = (payload) => ({
  type: constants.GET_TWEETS_FAIL,
  payload
});

export const clearTweetList = () => ({
  type: constants.CLEAR_TWEET_LIST,
});

export const addUserInfoToTweets = (payload) => ({
  type: constants.GET_TWEET_USERS_SUCCESS,
  payload
});



//constants.GET_TWEET_USERS_FAIL
