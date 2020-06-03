import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import getTweets from "../utils/getTweets";
import {
  getTweetsRequest,
  getTweetsSuccess,
  getTweetsFail,
} from "./actions";

function* getTweetsEffect({criteria}) {
    try {
      yield call(getTweetsRequest)
      const  tweet  = yield call(getTweets(criteria));
      yield put(getTweetsSuccess(tweet));
    } catch (e) {
      console.error(e);
      yield put(getTweetsFail(e));
    }
  }


function* tweetSagas() {
yield takeLatest(constants.GET_TWEETS_REQUEST, getTweetsEffect);
}
export default tweetSagas;

