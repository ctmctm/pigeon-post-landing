"use client";

import { useEffect, useRef } from "react";

export default function LandingPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", resize);
    resize();

    const numPoints = 5;
    const historySize = 35;
    let history = [];
    let hue = 0;

    let points = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
      });
    }

    let animationFrameId;

    function animate() {
      ctx.fillStyle = "#020202";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < numPoints; i++) {
        let p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;
      }

      let currentShape = points.map((p) => ({ x: p.x, y: p.y }));
      history.push(currentShape);
      if (history.length > historySize) {
        history.shift();
      }

      hue += 0.8;

      for (let i = 0; i < history.length; i++) {
        let shape = history[i];
        ctx.beginPath();
        ctx.moveTo(shape[0].x, shape[0].y);
        for (let j = 1; j < shape.length; j++) {
          ctx.lineTo(shape[j].x, shape[j].y);
        }
        ctx.closePath();

        let alpha = (i + 1) / history.length;
        ctx.strokeStyle = `hsla(${hue + i * 2}, 100%, 60%, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020202] font-mono selection:bg-white/20">
      <canvas
        ref={canvasRef}
        className="block absolute top-0 left-0 z-10"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none select-none">
        <div className="text-[5rem] sm:text-[4rem] md:text-[6rem] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          ðŸ ž
        </div>
      </div>
    </div>
  );
}
