/**
 * Pre-compute amplitude-over-time from audio for waveform visualization.
 * Used so the circular waveform in preview/export pulses with real audio level.
 */

const DEFAULT_SAMPLE_RATE = 30; // match typical video FPS for frame-accurate lookup

export interface AmplitudeCurve {
  /** Normalized amplitude 0–1 per time window */
  curve: Float32Array;
  /** Audio duration in seconds */
  duration: number;
  /** Samples per second (e.g. 30 for 30fps) */
  sampleRate: number;
}

/**
 * Decode audio from URL, compute RMS amplitude per small time window, normalize.
 * Returns a curve that can be indexed by time: curve[floor(time * sampleRate)].
 */
export async function computeAmplitudeCurve(
  audioUrl: string,
  sampleRate: number = DEFAULT_SAMPLE_RATE
): Promise<AmplitudeCurve> {
  const res = await fetch(audioUrl);
  const buf = await res.arrayBuffer();
  const audioCtx = new AudioContext();
  const decoded = await audioCtx.decodeAudioData(buf);
  const duration = decoded.duration;

  const channel = decoded.getChannelData(0);
  const sampleRateAudio = decoded.sampleRate;
  const samplesPerWindow = Math.max(1, Math.floor(sampleRateAudio / sampleRate));
  const numWindows = Math.ceil((channel.length / samplesPerWindow));
  const curve = new Float32Array(numWindows);

  for (let i = 0; i < numWindows; i++) {
    let sumSq = 0;
    let count = 0;
    const start = i * samplesPerWindow;
    for (let j = 0; j < samplesPerWindow && start + j < channel.length; j++) {
      const s = channel[start + j];
      sumSq += s * s;
      count++;
    }
    const rms = count > 0 ? Math.sqrt(sumSq / count) : 0;
    curve[i] = rms;
  }

  const max = Math.max(...Array.from(curve), 1e-9);
  for (let i = 0; i < curve.length; i++) {
    curve[i] /= max;
  }

  return { curve, duration, sampleRate };
}

/**
 * Get normalized amplitude (0–1) at a given time from a pre-computed curve.
 */
export function getAmplitudeAtTime(curve: AmplitudeCurve, time: number): number {
  const index = Math.floor(time * curve.sampleRate);
  const clamped = Math.max(0, Math.min(index, curve.curve.length - 1));
  return curve.curve[clamped] ?? 0;
}
