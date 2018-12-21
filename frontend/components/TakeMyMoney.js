import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURREN_USER_QUERY } from "./User";

class TakeMyMoney extends Component {
  render() {
    return <User>{({ data: { me } }) => <p>{this.props.children}</p>}</User>;
  }
}

export default TakeMyMoney;
