import React from 'react'
import styled from 'styled-components'
import CustomerReviewCard from './CustomerReviewCard'
import ladeImg from '../../assets/ladeimg.svg'
import jesseImg from '../../assets/jesse.svg'
import rayeImg from '../../assets/raye.svg'

const CustomerReviewSection = () => {
  return (
    <StyedSection>
        <div className="customer-review__text-container">
            <h2 className="customer-review__heading">From The People Who Use Rise</h2>
            <p className="customer-review__text">Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
        </div>
        <div className="customer-review__review-container">
            <CustomerReviewCard
                customerCardName = "Lade"
                customerCardText = "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
                customerCardAvatar = {ladeImg}
            />
            <CustomerReviewCard
                customerCardName = "Jesse"
                customerCardText = "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable."
                customerCardAvatar = {jesseImg}
            />
            <CustomerReviewCard
                customerCardName = "Raye"
                customerCardText = "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria."
                customerCardAvatar = {rayeImg}
            />
        </div>
    </StyedSection>
  )
}
const StyedSection = styled.div`
    text-align: center;
    margin: 0 auto;

    .customer-review{
        &__heading{
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: -0.05em;
            font-weight: 800;
            color: var(--tealPrimary)
        }
        &__text{
            font-size: 1.8rem;
            line-height: 2.4rem;
            letter-spacing: -0.05em;
            font-weight: 500;
            font-family: DM sans;
            padding-top: 1.6rem;
            color: var(--darkGray);
        }
        &__review-container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-columns: repeat(auto-fit, minmax(300px,1fr)) ;
            justify-content:space-between;
            gap: 2rem;
            margin: 0 auto;
        }
        &__text-container{
            max-width: 60rem;
            margin: 0 auto;
            padding-bottom: 4rem;
        }
    }
    @media(max-width:767px){
        padding: 8rem 2rem;
        .customer-review{
        &__heading{
            font-size: 2.4rem;
            line-height: 3rem;
        }
        &__text{
            font-size: 1.4rem;
            line-height: 2rem;
        }
        &__review-container{
            grid-template-columns: repeat(auto-fit, minmax(250px,1fr)) ;
        }
    }

`
export default CustomerReviewSection