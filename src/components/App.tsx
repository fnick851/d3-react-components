import { useCss } from 'kremling'
import AnimatedCircles from './AnimatedCircles'
import AxesView from './AxesView'
import ManyCircles from './ManyCircles'

function App() {
  useCss(globalCss)

  return (
    <>
      <ManyCircles />
      <AnimatedCircles />
      <AxesView />
    </>
  )
}

const globalCss = /*css*/ `
svg {
  border: 1px solid black;
}
`

export default App
