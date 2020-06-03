import React from 'react';
import './App.css';
import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getTweetsRequest, clearTweetList } from "./redux-components/actions";
import Tweet from './components/Tweet';

const App = () => {
  const dispatch = useDispatch();
  const { tweetList, loading } = useSelector((state) => state);
  const getTweetList = () => {
    dispatch(getTweetsRequest());
  };
  const clearFetchedTweets = () => dispatch(clearTweetList());


  return (
<>
   <header className="junbotron">
    <h1>Twitter fetching app</h1>
    <Button 
    variant="primary"
    onClick={getTweetList}>Fetch tweets</Button>
   </header>
    <Row>

{!!tweetList && tweetList.map(tweet => <Tweet tweet={tweet}/> )}

    </Row>
</>  
  );
}

export default App;
