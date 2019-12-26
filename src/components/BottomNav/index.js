import React from 'react'
import { BottomNavContainer } from './styled'
import IconButtomNav from '../IconBottomNav'
import useNavs from '../../hooks/useNavs'

const BottomNav = () => {
  const { selectedNav, setSelectedNav } = useNavs()

  const handleChangeNav = (name) => {
    setSelectedNav(name)
  }

  return (
    <BottomNavContainer>
      <IconButtomNav name="Book Flights" actionChangeNav={handleChangeNav} active={selectedNav === "Book Flights"} />
      <IconButtomNav name="Map View" actionChangeNav={handleChangeNav} active={selectedNav === "Map View"} />
      <IconButtomNav name="Flight Status" actionChangeNav={handleChangeNav} active={selectedNav === "Flight Status"} />
      <IconButtomNav name="My Profile" actionChangeNav={handleChangeNav} active={selectedNav === "My Profile"} />
    </BottomNavContainer>
  );
}

export default BottomNav;
