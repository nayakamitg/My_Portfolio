"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react';

function MyLenis() {
  const lenis = useLenis((lenis) => {
    console.log("Hello")
    console.log(lenis)
  })
 const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])
  return (
    <>
      <ReactLenis root />
      { /* content */ }
    </>
  )
}

export default MyLenis