import React from 'react'
import FileUpload from 'components/FormFields/FileUpload'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import AuthContext from 'components/AuthenticatedArea/context'
import fetch from 'isomorphic-unfetch'
import config from '../.././../config.json'
import { fileState } from 'utilities/hooks'

async function getPUT (apikey, bucket, file) {
  const res = await fetch(`${config.env.FRONTEND_DOMAIN}/api/s3?bucket=${bucket}&file=${encodeURIComponent(file.name)}`, {
    method: 'POST',
    headers: { 'x-api-key': apikey }
  })
  return await res.json()
}

const S3FileUpload = ({ label, s3bucket }) => {
  const file = fileState()
  // const [isFilePicked, setIsFilePicked] = useState(false)
  const { apikey } = React.useContext(AuthContext)
  const [status, setStatus] = React.useState('Select a file to upload')

  const changeHandler = (event) => {
    // setIsSelected(true);
    beginUpload()
  }

  const beginUpload = () => {
    setStatus('Getting authorisation to upload...')
    getPUT(apikey, s3bucket, file.value).then((res) => {
      console.log(res)
      const url = res.PUTurl

      setStatus('Uploading...')
      const formData = new FormData()
      formData.append('File', file.value)

      const xhr = new XMLHttpRequest()
      xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
          const percent = e.loaded / e.total
          const formattedPercent = percent.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            minimumSignificantDigits: 3,
            maximumSignificantDigits: 3+2,
            style: 'percent'
          })
          setStatus('Uploading... ' + formattedPercent)
        }
      })
      xhr.upload.addEventListener('load', function () {
        setStatus('Your file is stored on M3!')
      })

      xhr.open('PUT', url)
      xhr.overrideMimeType(file.value.type)
      xhr.send(file.value)
    })
  }

  return (
    <span>
      <FileUpload label={label} {...file} /><Button text="Upload" onClick={changeHandler}/>
      <Paragraph>{status}</Paragraph>
    </span>
  )
}

export default S3FileUpload
