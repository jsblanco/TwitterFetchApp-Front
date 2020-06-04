import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchType } from "./../Redux/actions";

export default function ToggleSearchButton() {


    const dispatch = useDispatch();
    const { searchKeyword } = useSelector((state) => state);
    const toggleSearch= (toggle) => {
      dispatch(toggleSearchType(toggle));
    };

    return (
        <div className="align-items-center">
        <p className="mr-2 d-inline">Search by:</p>
          <Button 
          variant={!!searchKeyword? "": "outline-primary"}
          onClick={()=>toggleSearch(false)}
          >Username</Button>
          <Button 
          onClick={()=>toggleSearch(true)}
          variant={!!searchKeyword? "outline-primary": ""}
          >keyword</Button>  
        </div>
    )
}
