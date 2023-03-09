import './index.css'

const ImageItem = props => {
  const {imageDetails, imageSelected} = props
  const {thumbnailUrl, id} = imageDetails

  const imageClicked = () => {
    imageSelected(id)
  }

  return (
    <li>
      <button type="button" className="image-btn" onClick={imageClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default ImageItem
