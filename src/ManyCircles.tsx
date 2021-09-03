import { useCss } from 'kremling'
import { useState } from 'react'
import generateDataset from './helpers/generateDataset'
import useInterval from './hooks/useInterval'

const ManyCircles = () => {
  const [dataset, setDataset] = useState(generateDataset())
  const cssScope = useCss(css)

  useInterval(() => {
    setDataset(generateDataset())
  }, 1000)

  return (
    <svg {...cssScope} viewBox="0 0 100 50">
      {dataset.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" />
      ))}
    </svg>
  )
}

const css = /*css*/ `
& svg {
  border: 1px solid black;
}
`

export default ManyCircles
