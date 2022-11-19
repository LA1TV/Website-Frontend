import React from 'react'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import TextField from 'components/FormFields/TextField'
import Button from 'components/Button'
import { inputState } from 'utilities/hooks'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const Index = () => {
  const emailState = inputState()
  const router = useRouter()
  const { callback } = router.query
  // router.prefetch('/account/login/enterCode')
  return <>
    <Heading>Login</Heading>
    <TextField label="Email" {...emailState}></TextField>
    <Button onClick={
      async function () {
        const res = await fetch(`${process.env.FRONTEND_DOMAIN}/api/account/login?email=${emailState.value}&t=${Date.now()}`)

        const statusCode = res.status

        let message
        if (statusCode === 429) {
          message = 'You already received a code recently, check your spam if you can\'t find it.'
        } else {
          message = 'We just emailed your code to you, it\'ll be there within 30 seconds.'
        }

        const query = { message: message }
        if (callback !== undefined) {
          query.callback = callback
        }

        router.push({
          pathname: '/account/login/enterCode',
          query: query
        })
      }
    } text="Login" />
    <Paragraph>{emailState.value}</Paragraph>
  </>
}

export default Index
