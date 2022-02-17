import React from 'react'
import styled from 'styled-components'

const FeaturesCard = ({className, featureTitle, featureText, featureImg }) => {
  return (
    <StyledFeatures className={className}>
        <div className="card-text__section">
            <h3 className="feature__title">{featureTitle}</h3>
            <p className="feature__text">{featureText}</p>
            <div className="feature__container-link">
                <a href="https://" className="feature__link">Start investing now</a>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5.50021C0 5.22421 0.224 5.00021 0.5 5.00021L10.4747 5.00021L6.65525 1.36221C6.4555 1.17196 6.44725 0.855713 6.638 0.655213C6.8285 0.455213 7.14475 0.447462 7.34475 0.637963L11.707 4.79296C11.896 4.98196 12 5.23296 12 5.50021C12 5.76721 11.896 6.01846 11.6982 6.21571L7.34475 10.3622C7.14475 10.5527 6.8285 10.5447 6.638 10.345C6.44725 10.1452 6.45525 9.82871 6.65525 9.63821L10.4908 6.00021L0.5 6.00021C0.224 6.00021 0 5.77621 0 5.50021Z" fill="#07969E"/>
                </svg>
            </div>
        </div>
       
        <img src={featureImg} alt="feature__img" className="feature__img"/>
    </StyledFeatures>
  )
}

const StyledFeatures = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;
    align-items: center;

    .feature{
        &__title{
            font-size:3.2rem;
            font-weight: 800;
            color: var(--lightBlack);
            line-height: 3.84rem;
            letter-spacing: -0.05em;
        }
        &__text{
            font-size:1.4rem;
            font-family: DM sans; 
            padding: 1rem 0 2.4rem;
            line-height: 2.4rem;
            color: var(--black);
        }
        &__container-link{
            display: flex;
            align-items: baseline;
            
        }
        &__link{
            text-decoration: none;
            font-size:1.8rem;
            font-weight: 600;
            color: var(--tealPrimary);
            letter-spacing: -0.05em;
            margin-right: 1.6rem;
        }
    }
    @media (max-width: 868px){
        .feature__img{
                width: 32.4rem;
            }
    }
    
    @media (max-width: 767px){
        flex-direction: column-reverse;
        text-align: center;

        .feature{
            &__container-link{
                display:none;
            }
        }

        .feature__img{
                width: 32.4rem;
            }
        }
    }
`

export default FeaturesCard