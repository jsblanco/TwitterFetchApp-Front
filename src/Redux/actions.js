import * as constants from "./constants";

export const getUserTweetsRequest = (payload) => ({
  type: constants.GET_TWEETS_USERNAME_REQUEST,
  payload
});

export const getKeywordTweetsRequest = (payload) => ({
  type: constants.GET_TWEETS_KEYWORD_REQUEST,
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

export const toggleSearchType = (payload) => ({
  type: constants.TOGGLE_SEARCH,
  payload
});

export const clearTweetList = () => ({
  type: constants.CLEAR_TWEET_LIST,
});

export const changeSearchCriteria = (payload) => ({
  type: constants.CHANGE_SEARCH_CRITERIA,
  payload,
});

//constants.GET_TWEET_USERS_FAIL
