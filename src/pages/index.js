import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Layout from '../components/layout'
import styled from 'styled-components'
import top from '../assets/images/trice-headshot-marmal-top.svg'
import bottom from '../assets/images/trice-headshot-marmal-bottom.svg'
import Footer from '../components/Footer'

const MainSection = styled.section`

`;

const BioContainer = styled.div`
  padding: 0 12em;
  text-align: left;
`;

const MarmalContainer = styled.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.img`
  width: 100%;
  max-width: 100%;
  position: relative;
  top: -10px;
`;

const Bottom = styled.img`
  width: 100%;
  max-width: 100%;
  position: relative;
  bottom: -10px;
`;




class Index extends React.Component {


  render() {
    return (
      <>
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <div>
          <MainSection>
            <BioContainer>
              <h2>Matt Trice Design</h2>
              <p className="large">
                Hello, my name is Matt Trice. I'm a Designer in the ATL area.
                I'm currently pushing pixels and making really cool things with really cool people at Decent Labs. Yes, I do UX <span style={{ fontWeight: '900' }}>&amp;</span> UI. I know.
              </p>
              <section>
                <ul className="icons">
                  <li>
                    <a href="https://www.instagram.com/trice.design/" className="icon fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/matt-trice-5053b325/"
                      className="icon fa-linkedin"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/trice" className="icon fa-dribbble">
                      <span className="label">Dribbble</span>
                    </a>
                  </li>
                </ul>
              </section>
            </BioContainer>
          </MainSection>
        </div>

      </Layout>
      <MarmalContainer className="marmal-container">
        <Top src={top} alt="wavy graphic at the top" />
        <Bottom src={bottom} alt="wavy graphic at the bottom" />
      </MarmalContainer>
      <Footer />
      </>
    )
  }
}

export default Index
