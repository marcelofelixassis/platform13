import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardItem = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  width: 440px;
  height: 140px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: inset 0 0 100px #000;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 10px #000;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 100% !important;
  }
`
export const RowDetails = styled.div`
  margin: 10px;
  display: flex;
  height: 90%;
  justify-content: space-between;
  align-items: flex-end;
`
export const Text = styled.span`
  color: #fff;
  font-size: ${props => props.fontSize}px;
`