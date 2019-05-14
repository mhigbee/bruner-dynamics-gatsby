// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import 'typeface-source-sans-pro';
import BrunerWhiteLogo from '../images/bruner-dynamics-white-logo.png'

const StyledNavUl = styled.div`
  margin: 0;
  display: flex;
  padding: 10px;

  nav {
    flex-grow: 1;
  }

  ul {
    display: flex;
    color: ${siteColors.white};
    font-size: 16px;
    font-wieght: 500;
    list-style-type: none;
    margin: 0;
    padding-left: 40px;

    li {
      margin: 0;
      padding-right: 20px;
    }
  }

  h4 {
    color: ${siteColors.white};
    padding-bottom: 0;
  }
`

const Nav = () => (
  <StyledNavUl>
    <img src={BrunerWhiteLogo} alt="site logo"/>
    <nav>
      <ul>
        <li>Plans</li>
        <li>Speeds</li>
        <li>About Brüner Dynamics </li>
        <li>Equipment</li>
      </ul>
    </nav> 
    <h4>Call Now 1.888.888.8888</h4>

  </StyledNavUl>
)

export default Nav;