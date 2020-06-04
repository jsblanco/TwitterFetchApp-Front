import React from "react";
import "./App.css";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserTweetsRequest,
  clearTweetList,
  changeSearchCriteria,
  getKeywordTweetsRequest
} from "./Redux/actions";
import Tweet from "./components/Tweet";

const App = () => {
  const dispatch = useDispatch();
  const { tweetList, screen_name, q, loading } = useSelector((state) => state);
  const getUserTweetList = () => {dispatch(getUserTweetsRequest(screen_name))};
  const getKeywordTweetList = () => {dispatch(getKeywordTweetsRequest(q))};
  const clearFetchedTweets = () => dispatch(clearTweetList());

  return (
    <>
      <header className="jumbotron text-center">
        <h1>Twitter fetching app</h1>
        <Row className="w-100 px-5 justify-content-center">
          <div className="d-flex align-items-center mx-2">
            <label htmlFor="screen_name" className="mb-0">
              Username:
            </label>
            <input
              name="screen_name"
              onChange={(e) => dispatch(changeSearchCriteria(e.target))}
              className="px-3 ml-2"
              value={screen_name}
            ></input>
            <Button variant="primary" onClick={getUserTweetList} className="mx-2">
              Fetch tweets by user
            </Button>
          </div>

          <div className="d-flex align-items-center mx-2">
            <label htmlFor="q" className="mb-0">
              Keyword:
            </label>
            <input
              name="q"
              onChange={(e) => dispatch(changeSearchCriteria(e.target))}
              className="px-3 ml-2"
              value={q}
            ></input>

            <Button variant="primary" onClick={getKeywordTweetList} className="mx-2">
              Fetch tweets by keyword
            </Button>
          </div>

          <Button
            variant="danger"
            onClick={clearFetchedTweets}
            className="ml-4"
          >
            Clear fetched tweets
          </Button>
        </Row>
      </header>
      <Row className="justify-content-md-center">
        {!!tweetList &&
          tweetList.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}
      </Row>
    </>
  );
};

export default App;
