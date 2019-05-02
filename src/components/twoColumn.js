import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import ComponentStructure from './structure/componentStructure';

const StyledTwoColumn = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${props => props.bgColor ? props.bgColor : "transparent"};

  .before-content {
    padding-bottom: 30px;

    p {
      text-align: center;
    }

    .before-content-subtext {
      ${mq('large')} {
        width: 45%;
        margin: 0 auto;
      }
    }
  }

  h2 {
    text-align: center;
  }

  .column-container {
    display: grid;
    grid-template-columns: 1fr;

    ${mq('medium')} {
      grid-template-columns: 1fr 1fr;
    }


    .columns {
      padding-right: .9375rem;
      padding-left: .9375rem;
      padding-bottom: 10px;

      ${mq('medium')} {
        padding-bottom: 0;
      }
    }

    .column-one {
      ${mq('medium')} {
        grid-column: 1/2;
      }
    }

    .column-two {
      ${mq('medium')} {
        grid-column: 2/2;
      }
    }
  }

  .top-section {
    background-color: ${siteColors.blue1};
    padding: 15px 30px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: ${siteColors.boxShadow1};
    grid-row: 1;
  }

  .bottom-section {
    padding: 30px;
    background-color: ${siteColors.white};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: ${siteColors.boxShadow1};
    grid-row: 2;
  }

  h3 {
    color: ${siteColors.white};
    text-align: center;
    padding-bottom: 0;
  }
`

const TwoColumn = ( {bgColor} ) => (
  <StyledTwoColumn bgColor={bgColor}>
    <ComponentStructure>
      <div className="before-content">
        <h2 className="padding-bottom-25">Equipment</h2>
        <div className="before-content-subtext">
          <p>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home.</p>
        </div>
      </div>
      <div className="column-container">
        <div className="column-one columns">
          <div className="top-section">
            <h3>Brüner Satellite Dish</h3>
          </div>
          <div className="bottom-section">
            <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
          </div>
        </div>
        <div className="column-two columns">
          <div className="top-section">
            <h3>Voice</h3>
          </div>
          <div className="bottom-section">
            <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. </p>
          </div>
        </div>
      </div>
    </ComponentStructure>
  </StyledTwoColumn>
)

export default TwoColumn;