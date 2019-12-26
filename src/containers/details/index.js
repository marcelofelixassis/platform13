import React from 'react';
import useFligth from '../../hooks/useFlight'
import { DetailsHeader, DetailsContainer, HeaderTitle, Text, Arrow } from './styled'
import { setDate } from '../../utils/formatter'
import { FaArrowLeft } from 'react-icons/fa'

const Details = () => {
  const { flights } = useFligth()
  console.log(flights)
  return (
    <>
    <DetailsHeader imageUrl={flights.currentFlight.thumb}>
      <Arrow><FaArrowLeft fill="#fff"/></Arrow>
      <HeaderTitle>
        <Text fontSize={22}>{flights.currentFlight.destination}</Text>
        <Text fontSize={16}>{setDate(flights.currentFlight.outboundDate, flights.currentFlight.inboundDate)}</Text>
      </HeaderTitle>
    </DetailsHeader>
    <DetailsContainer>
      <h1 style={{color: '#fff'}} >teste</h1>
    </DetailsContainer>
    </>
  );
}

export default Details;
