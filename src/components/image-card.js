
export default function ImageCard (props) {
  const { image, text, clickImage } = props
  return (
    <div className='image-card' onClick={clickImage}>
      <img src={image} alt={text} />
      <h3>{text}</h3>
    </div>
  )
}