import React, { Suspense } from 'react'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import fetch from 'isomorphic-unfetch'
import env from 'utilities/env'

const titles = {
  latest: 'The latest from LA1'
}
const descriptions = {
  latest: 'See what\'s been happening recently!'
}

const RecommendationsRow = React.lazy(() => import('components/RecommendationsRow'))

const columns = 5

const Index = ({ type }) => {
  const [rows, setRows] = React.useState([])

  const addRow = () => {
    fetch(`${env('FRONTEND_DOMAIN')}/api/recommendations/${type}?funct=count`).then((response) => {
      response.json().then((res) => {
        const newRows = []
        const loopCount = Math.floor(res.count / columns) + 1
        for (let i = 0; i < loopCount; i++) {
          newRows.push(<RecommendationsRow columns={columns} page={i + 1} type='latest'></RecommendationsRow>)
        }
        setRows(newRows)
      })
    })
  }

  React.useEffect(addRow, [])

  return (<>
    <Heading>{titles[type]}</Heading>
    <Paragraph>{descriptions[type]}</Paragraph>
    {rows.map((row, index) => (
      <Suspense key={index}>
        {row}
      </Suspense>
    ))}
  </>
  )
}

Index.getInitialProps = async ({ query: { type } }) => {
  return { type }
}

export default Index
