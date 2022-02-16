import React from 'react'
import styled from 'styled-components'
import sponsorsLogo from '../../assets/sponsors.svg'

const Sponsors = () => {
  return (
    <StyledSponsors>
        <img src={sponsorsLogo} alt="Sponsors-logo"/>
    </StyledSponsors>
  )
}

const StyledSponsors = styled.div`
    display: flex;
    justify-content: center;
    padding: 4rem 0;

    @media(max-width:767px){
        img {
            width: 100%;
        }
    }
`
export default Sponsors