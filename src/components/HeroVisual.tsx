"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-135" style={{ aspectRatio: "9/10" }}>
      <svg viewBox="0 0 540 600" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="vSkin" cx="35%" cy="28%" r="65%">
            <stop offset="0%" stopColor="#E8A870" />
            <stop offset="55%" stopColor="#C07840" />
            <stop offset="100%" stopColor="#8B5228" />
          </radialGradient>
          <radialGradient id="vSkinDk" cx="65%" cy="70%" r="55%">
            <stop offset="0%" stopColor="#7A4820" />
            <stop offset="100%" stopColor="#5A3015" />
          </radialGradient>
          <radialGradient id="vHair" cx="28%" cy="22%" r="72%">
            <stop offset="0%" stopColor="#3a2808" />
            <stop offset="100%" stopColor="#080400" />
          </radialGradient>
          <radialGradient id="vJacket" cx="28%" cy="20%" r="72%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3730a3" />
          </radialGradient>
          <radialGradient id="vPants" cx="30%" cy="22%" r="70%">
            <stop offset="0%" stopColor="#2e2b5a" />
            <stop offset="55%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f0d2a" />
          </radialGradient>
          <radialGradient id="vBag" cx="30%" cy="22%" r="70%">
            <stop offset="0%" stopColor="#d4956a" />
            <stop offset="55%" stopColor="#b07040" />
            <stop offset="100%" stopColor="#7a4820" />
          </radialGradient>
          <linearGradient id="vBook" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <radialGradient id="vOrb" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="58%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4c1d95" />
          </radialGradient>
          <linearGradient id="vBird1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="vBird2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <radialGradient id="vShoe" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#2d2a5a" />
            <stop offset="100%" stopColor="#0f0d24" />
          </radialGradient>
          <radialGradient id="vGround" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <filter id="vDrop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ── Decorative orb top-right ── */}
        <motion.circle
          cx="510"
          cy="-8"
          r="140"
          fill="url(#vOrb)"
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Bird 1 (largest, top-left of flock) ── */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { y: [-5, 5, -5], x: [-2, 2, -2] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 252 108 C 238 94 222 88 210 93 C 222 100 228 113 231 123 Z" fill="url(#vBird1)" />
          <path d="M 252 108 C 260 94 273 89 284 93 C 273 100 263 113 252 123 Z" fill="#7c3aed" />
          <ellipse cx="252" cy="123" rx="8" ry="5.5" fill="#4c1d95" />
          <path d="M 260 121 L 267 119 L 264 124 Z" fill="#fbbf24" />
        </motion.g>

        {/* ── Bird 2 (medium, middle of flock) ── */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { y: [4, -4, 4], x: [2, -2, 2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <path d="M 298 152 C 286 140 273 135 263 139 C 273 145 278 156 281 165 Z" fill="url(#vBird2)" />
          <path d="M 298 152 C 305 140 317 135 327 139 C 317 145 309 156 298 165 Z" fill="#4f46e5" />
          <ellipse cx="298" cy="165" rx="7" ry="4.5" fill="#312e81" />
          <path d="M 305 163 L 311 161 L 308 165 Z" fill="#fbbf24" />
        </motion.g>

        {/* ── Bird 3 (smallest) ── */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { y: [-6, 3, -6], x: [0, 3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <path d="M 334 183 C 325 175 316 172 309 175 C 316 179 319 186 321 192 Z" fill="url(#vBird1)" />
          <path d="M 334 183 C 340 175 349 172 356 175 C 349 179 344 186 334 192 Z" fill="#6d28d9" />
          <ellipse cx="334" cy="192" rx="5.5" ry="3.5" fill="#4c1d95" />
          <path d="M 339 190 L 344 189 L 342 192 Z" fill="#fbbf24" />
        </motion.g>

        {/* ── Ground shadow ── */}
        <ellipse cx="288" cy="552" rx="148" ry="20" fill="url(#vGround)" />

        {/* ── Character ── */}
        <g filter="url(#vDrop)">
          {/* Backpack */}
          <rect x="362" y="248" width="72" height="94" rx="17" fill="url(#vBag)" />
          <ellipse cx="384" cy="272" rx="22" ry="16" fill="#d4956a" opacity="0.42" />
          <rect x="370" y="295" width="52" height="36" rx="10" fill="#8B5228" opacity="0.65" />
          <rect x="375" y="300" width="30" height="16" rx="5" fill="#a06030" opacity="0.5" />
          <path d="M 370 251 Q 376 231 383 228" stroke="#6a3818" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 370 338 Q 375 358 382 362" stroke="#6a3818" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Right leg (back) */}
          <path
            d="M 293 384 Q 286 412 283 448 Q 281 478 289 500 Q 297 513 311 508 Q 325 502 325 486 Q 324 458 320 430 Q 316 402 308 382 Z"
            fill="url(#vPants)"
          />
          <path
            d="M 304 386 Q 297 414 294 450 Q 293 472 298 492"
            stroke="#312e6a"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />
          <ellipse cx="308" cy="506" rx="23" ry="11" fill="url(#vShoe)" />
          <ellipse cx="306" cy="502" rx="18" ry="8" fill="#3d3a7a" opacity="0.55" />

          {/* Left leg (front) */}
          <path
            d="M 248 382 Q 228 403 202 432 Q 180 458 178 476 Q 177 492 192 497 Q 207 500 222 489 Q 243 472 264 447 Q 282 424 282 386 Z"
            fill="url(#vPants)"
          />
          <path
            d="M 256 384 Q 236 408 212 434 Q 192 458 184 475"
            stroke="#312e6a"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />
          <ellipse cx="197" cy="494" rx="25" ry="12" fill="url(#vShoe)" />
          <ellipse cx="195" cy="490" rx="20" ry="9" fill="#3d3a7a" opacity="0.55" />

          {/* Torso */}
          <path
            d="M 233 242 Q 208 260 198 302 Q 191 342 204 388 Q 258 400 314 392 Q 358 384 368 360 Q 378 332 370 292 Q 360 254 340 242 Z"
            fill="url(#vJacket)"
          />
          <ellipse cx="265" cy="278" rx="46" ry="33" fill="#818cf8" opacity="0.28" />

          {/* Left arm (holding book) */}
          <path
            d="M 230 250 Q 206 267 190 298 Q 176 325 178 350 Q 180 366 193 368 Q 207 369 216 354 Q 226 330 236 302 Q 246 274 244 256 Z"
            fill="url(#vJacket)"
          />
          <path
            d="M 234 256 Q 212 272 198 300 Q 186 325 186 350"
            stroke="#818cf8"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
          <ellipse cx="200" cy="368" rx="14" ry="12" fill="url(#vSkin)" />

          {/* Right arm */}
          <path
            d="M 346 252 Q 370 268 383 300 Q 394 328 388 354 Q 383 370 372 370 Q 360 369 356 354 Q 351 329 343 302 Q 336 272 338 256 Z"
            fill="url(#vJacket)"
          />
          <path
            d="M 350 258 Q 372 274 382 304 Q 391 330 388 352"
            stroke="#818cf8"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
          <ellipse cx="376" cy="371" rx="14" ry="12" fill="url(#vSkin)" />

          {/* Book being held */}
          <g transform="rotate(-18 218 398)">
            <rect x="174" y="360" width="86" height="60" rx="4" fill="#f9f9f9" />
            <line x1="181" y1="373" x2="248" y2="373" stroke="#e0e0e0" strokeWidth="1.5" />
            <line x1="181" y1="381" x2="248" y2="381" stroke="#e0e0e0" strokeWidth="1.5" />
            <line x1="181" y1="389" x2="240" y2="389" stroke="#e0e0e0" strokeWidth="1.5" />
            <line x1="181" y1="397" x2="244" y2="397" stroke="#e0e0e0" strokeWidth="1.5" />
            <line x1="181" y1="405" x2="237" y2="405" stroke="#e0e0e0" strokeWidth="1.5" />
            <rect x="254" y="360" width="20" height="60" rx="3" fill="url(#vBook)" />
            <rect x="248" y="360" width="8" height="60" rx="2" fill="#be185d" />
          </g>

          {/* Collar */}
          <path
            d="M 260 245 Q 288 234 316 245 Q 306 260 288 262 Q 270 260 260 245"
            fill="#4f46e5"
          />
          <path d="M 268 246 Q 288 238 308 246" stroke="#6366f1" strokeWidth="3" fill="none" opacity="0.5" />

          {/* Neck */}
          <path d="M 276 212 L 274 244 Q 288 254 302 244 L 300 212 Z" fill="url(#vSkin)" />
          <path d="M 276 212 L 274 242" stroke="#C07840" strokeWidth="4" fill="none" opacity="0.28" />
          <path d="M 300 212 L 302 242" stroke="#C07840" strokeWidth="4" fill="none" opacity="0.28" />

          {/* Head */}
          <ellipse cx="288" cy="176" rx="57" ry="58" fill="url(#vSkin)" />
          <ellipse cx="270" cy="156" rx="25" ry="19" fill="#E8A870" opacity="0.3" />

          {/* Ears */}
          <ellipse cx="232" cy="180" rx="10" ry="13" fill="#C07840" />
          <ellipse cx="232" cy="180" rx="5.5" ry="7.5" fill="#A06030" opacity="0.5" />
          <ellipse cx="344" cy="180" rx="10" ry="13" fill="#C07840" />
          <ellipse cx="344" cy="180" rx="5.5" ry="7.5" fill="#A06030" opacity="0.5" />

          {/* Hair back */}
          <path
            d="M 236 174 Q 222 208 226 260 Q 230 304 238 342 Q 244 372 246 396"
            stroke="#080400"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 340 174 Q 354 208 350 260 Q 346 304 338 342 Q 332 372 330 396"
            stroke="#080400"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hair top dome */}
          <path d="M 234 188 Q 231 120 288 111 Q 345 120 342 188" fill="#080400" />
          <path
            d="M 253 124 Q 276 114 288 111"
            stroke="#2a1800"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path d="M 238 168 Q 256 157 278 153" stroke="#100800" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 240 172 Q 246 184 242 202" stroke="#080400" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* Eyebrows */}
          <path d="M 258 161 Q 270 155 280 158" stroke="#2a1500" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 296 158 Q 306 155 318 161" stroke="#2a1500" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Left eye */}
          <ellipse cx="269" cy="176" rx="14" ry="11" fill="#F5EDE0" />
          <circle cx="269" cy="176" r="8.5" fill="#2a1500" />
          <circle cx="269" cy="176" r="5" fill="#0d0800" />
          <circle cx="272" cy="173" r="2.5" fill="white" opacity="0.9" />
          <path d="M 255 173 Q 269 163 283 173" stroke="#2a1500" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 255 173 L 252 169" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 262 166 L 260 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 269 164 L 269 160" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 276 166 L 278 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 283 173 L 286 169" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Right eye */}
          <ellipse cx="307" cy="176" rx="14" ry="11" fill="#F5EDE0" />
          <circle cx="307" cy="176" r="8.5" fill="#2a1500" />
          <circle cx="307" cy="176" r="5" fill="#0d0800" />
          <circle cx="310" cy="173" r="2.5" fill="white" opacity="0.9" />
          <path d="M 293 173 Q 307 163 321 173" stroke="#2a1500" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 293 173 L 290 169" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 300 166 L 298 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 307 164 L 307 160" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 314 166 L 316 162" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 321 173 L 324 169" stroke="#180e00" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Rosy cheeks */}
          <ellipse cx="254" cy="190" rx="16" ry="10" fill="#f87171" opacity="0.24" />
          <ellipse cx="322" cy="190" rx="16" ry="10" fill="#f87171" opacity="0.24" />

          {/* Nose */}
          <path
            d="M 288 184 Q 282 198 278 202 Q 288 209 298 202 Q 294 198 288 184"
            fill="none"
            stroke="#A06030"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Mouth */}
          <path d="M 276 217 Q 288 228 300 217" fill="#C86070" />
          <path d="M 276 217 Q 288 224 300 217" fill="none" stroke="#8B3040" strokeWidth="1" />

          {/* Green earrings */}
          <line x1="223" y1="181" x2="223" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.8" />
          <circle cx="223" cy="189" r="5" fill="#22c55e" opacity="0.92" />
          <line x1="353" y1="181" x2="353" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.8" />
          <circle cx="353" cy="189" r="5" fill="#22c55e" opacity="0.92" />
        </g>

        {/* ── Sparkle accents ── */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "116px 295px" }}
        >
          <path d="M 116 289 L 119 295 L 116 301 L 113 295 Z" fill="#22c55e" />
          <path d="M 110 295 L 116 298 L 122 295 L 116 292 Z" fill="#22c55e" />
        </motion.g>
        <motion.g
          animate={shouldReduceMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          style={{ transformOrigin: "448px 348px" }}
        >
          <path d="M 448 342 L 451 348 L 448 354 L 445 348 Z" fill="#818cf8" />
          <path d="M 442 348 L 448 351 L 454 348 L 448 345 Z" fill="#818cf8" />
        </motion.g>
        <motion.g
          animate={shouldReduceMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          style={{ transformOrigin: "153px 442px" }}
        >
          <path d="M 153 436 L 156 442 L 153 448 L 150 442 Z" fill="#c084fc" />
          <path d="M 147 442 L 153 445 L 159 442 L 153 439 Z" fill="#c084fc" />
        </motion.g>
      </svg>
    </div>
  );
}
