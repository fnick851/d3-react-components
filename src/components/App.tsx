import { useCss } from 'kremling'
import AnimatedCircles from './AnimatedCircles'
import ManyCircles from './ManyCircles'

function App() {
  useCss(css)

  return (
    <>
      <ManyCircles />
      <AnimatedCircles />
    </>
  )
}

const css = /*css*/ `
svg {
  border: 1px solid black;
}
`

export default App
