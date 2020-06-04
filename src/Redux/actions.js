import * as constants from "./constants";

export const getTweetsRequest = (payload) => ({
  type: constants.GET_TWEETS_REQUEST,
  payload
});

export const getTweetsSuccess = (payload) => ({
  type: constants.GET_TWEETS_SUCCESS,
  payload,
});

export const getTweetsFail = (payload) => ({
  type: constants.GET_TWEETS_FAIL,
  payload,
});

export const clearTweetList = () => ({
  type: constants.CLEAR_TWEET_LIST,
});

export const changeScreenName = (payload) => ({
  type: constants.CHANGE_SCREEN_NAME,
  payload,
});

//constants.GET_TWEET_USERS_FAIL
