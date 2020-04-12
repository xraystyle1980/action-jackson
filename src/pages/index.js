import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <div>
          <section>
                <h2>Matt Trice Design</h2>
                <p>
                  Designer in the ATL area.
                  Pushing pixels for Decent Labs.
                  Yes, I do UX AND UI. I know.
                </p>
                <section>

                  <ul className="icons">


                    <li>
                      <a href="https://codebushi.com" className="icon fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/codebushi/gatsby-starter-stellar"
                        className="icon fa-github"
                      >
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://codebushi.com" className="icon fa-dribbble">
                        <span className="label">Dribbble</span>
                      </a>
                    </li>
                  </ul>
                </section>

          </section>






        </div>
      </Layout>
    )
  }
}

export default Index
