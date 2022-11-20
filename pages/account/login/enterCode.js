import React from 'react'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import TextField from 'components/FormFields/TextField'
import Button from 'components/Button'
import { inputState } from 'utilities/hooks'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import env from 'utilities/env'

const CodePage = () => {
  const codeState = inputState()
  const router = useRouter()
  const { message, callback } = router.query
  return <>
    <Heading>Enter the code emailed to you</Heading>
    <Paragraph>{message}</Paragraph>
    <TextField label="Code" {...codeState}></TextField>
    <Button onClick={
      async function () {
        const res = await fetch(`${env('FRONTEND_DOMAIN')}/api/account/exchangeCode?code=${codeState.value}`)

        const statusCode = res.status

        if (statusCode !== 200) {
          router.push({
            pathname: '/account/login/enterCode',
            query: { message: 'Authentication failed' }
          })
        } else {
          const response = await res.json()
          // eslint-disable-next-line no-undef
          sessionStorage.setItem('apikey', response.apikey)
          router.push({
            pathname: (callback !== undefined) ? callback : '/',
            query: { justLoggedIn: true }
          })
        }
      }
    } text="Login" />
  </>
}

export default CodePage
