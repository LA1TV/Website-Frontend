import React from 'react'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { inputState } from 'utilities/hooks'
import config from '../../../config.json'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const Index = () => {
  const emailState = inputState()
  const router = useRouter()
  return <>
    <Heading>Login</Heading>
    <TextField label="Email" {...emailState}></TextField>
    <Button onClick={
      async function () {
        const res = await fetch(`${config.env.FRONTEND_DOMAIN}/api/account/login?email=${emailState.value}`)

        const statusCode = res.status

        let message
        if (statusCode === 429) {
          message = 'You already received a code recently, check your spam if you can\'t find it.'
        } else {
          message = 'We just emailed your code to you, it\'ll be there within 30 seconds.'
        }

        router.push({
          pathname: '/account/login/enterCode',
          query: { message: message }
        })
      }
    } text="Login" />
    <Paragraph>{emailState.value}</Paragraph>
  </>
}

export default Index
