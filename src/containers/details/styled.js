import styled from 'styled-components'

export const DetailsHeader = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
`

export const DetailsContainer = styled.div`
  padding: 20px 5% 90px 5%;
`

export const HeaderTitle = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`

export const Text = styled.span`
  color: #fff;
  font-size: ${props => props.fontSize}px;
`

export const Arrow = styled.div`
  width: 100%;
  /* padding: 15px; */
`