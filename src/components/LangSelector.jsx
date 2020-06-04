import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchCriteria } from "./../Redux/actions";

export default function LangSelector() {
  const dispatch = useDispatch();

  return (
    <>
      <label className="mt-1 ml-4 mr-2 mb-0">Language</label>
      <select
        className="py-1 mr-4"
        name="lang"
        onChange={(e) => dispatch(changeSearchCriteria(e.target))}
      >
        <option value="">Any</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="jp">Japanese</option>
      </select>
    </>
  );
}
