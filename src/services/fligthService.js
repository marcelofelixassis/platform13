import axios from 'axios'

export const getMyBookings = () => {
  return axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
}
