import React from 'react'
import styled from 'styled-components'
import AssetCard from './AssetCard'
import stocksImg from "../../assets/stocks-img.svg"
import realEstateImg from "../../assets/real-estate.svg"
import fixedIncomeImg from "../../assets/fixed-income.svg"

const AssetSection = () => {
  return (
    <StyledAssestSection>
        <h3 className="asset-section__title">Assest Classes</h3>
        <p className="asset-section__text">Its your money, choose where you invest it</p>
        <div className="asset-card__section">
            <AssetCard
                backgroundColor = "var(--assetOrange)"
                AssetCardTitle = "Stocks"
                AssetCardText = "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks."
                valueChange="Stocks"
                assetCardImg={stocksImg}
            />
            <AssetCard
                backgroundColor = "var(--assetIndigo)"
                AssetCardTitle = "Real Estate"
                AssetCardText = "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US."
                valueChange="Real Estate"
                assetCardImg={realEstateImg}
            />
            <AssetCard
                backgroundColor = "var(--assetTeal)"
                AssetCardTitle = "Fixed Income"
                AssetCardText = "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns."
                assetCardImg={fixedIncomeImg}
                valueChange="Fixed Income"
            />
            
        </div>
    </StyledAssestSection>
  )
}

const StyledAssestSection = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 4.8rem 0;
    text-align: center;
    .asset-section{
        &__title{
            font-size: 4rem;
            font-weight: 600;
            line-height: 4.3rem;
        }
        &__text{
            font-size: 1.6rem;
            font-family: DM sans;
            line-height: 2.4rem;
            padding: 1.2rem 0 4.2rem;
        }
        h3, p{
            letter-spacing: -0.05em;
            color: var(--black);
        }
    }
     .asset-card__section{
         display: grid ;
         grid-template-columns:1fr 1fr 1fr ;
         grid-template-columns: repeat(auto-fit, minmax(300px,1fr)) ;
         justify-content:space-between;
         gap: 2rem;
     }

     @media (max-width:767px){
         .asset-card__section{
            flex-direction: column;
            margin: 0 auto;
            grid-template-columns: repeat(auto-fit, minmax(250px,1fr)) ;
        }
     }
`

export default AssetSection