"use client"

import { useEffect, useRef, useState } from "react"
import { Application } from "@splinetool/runtime"

const SCENE_URL = "https://prod.spline.design/Bzmt-xH2FWNPb7el/scene.splinecode"

export function SplineHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    let isMounted = true
    let app: Application | null = null

    try {
      app = new Application(canvasRef.current, {
        renderMode: "auto",
      })

      app
        .load(SCENE_URL)
        .then(() => {
          if (isMounted) {
            setIsLoaded(true)
          }
        })
        .catch((err) => {
          console.warn("Spline load failed:", err)
          if (isMounted) {
            setHasError(true)
          }
        })
    } catch (err) {
      console.warn("Spline initialization error:", err)
      queueMicrotask(() => {
        if (isMounted) {
          setHasError(true)
        }
      })
    }

    return () => {
      isMounted = false
      if (app) {
        try {
          app.dispose()
        } catch {}
      }
    }
  }, [])

  if (hasError) {
    return (
      <div className="flex size-full items-center justify-center p-6">
        <img
          src="/flogo.png"
          alt="Fuad Tesfaye"
          className="max-h-20 w-auto brightness-0 transition-opacity hover:opacity-80 dark:invert"
        />
      </div>
    )
  }

  return (
    <div className="relative size-full min-h-[260px] overflow-hidden sm:min-h-[290px]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-6 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="size-full cursor-grab transition-opacity duration-700 active:cursor-grabbing"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  )
}

export default SplineHero
