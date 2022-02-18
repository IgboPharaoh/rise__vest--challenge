import React from 'react'
import styled from 'styled-components'
import riselogo from '../../assets/riselogo-dark.svg'
import uparrow from '../../assets/uparrow.svg'

const Footer = () => {
  return (
    <StyledFooter>
        <section className="footer-section__left">
            <div>
                <img src={riselogo} alt="rise-logo" className="footer-section__logo"/>
                <p>About Us</p>
                <p>Careers</p>
                <p>FAQs</p>
                <p>Contact Info</p>
                <p>Press</p>
                <p>Rise Impact</p>
            </div>

            <div>
                <h4>Explore</h4>
                <div className="arrow-cont">
                    <p>Investmet Club</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
                <div className="arrow-cont">
                    <p>Blog</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
               
            </div>
        </section>

        <section className="footer-section__left">
            <div>
                <h4>Products</h4>
                <p>Rise App</p>
                <p>Wallets</p>
                <p>Asset Classes</p>
            </div>

            <div>
            <h4>Contact Us</h4>
                <div className="arrow-cont">
                    <p>0818 714 7405</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
                <div className="arrow-cont">
                    <p>hello@rise.capital</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
                <div className="arrow-cont">
                    <p>Newsletter</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
                <div className="arrow-cont">
                    <p>Instagram</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
                <div className="arrow-cont">
                    <p>Twitter</p>
                    <img src={uparrow} alt="up-arrow"/>
                </div>
            </div>
        </section>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--black);
    font-family: DM sans;
    padding: 10rem 0 4rem;
    letter-spacing: -0.05em;

    p{
        padding-bottom: 1.6rem;
    }
    h4{
        padding-bottom: 3.2rem;
        font-weight: 600;
    }
    p,h4{
        font-size: 1.6rem;
        line-height: 2.4rem;
    }
    .arrow-cont{
        display: flex;
        align-items: flex-start;
    }

    .footer-section{
        &__left, &__right{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        &__logo{
            padding-bottom: 3.2rem;
        }
    }
    @media (max-width:767px){
        grid-template-columns: 1fr;
        gap: 4rem;
    }
`
export default Footer