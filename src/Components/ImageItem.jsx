const ImageItem = ({imageDetails}) => {
  const {thumbnailUrl} = imageDetails

  return (
    <li className="thumbnail-container">
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
    </li>
  )
}

export default ImageItem
