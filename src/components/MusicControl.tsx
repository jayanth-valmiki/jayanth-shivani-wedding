import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type Props = { playing: boolean; muted: boolean; onToggle: () => void; onMute: () => void };

export default function MusicControl({ playing, muted, onToggle, onMute }: Props) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-gold/35 bg-maroon-deep/90 p-1.5 text-cream shadow-2xl backdrop-blur-xl">
      <button type="button" onClick={onToggle} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10" aria-label={playing ? "Pause music" : "Play music"}>
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <button type="button" onClick={onMute} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10" aria-label={muted ? "Unmute music" : "Mute music"}>
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
