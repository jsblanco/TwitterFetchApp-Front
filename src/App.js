import React from 'react';
import './App.css';
import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getTweetsRequest, clearTweetList, changeScreenName } from "./Redux/actions";
import Tweet from './components/Tweet';

const App = () => {
  const dispatch = useDispatch();
  const { tweetList, screen_name, loading } = useSelector((state) => state);
  const getTweetList = () => {
    dispatch(getTweetsRequest(screen_name));
  };
  const clearFetchedTweets = () => dispatch(clearTweetList());


  return (
<>
   <header className="jumbotron">
    <h1>Twitter fetching app</h1>
    <input 
    name="screen_name" 
    onChange={(e) => dispatch(changeScreenName(e.target.value))}
    value={screen_name}
    ></input>
    <Button 
    variant="primary"
    onClick={getTweetList}
    >Fetch tweets
    </Button>
    <Button 
    variant="danger"
    onClick={clearFetchedTweets}
    >Clear fetched tweets
    </Button>
   </header>
    <Row className="justify-content-md-center">

{!!tweetList && tweetList.map((tweet, index) => <Tweet key={index} tweet={tweet}/> )}

    </Row>
</>  
  );
}

export default App;
