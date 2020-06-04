import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import { getTweets, getTweetUsers } from "../utils/server-queries";
import { extractUsers } from "./helpers"
import {
  getTweetsRequest,
  getTweetsSuccess,
  getTweetsFail,
  addUserInfoToTweets
} from "./actions";

function* getTweetsEffect({payload}) {
    try {
      console.log(payload)
      yield call(getTweetsRequest)
      const  tweets  = yield call(getTweets, payload);
      yield put(getTweetsSuccess(tweets));
    } catch (e) {
      console.error(e);
      yield put(getTweetsFail(e));
    }
  }


function* tweetSagas() {
yield takeLatest(constants.GET_TWEETS_REQUEST, getTweetsEffect);
}
export default tweetSagas;

