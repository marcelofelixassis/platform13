import React from 'react'
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styled'

const LoadingIndicator = () => {
  return (
    <LoadingContainer>
      <ReactLoading type={'bars'} color={"#fff"} height={80} width={80} />
    </LoadingContainer>
  );
}

export default LoadingIndicator;
