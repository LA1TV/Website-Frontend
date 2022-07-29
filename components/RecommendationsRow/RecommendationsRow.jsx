import React from 'react'
import styled from 'styled-components'
import VideoLink from '../VideoLink'
import Row from 'layouts/Row'
import fetch from 'isomorphic-unfetch'
import config from '../../config'

const StyledImg = styled.img`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`

const StyledVideoLinkDiv = styled.div`
  position: relative;
`
const chunkArray = function (arr, chunkSize) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}
const RecommendationsRow = ({ type, columns, rows = 1 }) => {
  const [recommendations, setRecommendations] = React.useState([])
  const [page, setPage] = React.useState(1)

  const loadRecommendations = function (page) {
    fetch(`${config.env.FRONTEND_DOMAIN}/api/recommendations/${type}?page=${page}&count=${rows * columns}`).then((response) => {
      response.json().then((res) => {
        const recommend = chunkArray(res, columns)
        setRecommendations(recommend)
        console.log(recommend)
      })
    })
  }

  React.useEffect(() => loadRecommendations(page), [page])

  return recommendations.length === 0 ? null : (
    <>
      {recommendations.map((chunk, index) =>
        <Row recursive key={index} count={columns}>
          {chunk.map((r) => <span key={r.id}>
            <VideoLink
              title={r.name}
              description={r.description}
              poster={`${config.env.LA1TV_API_ENDPOINT}/v1/s3/${r.thumbnailS3Bucket}/${r.thumbnailS3Object}`}
              link={`/watch/${r.id}`}
            ></VideoLink>
          </span>)}
        </Row>
      )}
    </>)
}

export default RecommendationsRow
