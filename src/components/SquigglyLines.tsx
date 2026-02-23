"use client";

import { useEffect, useRef } from "react";

interface Line {
  points: { x: number; y: number }[];
  speed: number;
  amplitude: number;
  frequency: number;
  phase: number;
  opacity: number;
  width: number;
  color: string;
  drift: { x: number; y: number };
}

export default function SquigglyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate lines
    const colors = [
      "rgba(176, 239, 255, 0.12)",
      "rgba(34, 128, 205, 0.10)",
      "rgba(65, 5, 182, 0.08)",
      "rgba(99, 5, 182, 0.07)",
      "rgba(176, 239, 255, 0.06)",
      "rgba(34, 128, 205, 0.08)",
    ];

    const lines: Line[] = [];
    for (let i = 0; i < 8; i++) {
      const numPoints = 6 + Math.floor(Math.random() * 4);
      const points: { x: number; y: number }[] = [];

      // Create a path that meanders across the screen
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;

      for (let j = 0; j < numPoints; j++) {
        const spread = 150 + Math.random() * 300;
        points.push({
          x: startX + Math.cos(angle + (j * 0.5 - numPoints * 0.25)) * spread + (Math.random() - 0.5) * 200,
          y: startY + Math.sin(angle + (j * 0.3 - numPoints * 0.15)) * spread + (Math.random() - 0.5) * 200,
        });
      }

      lines.push({
        points,
        speed: 0.6 + Math.random() * 1.0,
        amplitude: 20 + Math.random() * 40,
        frequency: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.4 + Math.random() * 0.6,
        width: 1 + Math.random() * 2,
        color: colors[i % colors.length],
        drift: {
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.4,
        },
      });
    }
    linesRef.current = lines;

    let time = 0;

    const drawCurve = (line: Line, t: number) => {
      if (!ctx) return;
      const pts = line.points.map((p, idx) => ({
        x: p.x + Math.sin(t * line.speed + idx * line.frequency + line.phase) * line.amplitude,
        y: p.y + Math.cos(t * line.speed * 0.7 + idx * line.frequency * 0.8 + line.phase) * line.amplitude * 0.8,
      }));

      ctx.beginPath();
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (pts.length < 2) return;

      ctx.moveTo(pts[0].x, pts[0].y);

      // Draw smooth curve through points using cubic bezier
      for (let i = 0; i < pts.length - 1; i++) {
        const curr = pts[i];
        const next = pts[i + 1];
        const cpx = (curr.x + next.x) / 2;
        const cpy = (curr.y + next.y) / 2;

        if (i === 0) {
          ctx.quadraticCurveTo(curr.x, curr.y, cpx, cpy);
        } else {
          ctx.quadraticCurveTo(curr.x, curr.y, cpx, cpy);
        }
      }

      // Connect to last point
      const last = pts[pts.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.012;

      // Slowly drift each line's base points
      for (const line of linesRef.current) {
        for (const p of line.points) {
          p.x += line.drift.x;
          p.y += line.drift.y;
        }

        // Gently wrap around or reverse drift if going too far off screen
        const avgX = line.points.reduce((s, p) => s + p.x, 0) / line.points.length;
        const avgY = line.points.reduce((s, p) => s + p.y, 0) / line.points.length;
        if (avgX < -200 || avgX > canvas.width + 200) line.drift.x *= -1;
        if (avgY < -200 || avgY > canvas.height + 200) line.drift.y *= -1;

        // Randomly nudge drift occasionally
        if (Math.random() < 0.002) {
          line.drift.x += (Math.random() - 0.5) * 0.3;
          line.drift.y += (Math.random() - 0.5) * 0.3;
          // Clamp drift speed
          line.drift.x = Math.max(-1.2, Math.min(1.2, line.drift.x));
          line.drift.y = Math.max(-1.2, Math.min(1.2, line.drift.y));
        }
      }

      for (const line of linesRef.current) {
        drawCurve(line, time);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      style={{ opacity: 0.7 }}
    />
  );
}
