// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { siteColors, mq } from './styleVariables'
import footerBackgroundImage from "../images/backgrounds/footer-background-image.png"
import brunerColoredLogo from "../images/bruner-dynamics-color-logo.png"

const StyledFooter = styled.div`
  padding-top: 70px;

  .footer-content-container {
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    margin-bottom: 20px;
  }

  .green-separator {
    border-bottom: 1px solid ${siteColors.green1};
    margin-bottom: 20px;
  }

  .background-container {
    background-image: url(${footerBackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    margin-top: -270px;

    ${mq('medium')} {
      height: 500px;
      margin-top: -300px;
    }

    ${mq('large')} {
      margin-top: -200px;
      height: 600px;
    }
  }

  .phone-number {
    font-weight: 700;
  }
`

const Footer = () => (
  <>
    <StyledFooter>
      <div className="constraint">
        <div className="content">
          <div className="footer-content-container">
            <div className="logo-container">
              <img src={brunerColoredLogo} alt="logo"/>
            </div>
            <div className="green-separator"></div>
            <div className="footer-legal">
              <h4>Order Now</h4>
              <h4 className="phone-number">1.888.888.8888</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="background-container"></div>
    </StyledFooter>
  </>
)

export default Footer
