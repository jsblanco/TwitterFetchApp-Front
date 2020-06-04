import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Tweet({ tweet }) {
  return (
    <Col
      lg="3"
      variant="lg-3"
      className="m-3 pt-3 pb-1 border rounded shadow d-flex flex-column justify-content-between"
    >
      <Row className="px-3 py-1">
        <Col lg="3" className="text-center">
          <img src={tweet.user.profile_image_url} className="rounded-circle" />
          <p>{tweet.user.name}</p>
        </Col>

        <Col lg="9">
          <p className="text-secondary">{tweet.text}</p>
        </Col>
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
