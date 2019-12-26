import styled from 'styled-components'
import { FaMapMarkedAlt, FaRegUserCircle, FaCrosshairs, FaPlane } from 'react-icons/fa'

export const IconText = styled.span`
  color: ${props => props.active ? '#fff' : '#4b4848'};
  margin-top: 5px;
  font-size: 12px;
`

export const SyFaMapMarkedAlt = styled(FaMapMarkedAlt)`
  fill: ${props => props.active ? '#fff' : '#4b4848'};
  font-size: 25px;
`

export const SyFaRegUserCircle = styled(FaRegUserCircle)`
  fill: ${props => props.active ? '#fff' : '#4b4848'};
  font-size: 25px;
`

export const SyFaCrosshairs = styled(FaCrosshairs)`
  fill: ${props => props.active ? '#fff' : '#4b4848'};
  font-size: 25px;
`

export const SyFaPlane = styled(FaPlane)`
  fill: ${props => props.active ? '#fff' : '#4b4848'};
  font-size: 25px;
`

export const IconBottomNavContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${props => props.active && "5px solid #14e9cd"};

  &:hover {
    cursor: ${props => !props.active && "pointer"};
    ${IconText} {
      color: #fff;
    }
    ${SyFaMapMarkedAlt} {
      fill: #fff;
    }
    ${SyFaRegUserCircle} {
      fill: #fff;
    }
    ${SyFaCrosshairs} {
      fill: #fff;
    }
    ${SyFaPlane} {
      fill: #fff;
    }
  }
`

