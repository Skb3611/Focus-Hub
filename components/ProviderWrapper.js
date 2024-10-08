"use client"
import React, { useEffect } from 'react'
import { store } from '@/app/store'
import { Provider } from 'react-redux'

const ProviderWrapper = ({ children }) => {

  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>

  )
}

export default ProviderWrapper
