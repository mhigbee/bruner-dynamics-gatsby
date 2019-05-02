import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables'
import ComponentStructure from './structure/componentStructure'

const StyledCTA = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${props => props.bgColor ? props.bgColor : "transparent"};

  &::before {
    content: '';
    height: 30px;
    width: 30px;
    background-color: ${siteColors.blue1};
    position: relative;
    display: block;
    transform: rotate(45deg);
    top: -45px;
    left: calc(50% - 15px);
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    h3 {
      color: ${siteColors.white};
    }
  }

  a {

    &.button {
      color: ${siteColors.blue1};
      background-color: ${siteColors.white};
      padding: 10px 45px;
      border-radius: 5px;
      box-shadow: 0 3px 6px rgb(0, 0, 0, 30%);
    }
  }
`

const CTA = ( {bgColor} ) => (
  <StyledCTA bgColor={bgColor}>
    <ComponentStructure>
      <div className="flex-container">
        <h3>Get Connected With Brüner Dynamics Today.</h3>
        <a className="button">Call 1.888.888.8888</a>
      </div>
    </ComponentStructure>
  </StyledCTA>
)

export default CTA;