import React, { Children } from 'react'
import styled from 'styled-components'

const PageContainer = () => {
  return (
    <StyledContainer>{Children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
    margin: 0 8rem;
`

export default PageContainer