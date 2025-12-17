import Loader from '@/components/global/loader'
import React from 'react'

export default function LoadingDashboard() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Loader className='' state>
        ...Loading
      </Loader>
    </div>
  )
}
