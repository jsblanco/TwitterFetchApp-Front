import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Tweet({ tweet }) {
  return (
    <Col
      lg="12"
      xl="3"
      variant="lg-3"
      className="my-3 mx-2 pt-3 pb-1 border rounded-lg shadow d-flex flex-column justify-content-between"
    >
      <Row className="px-3 pl-1 py-1 align-items-center">
          <img src={tweet.user.profile_image_url} className="rounded-circle mr-1" />
          <p className="d-inline my-0 mx-1 font-weight-bold">{tweet.user.name}</p>
          <p className="font-italic text-muted my-0 mx-1 d-inline">@{tweet.user.screen_name}</p>
      </Row>

      <Row className="px-3 pl-1 py-1">
          <p className="text-secondary">{tweet.text}</p>
      </Row>
      <Row className="px-3 pt-1">
        <Col>
          {!!tweet.source && (
            <span
              className="d-block"
              dangerouslySetInnerHTML={{ __html: tweet.source }}
            ></span>
          )}
        </Col>
        <Col>
          <p>
            <FontAwesomeIcon icon={faRetweet} className="text-success mr-2" />
            {tweet.retweet_count}
            <FontAwesomeIcon icon={faHeart} className="text-danger ml-3 mr-2" />
            {tweet.favorite_count}
          </p>
        </Col>
      </Row>
    </Col>
  );
}
