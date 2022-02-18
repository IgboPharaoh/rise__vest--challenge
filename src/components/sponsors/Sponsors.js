import React from 'react'
import styled from 'styled-components'
import sponsorsLogo from '../../assets/sponsors2.png'

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
    height: 6rem;

    @media(max-width:767px){
        img {
            width: 100%;
            height: 6rem;
        }
    }
`
export default Sponsors