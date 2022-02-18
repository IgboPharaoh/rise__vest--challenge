import React from 'react'
import styled from 'styled-components'
import phoneImage from '../../assets/header-phone.png'
import CustomButton from '../button/CustomButton'
import appleLogo from '../../assets/apple-logo.svg'
import googleLogo from '../../assets/googleplay-logo.svg'

const DownloadSection = () => {
  return (
    <StyledSection>
        <div className="download-section__text-container">
            <p className="download-section__title">Download The Rise App</p>
            <h2 className="download-section__heading" >Join our 100,000 users investing and setting long term goals!</h2>
            <p className="download-section__body-text" >Dollar investments that help you grow.</p> 
            <div className="download-section__button-section">
            <CustomButton
                    buttonText="Download on the"
                    spanText = "App Store"
                    fontSize="1.3"
                    icon={appleLogo}
                    paddingTopAndBottom="0.8"
                    paddingRightAndLeft="1.6"
                    buttonTextClassName = "buttonTextClassName"
                    className = "className-btnA"
                    backgroundColor= "var(--black)"
                    borderRadius = "1"
                />
                <CustomButton
                    buttonText="Download on the"
                    spanText = "Google Play"
                    fontSize="1.3"
                    icon={googleLogo}
                    paddingTopAndBottom="0.8"
                    paddingRightAndLeft="1.6"
                    buttonTextClassName = "buttonTextClassName"
                    className = "className-btnB"
                    backgroundColor= "var(--black)"
                    borderRadius = "1"
                />
            </div>      
        </div>
        <img src={phoneImage} alt="download-section" className="download-section__img" />
    </StyledSection>
  )
}

const StyledSection = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    gap: 6rem;
    padding: 8rem 2.4rem;
    color: var(--black);
    background-color: var(--assetTeal);
    height: 40rem;
    border-radius: 5rem;
    overflow: hidden;

    .download-section{
        &__img{
            width: 31.6rem;
        }
        &__heading{
            font-size: 3.6rem;
            line-height: 4.8rem;
            padding-top: 1.6rem;
        }
        &__title{
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-family: DM sans;
            color: var(--tealPrimary)
        }
        &__title, &__heading{
            letter-spacing: -0.05em;
            font-weight: 800;
        }
        &__body-text{
            font-size: 1.6rem;
            line-height: 2.4rem;
            padding: 1.6rem 0 3.2rem;
            font-family: DM sans;
        }
    }
    .buttonTextClassName{
    padding-left: 0.8rem;
    }
    .className-btnA {
        margin-right:1.6rem;
    }
    @media (max-width:841px){
        grid-template-columns: 1fr;
        gap: 5rem;
        text-align: center;
        align-items: center;

        .download-section{
        &__img{
            width: 31.6rem;
            margin: 0 auto;
        }
        &__heading{
            font-size: 2.4rem;
            line-height: 3rem;
        }
        &__body-text{
            padding: 1.6rem 0 2.8rem;
        }
        }
    }
    @media (max-width:400px){
        padding: 8rem 0.8rem;
        .className-btnA {
        margin-right:1rem;
        }
        .download-section{
        &__img{
            width: 20.8rem;
            margin: 0 auto;
        }
        &__heading{
            font-size: 2rem;
            line-height: 2.4rem;
        }
        &__body-text{
            padding: 1.6rem 0 2.8rem;
        }
        }
    }
`
export default DownloadSection