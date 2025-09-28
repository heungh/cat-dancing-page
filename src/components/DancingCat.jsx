import { useEffect, useState } from 'react'
import granyangGif from '../assets/images/granyang.gif'
import '../styles/animations.css'

const DancingCat = ({ isAnimating, animationSpeed = 1, animationType = 'catDance' }) => {
  const [currentMove, setCurrentMove] = useState(0)

  const danceClass = isAnimating ? `dancing-cat active ${animationType}` : 'dancing-cat'

  const animationStyle = {
    '--animation-duration': `${2 / animationSpeed}s`
  }

  return (
    <div className="cat-container">
      <div className={danceClass} style={animationStyle}>
        <img
          src={granyangGif}
          alt="Dancing Granyang"
          className="cat-image"
        />
      </div>
      <div className="dance-stage">
        <div className="stage-light"></div>
        <div className="stage-light stage-light-2"></div>
        <div className="stage-light stage-light-3"></div>
      </div>
    </div>
  )
}

export default DancingCat