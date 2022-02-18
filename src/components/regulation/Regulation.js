import React from 'react'
import styled from 'styled-components'
import colorblur1 from '../../assets/colorblur-left.svg'
import colorblur2 from '../../assets/colorblur-right.svg'
import mobileblur from '../../assets/colorblurmobile.svg'


const Regulation = () => {
  return (
    <StyledSection>
        <img src={colorblur1} alt="color-blur" className="img-1"/>
        <div>
            <h2>How we are Regulated</h2>
            <p>Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
        </div>
        <img src={colorblur2} alt="color-blur" className="img-2"/>
    </StyledSection>
  )
}

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    text-align:center;
    padding: 8rem 0;
    margin: 0 auto;

    h2{
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: -0.05em;
        font-weight: 800;
        color: var(--black)
    }
    p{
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: -0.05em;
        font-weight: 500;
        font-family: DM sans;
        padding-top: 1.6rem;
        color: var(--darkGray);
        max-width: 50rem;
    }
    img{
        height: 37.2rem;
    }
    .img-1{
        margin-left: -5rem;
        
    }
    .img-2{
        margin-right: -5rem;
        
    }
    @media (max-width: 1024px){
        .img-1{
        margin-left: 0;
        }
        .img-2{
            margin-right: 0; 
        }

    }
    @media (max-width: 767px){
        background-image: url(${mobileblur});
        padding: 8rem 2rem;
        img{
            display: none;
        }
        h2{
        font-size: 2.6rem;
        line-height: 2.8rem;
        font-weight: 700;
        z-index: 22;
        }
        p{
            font-size: 1.3rem;
            line-height: 2.4rem;
            font-weight: 400;
            padding-top: 1.6rem;
            z-index: 22;
        }
    }
`

export default Regulation