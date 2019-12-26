import React, { useEffect, useState } from 'react'
import { MyBookingsContainer } from './styled'
import BottomNav from '../../components/BottomNav'
import BookingList from '../../components/BookingsList'
import Header from '../../components/Header'
import useNavs from '../../hooks/useNavs'
import useFlight from '../../hooks/useFlight'
import { getMyBookings } from '../../services/fligthService'
import LoadingIndicator from '../../components/LoadingIndicator'


const MyBookings = () => {
  const { selectedNav } = useNavs()
  const { flights, setFlights, setCurrentFlight } = useFlight()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchMyBookings()
  },[])

  const fetchMyBookings = async () => {
    setLoading(true)
    try {
      const response = await getMyBookings()
      setFlights(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header pageTitle={selectedNav}/>
      {loading ? 
        <LoadingIndicator /> : 
        <MyBookingsContainer>
          <BookingList list={flights.itens} selectCardItem={(item) => setCurrentFlight(item)} />
        </MyBookingsContainer>
      }
      <BottomNav />
    </>
  );
}

export default MyBookings;
