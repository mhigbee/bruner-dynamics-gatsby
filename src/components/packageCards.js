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
    flex-wrap: wrap;

    .columns {
      flex-basis: 100%;

      ${mq('large')} {
        flex-basis: 25%;
      }

      ${mq('medium')} {
        flex-basis: 50%;
      }
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
      text-transform: uppercase;
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
    height: 135px;

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
    margin-top: auto;
    border: none;
    width: 100%;

    .button-callout {
      font-size: 16px;
    }

    .button-phone-number {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .after-legal {
    padding-top: 20px;

    ${mq('large')} {
      max-width: 60%;
      margin: 0 auto;
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
            <button className="package-card-button">
              <span className="button-callout">Order the Pamantha</span>
              <span className="button-phone-number">1.888.888.8888</span>
            </button>
          </div>
        </div>
        <div className="column-two columns">
          <div className="package-card">
            <div className="title-section">
              <p className="package-title">EL TEN ELEVEN</p>
            </div>
            <div className="price-section">
              <span className="dollars">50</span>
              <span className="cents">00</span>
              <span className="per-month">/</span>
              <span className="month">mo</span>
            </div>
            <p className="price-subtext">$700/mo after you’re officially rich</p>
            <div className="colored-line-break"></div>
            <ul className="features-section">
              <li className="bell-symbol">
                <p>Patriotic Media</p>
                <p>Consume any patriotic content for free.*</p>
              </li>
              <li className="video-symbol">
                <p>Jurassic Park Channel</p>
                <p>Channel 345 plays Jurassic Park all day</p>
              </li> 
              <li className="hand-symbol">
                <p>Chip Bag Service</p>
                <p>Stubborn bag of chips? We can help.</p>
              </li>
            </ul>
            <button className="package-card-button">
              <span className="button-callout">Select El Ten Eleven</span>
              <span className="button-phone-number">1.888.888.8888</span>
            </button>
          </div>
        </div>
        <div className="column-three columns">
         <div className="package-card">
            <div className="title-section">
              <p className="package-title">ST. Jimmy’s Special</p>
            </div>
            <div className="price-section">
              <span className="dollars">70</span>
              <span className="cents">00</span>
              <span className="per-month">/</span>
              <span className="month">mo</span>
            </div>
            <p className="price-subtext">$11/mo after you’ve proven worthy</p>
            <div className="colored-line-break"></div>
            <ul className="features-section">
              <li className="video-symbol">
                <p>Raft Jousting Channel</p>
                <p>Catch all the RJA action in one place!</p>
              </li>
              <li className="money-symbol">
                <p>Reptile Disease Network</p>
                <p>Snakes with warts? Look no further</p>
              </li>
              <li className="bell-symbol">
                <p>Broken Faucet Repair</p>
                <p>Anytime day or night.**</p>
              </li>
            </ul>
            <button className="package-card-button">
              <span className="button-callout">Become Enlightened</span>
              <span className="button-phone-number">1.888.888.8888</span>
            </button>
          </div>
        </div>
        <div className="column-four columns">
          <div className="package-card">
            <div className="title-section">
              <p className="package-title">Cult Hero Classic</p>
            </div>
            <div className="price-section">
              <span className="dollars">100</span>
              <span className="cents">00</span>
              <span className="per-month">/</span>
              <span className="month">mo</span>
            </div>
            <p className="price-subtext">-$1/mo after you demonstrate loyalty</p>
            <div className="colored-line-break"></div>
            <ul className="features-section">
              <li className="money-symbol">
                <p>Gaming Currency</p>
                <p>We now accept Mario and Sonic coins.</p>
              </li>
              <li className="bell-symbol">
                <p>Landline Service</p>
                <p>Crystal clear calls to Grandma.</p>
              </li>
              <li className="hand-symbol">
                <p>Shuttlecock Recovery</p>
                <p>We will retrieve stray shuttlecocks at your next badminton match.†</p>
              </li>
            </ul>
            <button className="package-card-button">
              <span className="button-callout">Join the Cult</span>
              <span className="button-phone-number">1.888.888.8888</span>
            </button>
          </div>
        </div>
      </div>
    </ComponentStructure>
    <ComponentStructure>
      <div className="after-legal">
        <p class="legal">*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill.</p>
        <p class="legal">**Ralph can’t come on Tuesday nights. Bowling league.</p> 
        <p class="legal">†Badminton match must be within a 45 mile radius of Ogden, UT.</p>
      </div>
    </ComponentStructure>
  </StyledPackageCards>
)

export default PackageCards;