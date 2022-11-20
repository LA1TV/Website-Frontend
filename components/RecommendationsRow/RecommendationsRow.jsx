import React from 'react'
import VideoLink, { VideoLinkSkeleton } from '../VideoLink'
import Row from 'layouts/Row'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import env from 'utilities/env'

const StyledDiv = styled.div`
min-height: 10vh
`

const chunkArray = function (arr, chunkSize) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}
const RecommendationsRow = ({ type, columns, rows = 1, page = 1, loadedCallback = (isFinalPage) => {} }) => {
  const [recommendations, setRecommendations] = React.useState([])
  const skeletons = []
  for (let i = 0; i < columns; i++) {
    skeletons.push(<VideoLinkSkeleton></VideoLinkSkeleton>)
  }

  const loadRecommendations = function (page) {
    fetch(`${env('FRONTEND_DOMAIN')}/api/recommendations/${type}?page=${page}&count=${rows * columns}`).then((response) => {
      response.json().then((res) => {
        const recommend = chunkArray(res, columns)
        setRecommendations(recommend)
        console.log(recommend)
        loadedCallback(res.length < (rows * columns))
      })
    })
  }

  React.useEffect(() => loadRecommendations(page), [page, columns, rows])
  React.useEffect(() => loadRecommendations(page), [])

  return <StyledDiv>
    {recommendations.length === 0
      ? <Row recursive count={columns}>
        {skeletons.map((s, index) => <span key={index}>
          {s}
        </span>)}
      </Row>
      : recommendations.map((chunk, index) =>
        <Row recursive key={index} count={columns}>
          {chunk.map((r) => <span key={r.id}>
            <VideoLink
              title={r.name}
              description={r.description}
              poster={`${env('S3_DOMAIN')}/${r.thumbnailS3Bucket}/${r.thumbnailS3Object}`}
              link={`/watch/${r.id}`}
            ></VideoLink>
          </span>)}
        </Row>
      )
    }
  </StyledDiv>
}

export default RecommendationsRow
