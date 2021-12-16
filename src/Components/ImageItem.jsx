const ImageItem = ({imageDetails, checkImage, setIsRandomImage}) => {
  const {thumbnailUrl, id} = imageDetails

  return (
    <li
      className="thumbnail-container"
      onClick={() => {
        checkImage(id)
        setIsRandomImage(true)
      }}
    >
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
    </li>
  )
}

export default ImageItem
