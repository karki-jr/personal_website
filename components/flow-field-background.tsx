"use client"

import { useEffect, useRef } from "react"

export function FlowFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const createParticle = (x: number, y: number) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    const animate = () => {
      ctx.fillStyle = "rgba(11, 19, 43, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.life++
        particle.x += particle.vx
        particle.y += particle.vy

        // Add some flow field effect
        const angle = Math.sin(particle.x * 0.01) * Math.cos(particle.y * 0.01)
        particle.vx += Math.cos(angle) * 0.01
        particle.vy += Math.sin(angle) * 0.01

        // Fade effect
        const alpha = 1 - particle.life / particle.maxLife
        ctx.strokeStyle = `rgba(91, 192, 190, ${alpha * 0.3})`
        ctx.lineWidth = 1

        // Draw particle trail
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle.x - particle.vx * 10, particle.y - particle.vy * 10)
        ctx.stroke()

        // Reset particle if it's dead or out of bounds
        if (
          particle.life >= particle.maxLife ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles[index] = createParticle(Math.random() * canvas.width, Math.random() * canvas.height)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ background: "transparent" }}
    />
  )
}
