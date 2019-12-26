import moment from 'moment'

export const setDate = (outboundDate, inboundDate) => {
  return `${moment(outboundDate).format('DD MMM')} - ${moment(inboundDate).format('DD MMM')}`
}