import React from 'react'
import { 
  IconBottomNavContainer,
  IconText,
  SyFaMapMarkedAlt,
  SyFaRegUserCircle,
  SyFaCrosshairs,
  SyFaPlane,
} from './styled'

const IconBottomNav = ({ name, active, actionChangeNav }) => {

  const selectIcon = () => {
    switch (name) {
      case 'Book Flights':
        return <SyFaPlane active={active} />
      case 'Map View':
        return <SyFaMapMarkedAlt active={active} />
      case 'Flight Status':
        return <SyFaCrosshairs active={active} />
      case 'My Profile':
        return <SyFaRegUserCircle active={active} />
      default:
        return <></>
    }
  }

  return (
    <IconBottomNavContainer active={active} onClick={() => actionChangeNav(name)}>
      {selectIcon()}
      <IconText active={active} >{name}</IconText>
    </IconBottomNavContainer>
  );
}

export default IconBottomNav;
