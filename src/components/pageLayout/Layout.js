import React from 'react'
import styled from 'styled-components'
import FeatureSection from '../feature-card/FeatureSection'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Sponsors from '../sponsors/Sponsors'

const Layout = () => {
  return (
    <StyledLayout>
        <Navbar/>
        <Header/>
        <Sponsors/>
        <FeatureSection/>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
    border: 1px solid teal;
    margin: 0 auto;
    padding: 0rem 4rem;
    max-width: 108.8rem;

    @media(max-width:767px) {
      padding: 0rem 2rem;
    }
`


export default Layout