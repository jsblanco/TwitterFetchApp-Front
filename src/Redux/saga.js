import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { getTweetsByUsername, getTweetsByKeyword } from "../utils/server-queries";
import { extractUsers } from "./helpers"
import {
  getUserTweetsRequest,
  getTweetsSuccess,
  getTweetsFail,
} from "./actions";

function* getTweetsByUsernameEffect({payload}) {
    try {
      yield call(getUserTweetsRequest)
      const  tweets  = yield call(getTweetsByUsername, payload);
      yield put(getTweetsSuccess(tweets));
    } catch (e) {
      console.error(e);
      yield put(getTweetsFail(e));
    }
  }

  function* getTweetsByKeywordEffect({payload}) {
    try {
      yield call(getUserTweetsRequest)
      const  tweets  = yield call(getTweetsByKeyword, payload);
      yield put(getTweetsSuccess(tweets.statuses));
    } catch (e) {
      console.error(e);
      yield put(getTweetsFail(e));
    }
  }





function* tweetSagas() {
yield takeLatest(constants.GET_TWEETS_USERNAME_REQUEST, getTweetsByUsernameEffect);
yield takeLatest(constants.GET_TWEETS_KEYWORD_REQUEST, getTweetsByKeywordEffect);
}
export default tweetSagas;

