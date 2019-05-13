import React from "react"
import styled from "@emotion/styled"
import Background from "../images/backgrounds/stars-background.jpg"
import { siteColors, mq } from './styleVariables';
import 'typeface-source-sans-pro';
import 'typeface-maven-pro';

const StyledHero = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 50px;

  .h1-container {

    ${mq('large')} {
      margin: 0 auto;
      width: 70%;
      padding-bottom: 35px;
    }
  }

  h1 {
    text-align: center;
  }

  .p-container {
    padding-bottom: 25px;
  }

  p {
    text-align: center;
    color: ${siteColors.white};
  }

  form {
    display: flex;
    justify-content: center;
    font-family: 'Maven Pro', sans-serif;
    margin-left: 20px;
    margin-right: 20px;

    [name=zip-code] {
      color: ${siteColors.black};
      padding-left: 25px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: 0;
      width: 35%;

      ${mq('medium')} {
        width: auto;
      }
    }

    [type=submit] {
      background-color: ${siteColors.blue1};
      color: ${siteColors.white};
      padding: 10px 40px;
      border: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      width: 65%;

      ${mq('medium')} {
        width: auto;
      }

      &:hover {
        background-color: ${siteColors.blue3};
      }
    }
  }
`

const Hero = () => (
  <StyledHero>
    <div className="constraint">
      <div className="h1-container">
        <h1>Discover Brüner Satellite Internet Bundles</h1>
      </div>
      <div className="p-container">
        <p>Jimmy B is here to make the world a better place, one connection at a time. </p>
      </div>
      <div>
        <form>
          <input type="text" name="zip-code" placeholder="Enter Zip"/>
          <input type="submit" value="Connect with the Bruner"/>
        </form>
      </div>
    </div>
  </StyledHero>
)

export default Hero;