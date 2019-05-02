import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables';
import ComponentStructure from './structure/componentStructure';

const StyledThreeColumn = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${props => props.bgColor ? props.bgColor : "transparent"};

  .before-content {
    padding-bottom: 30px;
  }

  h2 {
    text-align: center;
  }

  .column-container {
    display: flex;
    flex-wrap: wrap;

    .columns {
      padding-right: .9375rem;
      padding-left: .9375rem;
      width: 100%;

      ${mq('medium')} {
        width: 33.33%;
        border-left: 2px solid ${siteColors.blue1};
      }
    }
  }

  h3 {
    color: ${siteColors.blue1};

    &::after {
      content: '';
      border-bottom: 2px solid ${siteColors.blue1};
      height: 2px;
      width: 200px;
      display: block;
      position: relative;
      top: 10px;
      width: 75%;

      ${mq('medium')} {
        border-bottom: none;
      }
    }
  }

  p {
    padding-top: 10px;
  }

`

const ThreeColumn = ( {bgColor} ) => (
  <StyledThreeColumn bgColor={bgColor}>
    <ComponentStructure>
      <div className="before-content">
        <h2>It Is Possible to Pay Us More Money</h2>
      </div>
      <div className="column-container">
        <div className="column-one columns">
          <h3>Easy Care</h3>
          <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime.</p>
        </div>
        <div className="column-two columns">
          <h3>Voice</h3>
          <p>The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.</p>
        </div>
        <div className="column-three columns">
          <h3>DIRECTV</h3>
          <p>If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.</p>
        </div>
      </div>
    </ComponentStructure>
  </StyledThreeColumn>
)

export default ThreeColumn;