import React from 'react'
import styled from 'styled-components'
import Community from '../community-section/Community'
import DownloadSection from '../download-section/DownloadSection'
import Footer from '../footer/Footer'


const LayoutTwo = () => {
  return (
    <StyledLayout>
        <Community/>
        <DownloadSection/>
        <Footer/>
    </StyledLayout>
  )
}
const StyledLayout = styled.div`
    margin: 0 auto;
    padding: 0rem 3.2rem;
    max-width: 108.8rem;

    @media(max-width:767px) {
      padding: 0rem 2rem;
    }
`
export default LayoutTwo
