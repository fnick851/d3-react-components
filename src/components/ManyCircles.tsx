import { useState } from 'react'
import generateDataset from '../helpers/generate-dataset'
import useInterval from '../hooks/use-interval'

const ManyCircles = () => {
  const [dataset, setDataset] = useState(generateDataset())

  useInterval(() => {
    setDataset(generateDataset())
  }, 1000)

  return (
    <svg viewBox="0 0 100 50">
      {dataset.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" />
      ))}
    </svg>
  )
}

export default ManyCircles
