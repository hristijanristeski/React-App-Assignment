import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";

import {
  MDBCard,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";

const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketName: ID!) {
    rocket(id: $rocketName) {
      name
      height {
        feet
        meters
      }
      diameter {
        feet
        meters
      }
      stages
      cost_per_launch
      engines {
        type
        number
        propellant_1
        propellant_2
        thrust_to_weight
      }
    }
  }
`;

const RocketDetails = (props) => {
  const { rocketName } = useParams(); 

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { rocketName },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardTitle>Rocket Details - {rocketName}</MDBCardTitle>
      </MDBCard>
    </MDBContainer>
  );
};

export default RocketDetails;
