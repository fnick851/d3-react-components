// TODO: fix the types below

import { geoPath, geoGraticule10 } from 'd3'
import {
  geoAlbers as projectionFunction,
  GeoGeometryObjects,
  GeoPermissibleObjects,
} from 'd3-geo'

import countryShapes from '../countries.json'

const Map = () => {
  const width = 1280

  const sphere = { type: 'Sphere' } as GeoGeometryObjects

  const projection = projectionFunction().fitWidth(width, sphere)
  const pathGenerator = geoPath(projection)

  const [[x0, y0], [x1, y1]] = pathGenerator.bounds(sphere)
  const height = y1

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <clipPath id="Map__sphere">
          <path d={pathGenerator(sphere) as string | undefined} />
        </clipPath>
      </defs>

      <path
        d={pathGenerator(sphere) as string | undefined}
        fill="rgb(151,33,77)"
      />

      <g style={{ clipPath: 'url(#Map__sphere)' }}>
        <path
          d={pathGenerator(geoGraticule10()) as string | undefined}
          fill="none"
          stroke="#fff"
        />

        {countryShapes.features.map((shape) => {
          return (
            <path
              key={shape.properties.subunit}
              d={pathGenerator(shape as GeoPermissibleObjects) as string}
              fill="rgb(55,8,3)"
              stroke="#fff"
            >
              <title>{shape.properties.name}</title>
            </path>
          )
        })}
      </g>
    </svg>
  )
}

export default Map
