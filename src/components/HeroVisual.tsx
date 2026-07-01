"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  { x: 48, y: 85, size: 4.5, color: "var(--accent)", delay: 0 },
  { x: 352, y: 115, size: 3.5, color: "#818cf8", delay: 0.8 },
  { x: 60, y: 330, size: 5, color: "#c084fc", delay: 1.4 },
  { x: 345, y: 300, size: 3.5, color: "var(--accent)", delay: 2 },
  { x: 188, y: 32, size: 3, color: "#818cf8", delay: 0.4 },
];

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-105" style={{ aspectRatio: "5/6" }}>
      {/* Ambient glow behind character */}
      <motion.div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-accent/15 blur-[80px]"
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 400 480"
        className="relative h-full w-full"
        aria-label="Portrait illustration"
      >
        <defs>
          <radialGradient id="skinGrad" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#D4956A" />
            <stop offset="55%" stopColor="#B07040" />
            <stop offset="100%" stopColor="#8B5535" />
          </radialGradient>
          <radialGradient id="skinShade" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#9A5830" />
            <stop offset="100%" stopColor="#6B3E20" />
          </radialGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#181818" />
            <stop offset="100%" stopColor="#090909" />
          </linearGradient>
          <radialGradient id="ambientGrad" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="eyeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background ambient */}
        <ellipse cx="200" cy="240" rx="175" ry="230" fill="url(#ambientGrad)" />

        {/* Circuit decorations — left */}
        <g opacity="0.38" stroke="#22c55e" strokeWidth="0.9" fill="none">
          <path d="M 38 128 L 84 128 L 84 185" />
          <circle cx="84" cy="128" r="2.5" fill="#22c55e" />
          <circle cx="84" cy="185" r="2.5" fill="#22c55e" />
          <path d="M 38 218 L 72 218 L 72 250 L 38 250" />
          <circle cx="72" cy="218" r="2" fill="#22c55e" />
          <path d="M 38 312 L 98 312" />
          <circle cx="98" cy="312" r="4.5" fill="#22c55e" filter="url(#nodeGlow)" />
          <path d="M 52 358 L 52 394 L 38 394" />
          <circle cx="52" cy="358" r="2" fill="#22c55e" />
        </g>

        {/* Circuit decorations — right */}
        <g opacity="0.38" stroke="#818cf8" strokeWidth="0.9" fill="none">
          <path d="M 362 128 L 316 128 L 316 185" />
          <circle cx="316" cy="128" r="2.5" fill="#818cf8" />
          <circle cx="316" cy="185" r="2.5" fill="#818cf8" />
          <path d="M 362 218 L 328 218 L 328 250 L 362 250" />
          <circle cx="328" cy="218" r="2" fill="#818cf8" />
          <path d="M 362 312 L 302 312" />
          <circle cx="302" cy="312" r="4.5" fill="#c084fc" filter="url(#nodeGlow)" />
          <path d="M 348 358 L 348 394 L 362 394" />
          <circle cx="348" cy="358" r="2" fill="#818cf8" />
        </g>

        {/* Body / shoulders */}
        <path
          d="M 68 480 L 68 382 Q 72 346 118 329 Q 156 315 200 315 Q 244 315 282 329 Q 328 346 332 382 L 332 480"
          fill="url(#bodyGrad)"
        />
        {/* Jacket collar */}
        <path
          d="M 144 337 Q 163 355 200 359 Q 237 355 256 337"
          stroke="#282828"
          strokeWidth="2.5"
          fill="none"
        />
        <line x1="200" y1="359" x2="200" y2="480" stroke="#1c1c1c" strokeWidth="1.5" opacity="0.5" />

        {/* Neck */}
        <path
          d="M 183 268 L 181 320 Q 200 332 219 320 L 217 268"
          fill="url(#skinGrad)"
        />
        <path d="M 183 268 L 181 316" stroke="#8B5030" strokeWidth="5" fill="none" opacity="0.25" />
        <path d="M 217 268 L 219 316" stroke="#8B5030" strokeWidth="5" fill="none" opacity="0.25" />

        {/* Hair — back layer */}
        <path
          d="M 130 168 Q 112 242 118 318 Q 124 368 132 420"
          stroke="#0c0700"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 270 168 Q 288 242 282 318 Q 276 368 268 420"
          stroke="#0c0700"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head */}
        <ellipse cx="200" cy="193" rx="74" ry="88" fill="url(#skinGrad)" />

        {/* Ears */}
        <ellipse cx="127" cy="202" rx="11" ry="15" fill="#A06030" />
        <ellipse cx="127" cy="202" rx="6" ry="9" fill="#7A4020" opacity="0.55" />
        <ellipse cx="273" cy="202" rx="11" ry="15" fill="#A06030" />
        <ellipse cx="273" cy="202" rx="6" ry="9" fill="#7A4020" opacity="0.55" />

        {/* Hair — top / front */}
        <path d="M 128 178 Q 126 100 200 92 Q 274 100 272 178" fill="#0c0700" />
        {/* Hair highlight streak */}
        <path
          d="M 162 112 Q 185 100 200 97"
          stroke="#2a1800"
          strokeWidth="5"
          fill="none"
          opacity="0.65"
          strokeLinecap="round"
        />
        <path d="M 140 166 Q 155 120 200 100" stroke="#1a1000" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 260 166 Q 245 120 200 100" stroke="#1a1000" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round" />

        {/* Eyebrows */}
        <path d="M 160 161 Q 175 155 188 158" stroke="#2a1500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 212 158 Q 225 155 240 161" stroke="#2a1500" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Left eye */}
        <ellipse cx="174" cy="180" rx="18" ry="12" fill="#F0E6D8" />
        <circle cx="174" cy="180" r="9" fill="#22c55e" />
        <circle cx="174" cy="180" r="5" fill="#091505" />
        <circle cx="177" cy="177" r="2.5" fill="white" opacity="0.9" />
        <path d="M 157 177 Q 174 166 191 177" stroke="#2a1500" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 158 183 Q 174 190 191 183" stroke="#C08060" strokeWidth="1" fill="none" opacity="0.45" />
        <path d="M 157 177 L 154 172" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 165 170 L 163 165" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 174 167 L 174 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 183 170 L 185 165" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 191 177 L 194 172" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Right eye */}
        <ellipse cx="226" cy="180" rx="18" ry="12" fill="#F0E6D8" />
        <circle cx="226" cy="180" r="9" fill="#22c55e" />
        <circle cx="226" cy="180" r="5" fill="#091505" />
        <circle cx="229" cy="177" r="2.5" fill="white" opacity="0.9" />
        <path d="M 209 177 Q 226 166 243 177" stroke="#2a1500" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 210 183 Q 226 190 243 183" stroke="#C08060" strokeWidth="1" fill="none" opacity="0.45" />
        <path d="M 209 177 L 206 172" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 217 170 L 215 165" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 226 167 L 226 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 235 170 L 237 165" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 243 177 L 246 172" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Eye glow overlays */}
        <circle cx="174" cy="180" r="10" fill="#22c55e" opacity="0.28" filter="url(#eyeGlow)" />
        <circle cx="226" cy="180" r="10" fill="#22c55e" opacity="0.28" filter="url(#eyeGlow)" />

        {/* Nose */}
        <path
          d="M 200 193 Q 193 213 187 218 Q 200 226 213 218 Q 207 213 200 193"
          fill="none"
          stroke="#8B5030"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lips */}
        <path
          d="M 184 236 Q 192 229 200 233 Q 208 229 216 236 Q 208 242 200 239 Q 192 242 184 236"
          fill="#C86070"
        />
        <path d="M 184 236 Q 192 249 200 251 Q 208 249 216 236" fill="#B85060" />
        <path d="M 184 236 Q 200 231 216 236" stroke="#8B3040" strokeWidth="1" fill="none" />

        {/* Glowing earrings */}
        <line x1="117" y1="198" x2="117" y2="192" stroke="#22c55e" strokeWidth="2" opacity="0.7" />
        <circle cx="117" cy="208" r="5.5" fill="#22c55e" filter="url(#eyeGlow)" opacity="0.92" />
        <line x1="283" y1="198" x2="283" y2="192" stroke="#22c55e" strokeWidth="2" opacity="0.7" />
        <circle cx="283" cy="208" r="5.5" fill="#22c55e" filter="url(#eyeGlow)" opacity="0.92" />

        {/* Tech floating labels */}
        <g fontFamily="monospace" fontSize="8.5">
          <g opacity="0.65">
            <rect x="24" y="266" width="62" height="18" rx="4" fill="#050f05" stroke="#22c55e" strokeWidth="0.8" />
            <text x="29" y="278.5" fill="#22c55e">ZK Proofs</text>
          </g>
          <g opacity="0.6">
            <rect x="314" y="154" width="62" height="18" rx="4" fill="#05050f" stroke="#818cf8" strokeWidth="0.8" />
            <text x="319" y="166.5" fill="#818cf8">Solidity</text>
          </g>
          <g opacity="0.55">
            <rect x="308" y="358" width="72" height="18" rx="4" fill="#0f050f" stroke="#c084fc" strokeWidth="0.8" />
            <text x="313" y="370.5" fill="#c084fc">Rust / WASM</text>
          </g>
          <g opacity="0.55">
            <rect x="24" y="382" width="48" height="18" rx="4" fill="#050f05" stroke="#22c55e" strokeWidth="0.8" />
            <text x="29" y="394.5" fill="#22c55e">FHE</text>
          </g>
        </g>
      </svg>

      {/* Animated floating orbs */}
      {orbs.map(({ x, y, size, color, delay }) => (
        <motion.div
          key={`${x}-${y}`}
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${(x / 400) * 100}%`,
            top: `${(y / 480) * 100}%`,
            width: size * 2,
            height: size * 2,
            background: color,
            boxShadow: `0 0 ${size * 4}px ${color}`,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }
          }
          transition={{
            duration: 3 + delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />
      ))}
    </div>
  );
}
