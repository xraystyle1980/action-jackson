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



        <div id="main">
          <section className="main">

                <header className="major">
                  <h2>Matt Trice Design</h2>
                </header>
                <p>
                  Designer in the ATL area.
                  Pushing pixels for Decent Labs.
                  Yes, I do UX AND UI. I know.
                </p>

      
          </section>






        </div>
      </Layout>
    )
  }
}

export default Index
