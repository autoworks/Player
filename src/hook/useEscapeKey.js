import { useEffect } from 'react'

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        callback(e)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback])
}

export default useEscapeKey
