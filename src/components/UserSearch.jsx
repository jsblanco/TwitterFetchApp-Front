import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserTweetsRequest, changeSearchCriteria } from "./../Redux/actions";

export default function UserSearch() {
  const dispatch = useDispatch();
  const { screen_name } = useSelector((state) => state);
  const getUserTweetList = () => {
    dispatch(getUserTweetsRequest(screen_name));
  };

  return (
    <>
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
    </>
  );
}
