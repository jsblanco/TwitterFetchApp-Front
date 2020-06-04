import React from "react";
import "./App.css";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./components/Tweet";
import KeywordSearch from "./components/KeywordSearch";
import UserSearch from "./components/UserSearch";
import ClearFetchedTweets from "./components/ClearFetchedTweets";
import ToggleSearchButton from "./components/ToggleSearchButton";

const App = () => {
  const dispatch = useDispatch();
  const { tweetList, error, searchKeyword } = useSelector((state) => state);

  return (
    <>
      <header className="jumbotron text-center">
        <h1 className="mb-5 display-3 font-weight-bold">
          Twitter fetching app
        </h1>
        <Row className="w-100 px-5 justify-content-center">
          <ToggleSearchButton />
          <Row className="d-flex align-items-center mx-5">
            {!!searchKeyword ? <KeywordSearch /> : <UserSearch />}
          </Row>

          <ClearFetchedTweets />
        </Row>
      </header>
      <Row className="justify-content-md-center">
        {!!tweetList &&
          tweetList.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}

        {!!error && (
          <div className="h-50 align-items-center w-100 text-center px-5">
            <h2 className="text-danger mt-5">
              No tweets found
            </h2>
            <h4 className="text-secondary">
              Please redefine your search and try again.
            </h4>
          </div>
        )}
      </Row>
    </>
  );
};

export default App;
