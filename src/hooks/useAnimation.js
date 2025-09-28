import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [animationType, setAnimationType] = useState('catDance')

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const resetAnimation = useCallback(() => {
    setIsAnimating(false)
    setAnimationSpeed(1)
    setAnimationType('catDance')
  }, [])

  const changeAnimationSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  const changeAnimationType = useCallback((type) => {
    setAnimationType(type)
    if (!isAnimating) {
      setIsAnimating(true)
    }
  }, [isAnimating])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault()
        toggleAnimation()
      }
      if (event.key === 'r' || event.key === 'R') {
        resetAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation, resetAnimation])

  return {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    resetAnimation,
    changeAnimationSpeed,
    changeAnimationType
  }
}