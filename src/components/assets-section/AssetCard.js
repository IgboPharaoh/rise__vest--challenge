import React from 'react'
import styled from 'styled-components'

const AssetCard = ({backgroundColor, AssetCardTitle, AssetCardText,assetCardImg, valueChange  }) => {
  return (
    <StyledAssetCard backgroundColor={backgroundColor}>
      <div ></div>
      <div className= "asset-card__ppties-container">

        <div className = "asset-card__circle">
          <img src={assetCardImg} alt='asset-img' className='asset-card__img'/>
        </div>

        <h1 className="asset-card__title">{AssetCardTitle}</h1>

        <div>
          <p className="asset-card__body-text">{AssetCardText}</p>
        </div>

        <div>
          <p className="asset-card__history-text"><span className="asset-card__span">Historical returns:</span> 14% per annum</p>
          <p className="asset-card__risk-text"><span className="asset-card__span">Risk Level:</span> Medium</p>
        </div>

        <div className="asset-card__container-link">
          <a href="https://" className="asset-card__link">Learn how {valueChange} works</a>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5.50021C0 5.22421 0.224 5.00021 0.5 5.00021L10.4747 5.00021L6.65525 1.36221C6.4555 1.17196 6.44725 0.855713 6.638 0.655213C6.8285 0.455213 7.14475 0.447462 7.34475 0.637963L11.707 4.79296C11.896 4.98196 12 5.23296 12 5.50021C12 5.76721 11.896 6.01846 11.6982 6.21571L7.34475 10.3622C7.14475 10.5527 6.8285 10.5447 6.638 10.345C6.44725 10.1452 6.45525 9.82871 6.65525 9.63821L10.4908 6.00021L0.5 6.00021C0.224 6.00021 0 5.77621 0 5.50021Z" fill="#07969E"/>
                </svg>
        </div>
      </div>
    </StyledAssetCard>
  )
}

const StyledAssetCard = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor || 'var(--tealPrimary)'};
  display: grid;
  grid-template-rows:1fr 3fr;
  border-radius: 1.6rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  
  .asset-card {
    &__ppties-container{
      display: grid;
      grid-template-rows: 0.1fr 1fr 2fr 1fr 0.1fr;
      align-items: flex-start;
      background-color: var(--white);
      padding: 0 1.6rem 3.2rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &__title{
      font-size:2.4rem;
      font-weight: 600;
      letter-spacing: -0.05em;
      line-height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    &__body-text{
      padding: 1rem 0 0.8rem;
    }
    &__link{
      text-decoration: none;
      font-size:1.6rem;
      font-weight: 600;
      color: var(--tealPrimary);
      letter-spacing: -0.05em;
      margin-right: 1.6rem;
    }
    &__circle{
      background-color: var(--white);
      border-radius:50%;
      width: 11.5rem;
      height: 11.5rem;
      margin: 0 auto;
      display: flex;
      align-items:center;
      justify-content: center;
      margin-top: -5.5rem;
    }
  }
  p{
    font-size:1.6rem;
    line-height: 2.4rem;
    font-family: DM sans;
    letter-spacing: -0.05em;
    color: var(--assetGray);
    span{
      color: var(--borderGray);
    }
  }
`

export default AssetCard