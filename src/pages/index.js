import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Layout from '../components/layout'
import top from '../assets/images/trice-headshot-marmal-top.svg'
import bottom from '../assets/images/trice-headshot-marmal-bottom.svg'
import Footer from '../components/Footer'


const MainSection = styled.section`
`;

const BioContainer = styled.div`
`;

const MarmalContainer = styled.div`
`;

const Top = styled.img`
`;

const Bottom = styled.img`
`;



class Index extends React.Component {

  render() {
    return (
      <>
      <Layout>
        <Helmet>

          {/*<!-- Primary Meta Tags -->*/}
          <title>Matt Trice Design | UX Design, UI Design</title>
          <meta name="title" content="Matt Trice Design | UX Design, UI Design" />
          <meta name="description" content="I'm a UX Designer in the ATL area. I love to make really cool things with really cool people." />
          <link rel="canonical" href="https://trice.design" />
          {/*<!-- Open Graph / Facebook -->*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://trice.design/" />
          <meta property="og:title" content="Matt Trice Design" />
          <meta property="og:description" content="I'm a UX Designer in the ATL area. I love to make really cool things with really cool people." />
          <meta property="og:image" content="https://trice.design/static/trice-design-share.png" />

          {/*<!-- Twitter -->*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://trice.design/" />
          <meta property="twitter:title" content="Matt Trice Design" />
          <meta property="twitter:description" content="I'm a UX Designer in the ATL area. I love to make really cool things with really cool people." />
          <meta property="twitter:image" content="https://trice.design/static/trice-design-share.png" />
        </Helmet>

        <Header />

        <div>
          <MainSection>
            <BioContainer className="container__bio">
              <h2>Matt Trice Design</h2>
              <p className="large">
                Hello, my name is Matt Trice. I'm a Designer in the ATL area.
                I'm currently pushing pixels and making really cool things with really cool people at <a href="//decentlabs.io" className="decent-purple">Decent Labs</a>.
              </p>
              <section>
                <ul className="icons">
                  <li>
                    <a href="https://dribbble.com/trice" className="icon larger fa-dribbble">
                      <span className="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/trice.design/" className="icon larger fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/matt-trice-5053b325/" className="icon larger fa-linkedin"
                    >
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </section>
            </BioContainer>
          </MainSection>
        </div>

      </Layout>
      <MarmalContainer className="container__marmal">
        <Top src={top} className="top" alt="wavy graphic at the top" />
        <Bottom src={bottom} className="bottom" alt="wavy graphic at the bottom" />
      </MarmalContainer>
      <Footer />
      </>
    )
  }
}

export default Index
