import * as constants from "./constants";
const initialState = {
  tweetList: [],
  loading: false,
  error: "",
  screen_name: "jack",
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
      case constants.CHANGE_SCREEN_NAME:
        return {
          ...state,
          screen_name: payload
        }
    default:
      return state;
  }
};
