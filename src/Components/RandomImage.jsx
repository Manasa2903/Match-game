const RandomImage = ({imagesList}) => {
  const randomIndex = Math.ceil(Math.random() * (imagesList.length - 1))
  return (
    <div className="matchImage-container">
      <img
        src={imagesList[randomIndex].imageUrl}
        alt="match"
        className="match-image"
      />
      <h1>hello</h1>
    </div>
  )
}

export default RandomImage
