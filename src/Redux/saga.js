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

function* getTweetsEffect() {
    try {
      yield call(getTweetsRequest)
      const  tweets  = yield call(getTweets);
      yield put(getTweetsSuccess(tweets));
      //const tweetUsers = yield call(getTweetUsers(extractUsers(tweets)))
      //yield put(addUserInfoToTweets(tweets))
    } catch (e) {
      console.error(e);
      yield put(getTweetsFail(e));
    }
  }


function* tweetSagas() {
yield takeLatest(constants.GET_TWEETS_REQUEST, getTweetsEffect);
}
export default tweetSagas;

