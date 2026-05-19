'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setVisible(false), 1000)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <div
      className={`preloader transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="spinner">
        <span className="spinner-rotate" />
      </div>
    </div>
  )
}
