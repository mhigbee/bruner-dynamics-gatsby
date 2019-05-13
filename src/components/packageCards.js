import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables'
import ComponentStructure from './structure/componentStructure'
import 'typeface-maven-pro';
import IconLibertyBell from '../images/icons/icon-liberty-bell.svg'
import IconHands from '../images/icons/icon-hands.svg'
import IconMoney from '../images/icons/icon-money.svg'
import IconVideoStreaming from '../images/icons/icon-video-streaming.svg'

const StyledPackageCards = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  .column-container {
    display: flex;

    .columns {
      flex-basis: 25%;
    }
  }

  .package-card {
    padding: 20px;

    &:hover {
      box-shadow: 0 7px 15px 0 rgba(0,0,0,0.25);

      .package-title {
        color: ${siteColors.green2};
      }

      .colored-line-break {
        border-color: ${siteColors.green2};
      }

      .package-card-button {
        background-color: ${siteColors.green2};
      }
    }
  }

  .title-section {
    display: flex;

    .package-title {
      color: ${siteColors.blue1};
      font-weight: 700;
      font-size: 12px;
    }
  }

  .price-section {
    font-family: 'Maven Pro', sans-serif;
    display: flex;
    font-weight: 400;

    .dollars {
      font-size: 36px;
      letter-spacing: -2px;
    }

    .cents {
      font-size: 20px;
      line-height: 16px;
    }

    .per-month {
      font-size: 27px;
      line-height: 28px;
    }

    .month {
      font-size: 20px;
      line-height: 37px;
    }
  }

  .price-subtext {
    font-size: 14px;
    color: ${siteColors.gray4};
  }
  
  .colored-line-break {
    border-bottom: 1px solid ${siteColors.blue1};
    margin-bottom: 20px;
  }

  .features-section {
    list-style: none;
    margin-left: 0;

    li {
      padding-left: 30px;

      p {
        margin-bottom: 0;
        padding-bottom: 0;
      }

      p:last-of-type {
        font-size: 10px;
        line-height: 10px;
        color: ${siteColors.gray4};
      }

      &.money-symbol {
        background-image: url(${IconMoney});
        background-repeat: no-repeat;
        background-position: 0 8px;
      }

      &.video-symbol {
        background-image: url(${IconVideoStreaming});
        background-repeat: no-repeat;
        background-position: 0 8px;
      }

      &.hand-symbol {
        background-image: url(${IconHands});
        background-repeat: no-repeat;
        background-position: 0 8px;
      }

      &.bell-symbol {
        background-image: url(${IconLibertyBell});
        background-repeat: no-repeat;
        background-position: 0 8px;
      }
    }
  }

  .package-card-button {
    background-color: ${siteColors.blue1};
    color: white;
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    font-family: 'Maven Pro', sans-serif;

    .button-callout {
      font-size: 16px;
    }

    .button-phone-number {
      font-size: 18px;
      font-weight: 700;
    }
  }
`

const PackageCards = () => (
  <StyledPackageCards>
    <ComponentStructure>
      <div className="column-container">
        <div className="column-one columns">
          <div className="package-card">
            <div className="title-section">
              <p className="package-title">PAMANTHA</p>
            </div>
            <div className="price-section">
              <span className="dollars">30</span>
              <span className="cents">00</span>
              <span className="per-month">/</span>
              <span className="month">mo</span>
            </div>
            <p className="price-subtext">$5/mo after we’re best friends</p>
            <div className="colored-line-break"></div>
            <ul className="features-section">
              <li className="money-symbol">
                <p>Free Change Service</p>
                <p>Need to break a $20? We can help.</p>
              </li>
              <li className="video-symbol">
                <p>Video Suggestions</p>
                <p>We’ll send you hilarious youtube clips</p>
              </li>
              <li className="hand-symbol">
                <p>Complimentary Claps</p>
                <p>Included at no additional cost</p>
              </li>
            </ul>
            <a className="package-card-button">
              <span className="button-callout">Order the Pamantha</span>
              <span className="button-phone-number">1.888.888.8888</span>
            </a>
          </div>
        </div>
        <div className="column-two columns">
        <div className="package-card">TEST</div>
        </div>
        <div className="column-three columns">
        <div className="package-card">TEST</div>
        </div>
        <div className="column-four columns">
          <div className="package-card">TEST</div>
        </div>
      </div>
    </ComponentStructure>
  </StyledPackageCards>
)

export default PackageCards;