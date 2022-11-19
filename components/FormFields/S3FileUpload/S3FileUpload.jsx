import React from 'react'
import FileUpload from 'components/FormFields/FileUpload'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import AuthContext from 'components/AuthenticatedArea/context'
import fetch from 'isomorphic-unfetch'
import { fileState } from 'utilities/hooks'

async function getPUT (apikey, bucket, filename) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/api/s3?bucket=${bucket}&file=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { 'x-api-key': apikey }
  })
  return await res.json()
}

const S3FileUpload = ({ label, s3bucket, onChange }) => {
  // const [isFilePicked, setIsFilePicked] = useState(false)
  const { apikey } = React.useContext(AuthContext)

  const [status, setStatus] = React.useState('Select a file to upload')
  const file = fileState()

  const beginUpload = () => {
    setStatus('Getting authorisation to upload...')
    getPUT(apikey, s3bucket, file.value.name).then((res) => {
      onChange({ target: { value: '' } })
      console.log(res)
      const url = res.PUTurl

      setStatus('Uploading...')
      // eslint-disable-next-line no-undef
      const formData = new FormData()
      formData.append('File', file.value)

      // eslint-disable-next-line no-undef
      const xhr = new XMLHttpRequest()
      xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
          const percent = e.loaded / e.total
          const formattedPercent = percent.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            minimumSignificantDigits: 3,
            maximumSignificantDigits: 3 + 2,
            style: 'percent'
          })
          setStatus('Uploading... ' + formattedPercent)
        }
      })
      xhr.upload.addEventListener('load', function () {
        setStatus('Your file is stored on M3!')
        onChange({ target: { value: file.value.name } })
      })

      xhr.open('PUT', url)
      xhr.overrideMimeType(file.value.type)
      xhr.send(file.value)
    })
  }

  React.useEffect(() => {
    if (file.value !== undefined) {
      beginUpload()
    }
  }, [file.value])

  return (
    <div>
      <FileUpload label={label} {...file} />&nbsp;
      <Button text="Upload" onClick={beginUpload}/>
      <Paragraph>{status}</Paragraph>
    </div>
  )
}

export default S3FileUpload
