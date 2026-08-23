import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Sparkles } from "lucide-react";

type ScratchRevealProps = {
  onReveal?: () => void;
};

export default function ScratchReveal({ onReveal }: ScratchRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const drawingRef = useRef(false);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const setup = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, "#c99d2d");
      gradient.addColorStop(0.45, "#f0d980");
      gradient.addColorStop(1, "#a77b1d");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.globalAlpha = 0.18;
      ctx.fillStyle = "#fff6cf";
      for (let x = -rect.height; x < rect.width; x += 28) {
        ctx.save();
        ctx.translate(x, 0);
        ctx.rotate(-Math.PI / 4);
        ctx.fillRect(0, 0, 10, rect.height * 2);
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = "rgba(48, 10, 20, .24)";
      ctx.font = "700 11px Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("SCRATCH HERE", rect.width / 2, rect.height / 2 - 4);
      ctx.font = "10px Arial, sans-serif";
      ctx.fillText("Reveal the celebration details", rect.width / 2, rect.height / 2 + 18);
    };

    setup();
    const observer = new ResizeObserver(setup);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sampleW = 80;
    const sampleH = 50;
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    let sampled = 0;
    for (let y = 0; y < canvas.height; y += Math.max(1, Math.floor(canvas.height / sampleH))) {
      for (let x = 0; x < canvas.width; x += Math.max(1, Math.floor(canvas.width / sampleW))) {
        const alpha = image.data[(y * canvas.width + x) * 4 + 3];
        if (alpha < 80) transparent++;
        sampled++;
      }
    }
    const pct = Math.round((transparent / Math.max(sampled, 1)) * 100);
    setProgress(Math.min(pct, 100));
    if (pct >= 42) {
      revealedRef.current = true;
      setRevealed(true);
      onReveal?.();
    }
  };

  const onPointerDown = (e: PointerEvent<HTMLCanvasElement>) => {
    if (revealedRef.current) return;
    drawingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratchAt(e.clientX, e.clientY);
  };

  const onPointerMove = (e: PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current || revealedRef.current) return;
    scratchAt(e.clientX, e.clientY);
    if (Math.random() < 0.22) checkProgress();
  };

  const finishScratch = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    checkProgress();
  };

  if (revealed) return null;

  return (
    <div ref={wrapRef} className="absolute inset-0 z-20 overflow-hidden rounded-2xl">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full cursor-pointer touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishScratch}
        onPointerCancel={finishScratch}
        onPointerLeave={finishScratch}
        aria-label="Scratch the card to reveal the event details"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-[#fff3b0]/50 bg-[#2d0b15]/20 px-5 py-3 text-center backdrop-blur-[1px]">
          <Sparkles className="mx-auto mb-1 h-4 w-4 text-[#fff3b0]" />
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#fff3b0]">Scratch Here</p>
          <p className="mt-1 text-[9px] text-[#fff3b0]/80">{progress}% revealed</p>
        </div>
      </div>
    </div>
  );
}
