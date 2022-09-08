// displays all missions in grid layout

import React, { useState, useEffect } from "react";
import SpaceMission from "../graphql";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

function MissionsList() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);
  

  return (
    <MDBContainer
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "720px",
        alignContent: "center",
      }}
    >
      <MDBRow>
        <h2>SpaceX</h2>
        {data.map((item, index) => (
          <>
            <MDBCard
              key={index}
              style={{ maxWidth: "22rem", maxHeight: "24rem" }}
            >
              <Link to={"/mission/" + item.rocket.rocket_name}>
                <MDBCardImage
                  src={
                    item &&
                    item.links.flickr_images &&
                    item.links.flickr_images[0]
                      ? item.links.flickr_images[0]
                      : "https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-stars-195641422.jpg"
                  }
                  position="top"
                  alt={item.mission_name}
                />
              </Link>

              <MDBCardBody>
                <MDBCardTitle>{item.mission_name}</MDBCardTitle>
                <MDBCardText>
                  {item.launch_site.site_name_long} {item.rocket.rocket_name}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default MissionsList;
