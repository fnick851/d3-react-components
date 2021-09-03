import Axis from './Axis'
import { scaleLinear } from 'd3'

const AxesView = () => {
  const xDomain = [0, 100]
  const xRange = [0, 480]
  const xScale = scaleLinear().domain(xDomain).range(xRange)

  const yDomain = [0, 100]
  const yRange = [0, 140]
  const yScale = scaleLinear().domain(yDomain).range(yRange)

  const width = 500
  const height = 200

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <Axis scale={xScale} transform="translate(9, 0)" position="top" />
      <Axis
        scale={xScale}
        transform={`translate(9, ${height})`}
        position="bottom"
      />
      <Axis scale={yScale} transform="translate(0, 30)" position="left" />
      <Axis
        scale={yScale}
        transform={`translate(${width}, 30)`}
        position="right"
      />
    </svg>
  )
}

export default AxesView
