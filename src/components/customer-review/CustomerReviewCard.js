import React from 'react'
import styled from 'styled-components'

const CustomerReviewCard = ({customerCardAvatar, customerCardName, customerCardText}) => {
  return (
    <StyledCard>
        <div className="customer-card__container">
            <p className="customer-card__text">{customerCardText}</p>
            <div className="customer-card__avatar-container">
                <img src={customerCardAvatar} alt="customer-avatar" className="customer-card__avatar"/>
                <p className="customer-card__name">{customerCardName}</p>
            </div>
        </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    border: 1px solid #ECFEFE;
    padding: 2.4rem;
    box-shadow: 0px 12px 24px 0px #40BBC326;
    border-radius: 0.5rem;

    .customer-card{
        &__container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        &__text{
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-family: DM sans;
            color: var(--darkGray);
            text-align: justify;
        }
        &__avatar-container{
            display: flex;
            align-items: center;
            padding-top: 2.4rem;
        }
        &__avatar{
            width: 3.2rem;
            height: 3.2rem;
            padding-right: 1.6rem;
        }
        &__name{
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1.4rem;
            color: var(--black);
            letter-spacing: -0.05em;
        }
    }
`

export default CustomerReviewCard