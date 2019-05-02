import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import SidebySide from "../components/sideBySide";
import { siteColors } from '../components/styleVariables';
import ThreeColumn from "../components/threeColumn";
import CTA from "../components/cta";
import TwoColumn from "../components/twoColumn";
import FAQ from "../components/faq"
// Image import
import DeviceImage from "../images/bruner-device-set-600s.png"
import SatellitleImage from "../images/satellite-cut-out-small.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero/>
    <SidebySide
      bgColor={siteColors.gray2} 
      imageAlt="devices"
      imagePath={DeviceImage}
    >
      <h3>We’re Here to Brand Everything, Everywhere, Anytime</h3>
      <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
    </SidebySide>
    <ThreeColumn />
    <CTA bgColor={siteColors.blue1}/>
    <SidebySide
      imageAlt="satellite image"
      imagePath={SatellitleImage}
    >
      <h2>What is a Brüner?</h2>
      <p>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general.</p>
      <p>Brüner Dynamics is on course to change the world: </p>
      <ul>
        <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day.</li>
        <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
      </ul>
    </SidebySide>
    <TwoColumn bgColor={siteColors.gray2} />
    <FAQ />
  </Layout>
)

export default IndexPage
