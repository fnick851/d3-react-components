import { useState, useRef, useEffect } from 'react'
import useInterval from '../hooks/use-interval'
import { useSpring, animated } from 'react-spring'
import generateCircles from '../helpers/generate-circles'

const allCircles = [0, 1, 2, 3, 4, 5]

const AnimatedCircles = () => {
  const [visibleCircles, setVisibleCircles] = useState(
    generateCircles(allCircles)
  )

  useInterval(() => {
    setVisibleCircles(generateCircles(allCircles))
  }, 2000)

  return (
    <svg viewBox="0 0 100 20">
      {allCircles.map((d) => (
        <AnimatedCircle
          key={d}
          index={d}
          isShowing={visibleCircles.includes(d)}
        />
      ))}
    </svg>
  )
}

const AnimatedCircle = ({
  index,
  isShowing,
}: {
  index: number
  isShowing: boolean
}) => {
  const wasShowing = useRef(false)

  useEffect(() => {
    wasShowing.current = isShowing
  }, [isShowing])

  const style = useSpring({
    config: {
      duration: 1000,
    },
    r: isShowing ? 6 : 0,
    opacity: isShowing ? 1 : 0,
  })

  const circleFill = () => {
    if (isShowing && !wasShowing.current) return 'cornflowerblue'
    if (isShowing && wasShowing.current) return 'lightgrey'
    if (!isShowing && wasShowing.current) return 'tomato'
  }

  return (
    <animated.circle
      {...style}
      cx={index * 15 + 12}
      cy="10"
      fill={circleFill()}
    />
  )
}

export default AnimatedCircles
