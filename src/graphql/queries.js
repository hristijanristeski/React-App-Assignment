// query for past launches

import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
        rocket {
          id
        }
      }
    }
  }
`;


