import React from "react"
import { Global, css } from '@emotion/core'
import 'typeface-maven-pro';
import 'typeface-source-sans-pro';
import { siteColors, mq } from './styleVariables';

const GlobalStyles = () => (
  <React.Fragment>
    <Global 
    styles={css`
      h1 {
        font-family: 'Maven Pro', sans-serif;
        color: ${siteColors.white};
        font-weight: 500;
        
        ${mq('small')} {
          font-size: 40px;
          line-height: 42px;
        }

        ${mq('medium')} {
          font-size: 50px;
          line-height: 52px;
        }

        ${mq('large')} {
          font-size: 60px;
          line-height: 62px;
        }
      }

      h2 {
        font-family: 'Maven Pro', sans-serif;
        color: ${siteColors.black};
        padding-bottom: 10px;
        margin-bottom: 0;
        font-weight: 400;

        ${mq('small')} {
          font-size: 36px;
          line-height: 38px;
        }

        ${mq('medium')} {
          font-size: 42px;
          line-height: 44px;
        }

        ${mq('large')} {
          font-size: 48px;
          line-height: 50px;
        }
      }

      h3 {
        font-family: 'Maven Pro', sans-serif;
        color: ${siteColors.black};
        padding-bottom: 15px;
        margin-bottom: 0;
        font-weight: 400;

        ${mq('small')} {
          font-size: 28px;
          line-height: 30px;
        }

        ${mq('medium')} {
          font-size: 32px;
          line-height: 36px;
        }

        ${mq('large')} {
          font-size: 36px;
          line-height: 38px;
        }
      }

      h4 {
        font-family: 'Source Sans Pro', sans-serif;
        color: ${siteColors.black};
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 0;
        padding-bottom: 10px;
      }

      h5 {
        font-family: 'Source Sans Pro', sans-serif;
        color: ${siteColors.black};
        font-size: 24px;
        line-height: 30px;
      }

      h6 {
        font-family: 'Source Sans Pro', sans-serif;
        color: ${siteColors.black};
        font-size: 12px;
        line-height: 18px;
      }

      p {
        font-family: 'Source Sans Pro', sans-serif;
        color: ${siteColors.black};
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 10px;
        margin-bottom: 0px;
      }

      a {
        cursor: pointer;
      }

      ul {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
        line-height: 24px;
      }

      summary {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 18px;
        line-height: 26px;
      }

      .constraint {
        margin: 0 auto;
        max-width: 1200px;
      }

      .content {
        padding-right: .9375rem;
        padding-left: .9375rem;
      }

      .columns {
        padding-left: .9375rem;
        padding-right: .9375rem;
      }

      img {
        margin-bottom: 0;
      }

      form {
        margin-bottom: 0;
      }

      // Helpers

      .padding-bottom-25 {
        padding-bottom: 25px;
      }

      .text-center {
        text-align: center;
      }

      .legal {
        font-size: 10px;
        line-height: 10px;
        color: ${siteColors.gray4};
      }
    `}
    />
  </React.Fragment>
);

export default GlobalStyles