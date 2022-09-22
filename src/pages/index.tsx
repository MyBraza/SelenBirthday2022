import React, { FC } from 'react'
import { HomePageTemplate } from '@components/templates'
import { useDispatch } from 'react-redux'
import { helloWorld } from '@store/commonStore/actions'

const HomePage: FC = () => {
  const dispatch = useDispatch()

  dispatch(helloWorld({ hello: 'world' }))

  return (
    <>
      <HomePageTemplate />
    </>
  )
}

export default HomePage
