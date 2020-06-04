import * as constants from "./constants";
const initialState = {
  tweetList: [],
  loading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_TWEETS_REQUEST:
      if (!!state.tweetList) return { ...state };
      return {
        ...state,
        loading: true,
      };
    case constants.GET_TWEETS_SUCCESS:
      let newList = payload;
      return {
        ...state,
        loading: false,
        tweetList: newList,
      };

      case constants.GET_TWEET_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: payload,
        };
    case constants.GET_TWEETS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case constants.CLEAR_TWEET_LIST:
      return {
        ...state,
        tweetList: [],
      };

    default:
      return state;
  }
};
