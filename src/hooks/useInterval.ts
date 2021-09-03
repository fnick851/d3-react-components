import { useEffect } from 'react'

const useInterval = (callback: Function, interval: number) => {
  useEffect(() => {
    const id = setInterval(callback, interval)
    return () => clearInterval(id)
  })
}

export default useInterval
