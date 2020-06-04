import * as constants from "./constants";
const initialState = {
  tweetList: [],
  loading: false,
  error: "",
  screen_name: "jack",
  q: "angular",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_TWEETS_USERNAME_REQUEST: case constants.GET_TWEETS_KEYWORD_REQUEST:
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
      case constants.CHANGE_SEARCH_CRITERIA:
      const {name, value}= payload  
      return {
          ...state,
          [name]: value
        }
    default:
      return state;
  }
};
