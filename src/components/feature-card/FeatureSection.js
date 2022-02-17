import React from 'react'
import FeaturesCard from './FeaturesCard'
import featureImgA from '../../assets/featureImgA.svg'
import featureImgB from '../../assets/featureImgB.svg'
import featureImgC from '../../assets/featureImgC.svg'
import featureImgD from '../../assets/featureImgD.svg'
import styled from 'styled-components'

const FeatureSection = () => {
  return (
    <StyledFeatureSection>
        <FeaturesCard
            featureTitle= "Invest your money in dollars"
            featureText= "By holding your investments in a stable currency, your money grows more over time and retains its value better."
            featureImg = {featureImgA}
            className="featureA"
        />
        <FeaturesCard
            featureTitle= "Choose what's best for you"
            featureText= "Unlike other platforms, Rise lets you pick between stock, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place"
            featureImg = {featureImgB}
            className="featureB"
        />
        <FeaturesCard
            featureTitle= "Set goals and reach them"
            featureText= "You can invest towards a goal on Rise --retirement, higher education, save for your home or travel budgets. Or create a goal of your own ad invest periodically to achieve them"
            featureImg = {featureImgC}
            className="featureC"
        />
        <FeaturesCard
            featureTitle= "We remember so you don't have to"
            featureText= "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your Investment, on schedule"
            featureImg = {featureImgD}
            className="featureD"
        />
    </StyledFeatureSection>
  )
}
const StyledFeatureSection = styled.div`
    .featureB, .featureD{
        flex-direction: row-reverse;
    }
    @media (max-width: 767px){
        .featureB, .featureD{
        flex-direction: column-reverse;
    }
    }
`

export default FeatureSection