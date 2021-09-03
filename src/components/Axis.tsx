import { useMemo } from 'react'
import { ScaleLinear } from 'd3'
import { max, floor } from 'lodash'

const Axis = ({
  scale,
  transform,
  position,
}: {
  scale: ScaleLinear<number, number>
  transform: string
  position: 'top' | 'bottom' | 'left' | 'right'
}) => {
  const range = scale.range()
  console.log(range)

  const ticks = useMemo(() => {
    const width = range[1] - range[0]
    const pixelsPerTick = 30
    const numberOfTicksTarget = max([1, floor(width / pixelsPerTick)])

    return scale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: scale(value),
    }))
  }, [scale])

  const sign = {
    top: 1,
    bottom: -1,
    left: -1,
    right: 1,
  }[position]

  const rotation = {
    top: 0,
    bottom: 0,
    left: 90,
    right: 90,
  }[position]

  const textTransform = {
    top: 'translateY(15px)',
    bottom: 'translateY(-9px)',
    left: 'translateY(-9px)',
    right: 'translateY(15px)',
  }[position]

  return (
    <g transform={transform + `rotate(${rotation})`}>
      <path
        d={[
          'M',
          range[0],
          sign * 6,
          'v',
          -1 * sign * 6,
          'H',
          range[1],
          'v',
          sign * 6,
        ].join(' ')}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2={sign * 6} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: textTransform,
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </g>
  )
}

export default Axis
