import React from 'react'
import Loading from './basics/Loading';

interface Props {
    loading: boolean
}

const LoadingComp = ({loading}:Props) => {
  return (
      loading ? (
          <div className='flex justify-center items-center w-full'>
          <Loading/>
      </div>
      ) : null
  )
}

export default LoadingComp