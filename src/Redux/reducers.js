import * as constants from "./constants";
const initialState = {
  tweetList: [],
  error: "",
  screen_name: "jack",
  q: "angular",
  searchKeyword: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_TWEETS_USERNAME_REQUEST:
    case constants.GET_TWEETS_KEYWORD_REQUEST:
      if (!!state.tweetList) return { ...state, tweetList: [], error: "" };
      return {
        ...state,
      };
    case constants.GET_TWEETS_SUCCESS:
      let newList = payload;
      return {
        ...state,
        tweetList: newList,
      };
    case constants.TOGGLE_SEARCH:
      return {
        ...state,
        searchKeyword: payload,
      };
    case constants.GET_TWEETS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case constants.CLEAR_TWEET_LIST:
      return {
        ...state,
        tweetList: [],
      };
    case constants.CHANGE_SEARCH_CRITERIA:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    default:
      return state;
  }
};
