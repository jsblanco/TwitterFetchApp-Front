import React from "react";
import { Button } from "react-bootstrap";
import { clearTweetList } from "./../Redux/actions";
import { useDispatch } from "react-redux";

export default function ClearFetchedTweets() {
  const dispatch = useDispatch();
  const clearFetchedTweets = () => dispatch(clearTweetList());

  return (
    <Button variant="danger" onClick={clearFetchedTweets} className="ml-4">
      Clear fetched tweets
    </Button>
  );
}
