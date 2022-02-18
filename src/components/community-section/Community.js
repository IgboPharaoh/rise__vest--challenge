import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'
import community from '../../assets/community.png'


const Community = () => {
  return (
    <StyedSection>
        <div className="community__text-container">
            <h2 className="community__heading" >Join The Rise Community</h2>
            <p className="community__body-text">If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors. </p>
            <CustomButton
                buttonText= 'Join our Community'
                fontWeight = "700"
                backgroundColor= "var(--buttonTeal)"
                textColor='var(--black)'
            />
        </div>
        <img src={community} alt="community" className="community__img" />
    </StyedSection>
  )
}
const StyedSection = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    padding: 10.2rem 0;
    color: var(--black);

    .community{
        &__img{
            width: 38.6rem;
        }
        &__heading{
            font-size: 4rem;
            font-weight: 700;
            line-height: 4.8rem;
            padding-top: 0.8rem;
            letter-spacing: -0.05em;
        }
        &__body-text{
            font-size: 1.4rem;
            line-height: 2.4rem;
            padding: 1.6rem 0 3.2rem;
            font-family: DM sans;
            max-width: 47.8rem;
        }
    }
    @media (max-width:767px){
        grid-template-columns: 1fr;
        text-align:center;
        .community{
        &__img{
            width: 28.0rem;
            margin: 0 auto;
        }
        &__heading{
            font-size: 3.2rem;
            line-height: 3rem;
        }
        &__body-text{
            font-size: 1.4rem;
            line-height: 2.4rem;
            padding: 1.6rem 0 3.2rem;
            max-width: 100%;
        }
    }
    }
`
export default Community