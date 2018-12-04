import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PaginationStyles from "./styles/PaginationStyles";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <PaginationStyles>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => <p>Hi I'm the pagination</p>}
    </Query>
  </PaginationStyles>
);

export default Pagination;
