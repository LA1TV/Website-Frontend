import React from 'react'
import VideoLink from '../VideoLink'
import Row from 'layouts/Row'
import fetch from 'isomorphic-unfetch'
import config from '../../config'
import styled from 'styled-components'

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
  // const [page, setPage] = React.useState(1)

  const loadRecommendations = function (page) {
    fetch(`${config.env.FRONTEND_DOMAIN}/api/recommendations/${type}?page=${page}&count=${rows * columns}`).then((response) => {
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

  return recommendations.length === 0 ? null : (
    <StyledDiv>
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
    </StyledDiv>)
}

export default RecommendationsRow
