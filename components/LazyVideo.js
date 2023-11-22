import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * 视频懒加载
 * @param {*} param0
 * @returns
 */
export default function LazyVideo({
  priority,
  id,
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  className,
  width,
  height,
  style
}) {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyVideo = entry.target
            lazyVideo.src = src
            observer.unobserve(lazyVideo)
          }
        })
      },
      { rootMargin: '50px 0px' }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [src])

  const videoProps = {
    ref: videoRef,
    src: videoLoaded ? src : null,
    autoPlay: autoPlay,
    poster: poster,
    loop: loop,
    muted: muted,
    onLoadedData: handleVideoLoad
  }

  if (id) {
    videoProps.id = id
  }

  if (width) {
    videoProps.width = width
  }

  if (height) {
    videoProps.height = height
  }

  if (className) {
    videoProps.className = className
  }

  if (style) {
    videoProps.style = style
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video {...videoProps}>
            {/* Add source elements for different video formats */}
            <source src={src} type="video/mp4" />
            <source src={`${src.replace('.mp4', '.ogv')}`} type="video/ogg" />
            <source src={`${src.replace('.mp4', '.webm')}`} type="video/webm" />
            Your browser does not support the video tag.
        </video>
      {priority && (
        <Head>
          <link rel='preload' as='video' src={src} />
        </Head>
      )}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(178, 191, 204, 0.6)' }}></div>
      <div style={{ position: 'absolute', zIndex: 2, right: 0, bottom: 0, left: 0, minWidth: '100%', display: 'block' }}>
        <Image src="/ocean/overlay-hero.png" alt="Decorative image frame" width={1920} height={1080} style={{ width: '100%' }} />
      </div>
    </div>
  )
}
