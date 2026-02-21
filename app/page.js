"use client";

import { useEffect, useRef } from "react";

export default function LandingPage() {
  const canvasRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const wordmarkEl = wordmarkRef.current;

    let W, H;
    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

    const INK = "#1C1917";
    const SIENNA = "#C8956A";

    // ── Envelope
    function drawEnvelope(x, y, size, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      const w = size,
        h = size * 0.72;

      ctx.fillStyle = "rgba(28,25,23,0.06)";
      ctx.beginPath();
      // Use standard roundRect or fallback
      if (ctx.roundRect) {
        ctx.roundRect(-w / 2 + 2, -h / 2 + 3, w, h, 3);
      } else {
        ctx.rect(-w / 2 + 2, -h / 2 + 3, w, h);
      }
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-w / 2, -h / 2, w, h, 3);
      } else {
        ctx.rect(-w / 2, -h / 2, w, h);
      }
      ctx.fill();

      ctx.fillStyle = "#EDE9E0";
      ctx.beginPath();
      ctx.moveTo(-w / 2, -h / 2);
      ctx.lineTo(0, h * 0.1);
      ctx.lineTo(w / 2, -h / 2);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "rgba(28,25,23,0.08)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-w / 2, -h / 2);
      ctx.lineTo(0, h * 0.1);
      ctx.lineTo(w / 2, -h / 2);
      ctx.stroke();

      // wax seal
      ctx.fillStyle = SIENNA;
      ctx.beginPath();
      ctx.arc(0, h * 0.12, size * 0.09, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // ── Pigeon
    function drawPigeon(x, y, scale, flapT, alpha, facing) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.scale(facing * scale, scale);

      const wingY = Math.sin(flapT) * 8;

      // tail
      ctx.fillStyle = "#3D3835";
      ctx.beginPath();
      ctx.moveTo(14, 3);
      ctx.bezierCurveTo(22, 0, 26, 4, 24, 8);
      ctx.bezierCurveTo(20, 9, 16, 7, 14, 3);
      ctx.fill();

      // lower wing
      ctx.fillStyle = "#4A4540";
      ctx.beginPath();
      ctx.moveTo(0, 4);
      ctx.bezierCurveTo(-8, 4 + wingY * 0.3, -14, 8 + wingY * 0.5, -10, 12);
      ctx.bezierCurveTo(-5, 13, 4, 10, 8, 6);
      ctx.closePath();
      ctx.fill();

      // body
      ctx.fillStyle = "#2C2825";
      ctx.beginPath();
      ctx.ellipse(4, 5, 12, 8, -0.15, 0, Math.PI * 2);
      ctx.fill();

      // breast
      ctx.fillStyle = "#6B6560";
      ctx.beginPath();
      ctx.ellipse(1, 6, 6, 5, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // iridescent neck sheen
      ctx.fillStyle = "rgba(120,180,120,0.14)";
      ctx.beginPath();
      ctx.ellipse(-6, -1, 4, 3, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(160,120,200,0.10)";
      ctx.beginPath();
      ctx.ellipse(-7, -2, 3, 2.5, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // upper wing
      ctx.fillStyle = "#3D3835";
      ctx.beginPath();
      ctx.moveTo(2, 2);
      ctx.bezierCurveTo(-6, -2 - wingY, -16, -1 - wingY, -12, 6);
      ctx.bezierCurveTo(-7, 8, 0, 6, 2, 2);
      ctx.fill();

      // wing feather lines
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const f = (i + 1) / 4;
        ctx.beginPath();
        ctx.moveTo(2 - f * 14, 2 - f * 2 - wingY * f * 0.8);
        ctx.lineTo(-8 + f * 2, 7 - f);
        ctx.stroke();
      }

      // neck
      ctx.fillStyle = "#4A4540";
      ctx.beginPath();
      ctx.ellipse(-7, -2, 5, 4, -0.3, 0, Math.PI * 2);
      ctx.fill();

      // head
      ctx.fillStyle = "#1C1917";
      ctx.beginPath();
      ctx.arc(-10, -6, 6, 0, Math.PI * 2);
      ctx.fill();

      // eye white
      ctx.fillStyle = "#F5F2EC";
      ctx.beginPath();
      ctx.arc(-12, -7, 2.2, 0, Math.PI * 2);
      ctx.fill();
      // iris orange-red
      ctx.fillStyle = "#E05520";
      ctx.beginPath();
      ctx.arc(-12, -7, 1.5, 0, Math.PI * 2);
      ctx.fill();
      // pupil
      ctx.fillStyle = "#0a0806";
      ctx.beginPath();
      ctx.arc(-12.2, -7.1, 0.8, 0, Math.PI * 2);
      ctx.fill();
      // gleam
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.beginPath();
      ctx.arc(-12.6, -7.5, 0.4, 0, Math.PI * 2);
      ctx.fill();

      // beak
      ctx.fillStyle = "#B8A898";
      ctx.beginPath();
      ctx.moveTo(-16, -7);
      ctx.lineTo(-21, -5.8);
      ctx.lineTo(-16, -4.5);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#D4C8B8";
      ctx.beginPath();
      ctx.ellipse(-15.5, -6.8, 1.5, 1, 0, 0, Math.PI * 2);
      ctx.fill();

      // feet
      ctx.strokeStyle = SIENNA;
      ctx.lineWidth = 1.3;
      ctx.lineCap = "round";
      [
        [2, 12, [[-2, 5], [1, 5], [3, 4]]],
        [8, 12, [[-2, 5], [1, 5], [3, 4]]],
      ].forEach(([fx, fy, toes]) => {
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fx, fy + 4);
        ctx.stroke();
        toes.forEach(([tx, ty]) => {
          ctx.beginPath();
          ctx.moveTo(fx, fy + 4);
          ctx.lineTo(fx + tx, fy + ty);
          ctx.stroke();
        });
      });

      ctx.restore();
    }

    // ── Drifting particles
    const particles = Array.from({ length: 22 }, () => resetParticle({}));
    function resetParticle(p) {
      p.x = Math.random() * (W || 1200);
      p.y = Math.random() * (H || 800);
      p.vx = (Math.random() - 0.5) * 0.25;
      p.vy = -Math.random() * 0.18 - 0.04;
      p.sz = Math.random() * 2.5 + 0.8;
      p.a = Math.random() * 0.1 + 0.03;
      p.rot = Math.random() * Math.PI;
      p.rv = (Math.random() - 0.5) * 0.008;
      return p;
    }

    function tickParticles() {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rv;
        if (p.y < -10) {
          resetParticle(p);
          p.y = H + 5;
        }
        if (p.x < -10 || p.x > W + 10) resetParticle(p);
      });
    }

    function drawParticles() {
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.a;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = INK;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.sz * 0.35, p.sz * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    // ── Clouds
    function makeCloud(xFrac) {
      const scale = 0.5 + Math.random() * 1.1;
      return {
        x: xFrac * (W || 1200),
        y: (H || 800) * (0.06 + Math.random() * 0.32),
        scale,
        speed: (0.04 + Math.random() * 0.07) * (0.6 + scale * 0.4),
        alpha: 0.18 + scale * 0.1,
        puffs: (() => {
          const n = 5 + Math.floor(Math.random() * 5);
          const pts = [];
          let cursor = 0;
          for (let i = 0; i < n; i++) {
            const rx = (30 + Math.random() * 50) * scale;
            const ry = (18 + Math.random() * 28) * scale;
            cursor += rx * (0.5 + Math.random() * 0.6);
            pts.push({
              dx: cursor,
              dy: (Math.random() - 0.5) * ry * 0.8,
              rx,
              ry,
            });
          }
          const mid = cursor / 2;
          pts.forEach((p) => (p.dx -= mid));
          return pts;
        })(),
      };
    }

    let clouds = Array.from({ length: 6 }, (_, i) =>
      makeCloud(i / 6 + Math.random() * 0.15)
    );

    function drawCloud(c) {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.globalAlpha = c.alpha * 0.25;
      ctx.fillStyle = "#7A9EB8";
      c.puffs.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(
          p.dx + 3,
          p.dy + p.ry * 0.5,
          p.rx * 0.88,
          p.ry * 0.5,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
      ctx.globalAlpha = c.alpha;
      ctx.fillStyle = "#F0F6FC";
      c.puffs.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(p.dx, p.dy, p.rx, p.ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = c.alpha * 0.55;
      ctx.fillStyle = "#FFFFFF";
      c.puffs.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(
          p.dx - p.rx * 0.18,
          p.dy - p.ry * 0.22,
          p.rx * 0.62,
          p.ry * 0.55,
          -0.2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
      ctx.globalAlpha = c.alpha * 0.15;
      ctx.fillStyle = "#A8C8E0";
      c.puffs.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(p.dx, p.dy + p.ry * 0.28, p.rx * 0.9, p.ry * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // ── Flight path
    const LOOP = 380;
    let t = 0;
    let letterDropped = false;
    let letter = null;
    let wordmarkShown = false;

    function pigeonPos(t) {
      const p = (t % LOOP) / LOOP;
      const x = W + 120 - (W + 240) * p;
      const hill = Math.sin(p * Math.PI) * H * 0.1;
      const wave = Math.sin(p * Math.PI * 2.5) * 14;
      const y = H * 0.36 - hill + wave;
      return { x, y };
    }

    function spawnLetter(x, y) {
      wordmarkShown = false;
      letter = {
        x,
        y: y + 16,
        vx: 0,
        vy: -0.8,
        rot: 0.2 + Math.random() * 0.3,
        rv: -(0.025 + Math.random() * 0.02),
        alpha: 0,
        sc: 0,
        landed: false,
        landX: W / 2,
        landY: H - 30,
        landRot: (Math.random() - 0.5) * 0.18,
      };
    }

    function tickLetter() {
      if (!letter || letter.landed) return;
      letter.alpha = Math.min(1, letter.alpha + 0.07);
      letter.sc = Math.min(1, letter.sc + 0.06);
      letter.vy += 0.15;
      letter.x += (letter.landX - letter.x) * 0.04;
      letter.y += letter.vy;
      letter.rv *= 0.97;
      letter.rot += letter.rv;
      if (letter.y >= letter.landY) {
        letter.y = letter.landY;
        letter.x = letter.landX;
        letter.vy = 0;
        letter.rot += (letter.landRot - letter.rot) * 0.12;
        if (Math.abs(letter.rot - letter.landRot) < 0.01) {
          letter.rot = letter.landRot;
          letter.landed = true;
          if (!wordmarkShown && wordmarkEl) {
            wordmarkShown = true;
            wordmarkEl.style.opacity = "0.7";
          }
        }
      }
    }

    const TRAIL = 28;
    const trail = [];
    let animationFrameId;

    function frame() {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#6BAED6");
      g.addColorStop(0.5, "#9ECAE8");
      g.addColorStop(1, "#D4EAF7");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      clouds.forEach((c) => {
        c.x += c.speed;
        if (c.x > W + 400) {
          const fresh = makeCloud(-0.1);
          Object.assign(c, fresh);
          c.x = -400;
        }
        drawCloud(c);
      });

      tickParticles();
      drawParticles();

      const { x, y } = pigeonPos(t);
      const flapT = t * 0.2;

      trail.push({ x, y });
      if (trail.length > TRAIL) trail.shift();
      trail.forEach((p, i) => {
        const frac = i / TRAIL;
        ctx.save();
        ctx.globalAlpha = frac * 0.12;
        ctx.fillStyle = SIENNA;
        ctx.beginPath();
        ctx.arc(p.x, p.y, frac * 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      const progress = (t % LOOP) / LOOP;
      if (!letterDropped && progress > 0.42) {
        spawnLetter(x, y);
        letterDropped = true;
      }

      tickLetter();
      if (letter) {
        ctx.save();
        ctx.translate(letter.x, letter.y);
        ctx.rotate(letter.rot);
        ctx.scale(letter.sc, letter.sc);
        drawEnvelope(0, 0, 28, letter.alpha);
        ctx.restore();
      }

      const alpha = Math.min(1, Math.min(t % LOOP, LOOP - (t % LOOP)) / 20);
      drawPigeon(x, y, 1.45, flapT, alpha, 1);

      t++;
      if (t % LOOP === 0) {
        letterDropped = false;
        trail.length = 0;
      }
      animationFrameId = requestAnimationFrame(frame);
    }

    const handleResize = () => {
      resize();
      clouds.forEach((c, i) => {
        const f = makeCloud(i / clouds.length);
        Object.assign(c, f);
      });
      if (letter) {
        letter.landX = W / 2;
        letter.landY = H - 30;
      }
    };
    window.addEventListener("resize", handleResize);

    frame();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#FAF8F4] select-none">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
      <div
        ref={wordmarkRef}
        className="wordmark fixed bottom-[48px] left-1/2 -translate-x-1/2 font-serif italic text-[15px] text-[#2C4A6E] opacity-0 tracking-[0.04em] whitespace-nowrap transition-opacity duration-[1400ms] pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        pigeon post
      </div>
    </div>
  );
}
