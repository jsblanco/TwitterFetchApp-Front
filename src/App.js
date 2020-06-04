import React from 'react';
import './App.css';
import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getTweetsRequest, clearTweetList } from "./Redux/actions";
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
   <header className="jumbotron">
    <h1>Twitter fetching app</h1>
    <Button 
    variant="primary"
    onClick={getTweetList}>Fetch tweets</Button>
   </header>
    <Row className="justify-content-md-center">

{!!tweetList && tweetList.map((tweet, index) => <Tweet key={index} tweet={tweet}/> )}

    </Row>
</>  
  );
}

export default App;
