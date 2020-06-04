import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchCriteria,
  getKeywordTweetsRequest,
} from "./../Redux/actions";
import LangSelector from "./LangSelector";

export default function KeywordSearch() {
  const dispatch = useDispatch();
  const { q, lang } = useSelector((state) => state);
  const getKeywordTweetList = () => {
    dispatch(getKeywordTweetsRequest({q:q, lang:lang}));
  };

  return (
    <>
      <label htmlFor="q" className="mb-0">
        Keyword:
      </label>
      <input
        name="q"
        onChange={(e) => dispatch(changeSearchCriteria(e.target))}
        className="px-3 ml-2"
        value={q}
      ></input>

      <LangSelector />

      <Button variant="primary" onClick={getKeywordTweetList} className="mx-2">
        Fetch tweets by keyword
      </Button>
    </>
  );
}
