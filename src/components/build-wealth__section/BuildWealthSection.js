import React from 'react'
import styled from 'styled-components'
import buildwealth from '../../assets/buildwealth.svg'
import CustomButton from '../button/CustomButton'

const BuildWealthSection = () => {
  return (
    <StyedSection>
        <img src={buildwealth} alt="Build-wealth" className="build-wealth__img" />
        <div className="build-wealth__text-container">
            <p className="build-wealth__title">The Rise App </p>
            <h2 className="build-wealth__heading" >Save for your <span>future</span></h2>
            <p className="build-wealth__body-text" >With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
            </p>
            <CustomButton
                buttonText= 'Start Saving'
                fontWeight = "700"
            />
        </div>
    </StyedSection>
  )
}
const StyedSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    justify-content: space-between;
    padding-top: 8rem;
    color: var(--black);

    .build-wealth{
        &__heading{
            font-size: 4rem;
            line-height: 4.8rem;
            padding-top: 0.8rem;
            span{
                color: var(--indigo);
            }
        }
        &__title{
            font-size: 1.8rem;
            line-height: 3rem;
            font-family: DM sans;
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
`

export default BuildWealthSection