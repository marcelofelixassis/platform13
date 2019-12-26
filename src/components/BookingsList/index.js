import React from 'react'
import { List, CardItem, RowDetails, Text } from './styled'
import { setDate } from '../../utils/formatter'

const BookingList = ({list, selectCardItem}) => {
  return (
   <List>
   {list.map(item => {
     return (
      <CardItem imageUrl={item.thumb} onClick={() => selectCardItem(item)}>
        <RowDetails>
          <Text fontSize={22}>{item.destination}</Text>
          <Text fontSize={16}>{setDate(item.outboundDate, item.inboundDate)}</Text>
        </RowDetails>
      </CardItem>
     )
   })}
   </List>
  );
}

export default BookingList;
