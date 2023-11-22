import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const NavIndexArea = () => {
  const [imageWidth, setImageWidth] = useState(40)
  const [imageHeight, setImageHeight] = useState(40)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setImageWidth(80)
        setImageHeight(80)
      } else {
        setImageWidth(40)
        setImageHeight(40)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navIndexAreaStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -65%)'
  }

  return (
    <div style={navIndexAreaStyle} className="z-20 text-center text-white">
      <h1><a className='font-bold text-2xl md:text-4xl' href="#">Paradise Island</a></h1>
      <p className='m-6 text-xs md:text-xl' >simple &amp; happy &amp; cool</p>
      <div className='flex items-center justify-center'>
        <Image
          src="/ocean/shark-inverted.svg"
          alt="Paradise Island"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  )
}

export default NavIndexArea