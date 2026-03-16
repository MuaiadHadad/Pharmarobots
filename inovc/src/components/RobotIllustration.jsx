import { motion } from 'framer-motion';

export default function RobotIllustration() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 480 }}>
      {/* Outer ring */}
      <motion.circle
        cx="240" cy="240" r="200"
        stroke="rgba(14,165,233,0.12)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="240" cy="240" r="160"
        stroke="rgba(14,165,233,0.08)" strokeWidth="1"
        strokeDasharray="8 12"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '240px 240px' }}
      />
      <motion.circle
        cx="240" cy="240" r="220"
        stroke="rgba(6,214,160,0.06)" strokeWidth="1"
        strokeDasharray="4 16"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '240px 240px' }}
      />

      {/* Glow center */}
      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
      </radialGradient>
      <circle cx="240" cy="240" r="120" fill="url(#centerGlow)" />

      {/* Robot body */}
      {/* Torso */}
      <rect x="185" y="210" width="110" height="120" rx="12" fill="#0a1628" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
      {/* Chest detail */}
      <rect x="200" y="225" width="80" height="50" rx="8" fill="rgba(14,165,233,0.08)" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
      {/* Chest orb */}
      <motion.circle
        cx="240" cy="250" r="14"
        fill="rgba(14,165,233,0.2)"
        stroke="#0ea5e9" strokeWidth="1.5"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="240" cy="250" r="7" fill="#0ea5e9" />

      {/* Head */}
      <rect x="200" y="148" width="80" height="60" rx="14" fill="#0a1628" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
      {/* Eyes */}
      <motion.ellipse
        cx="222" cy="175" rx="9" ry="7"
        fill="rgba(14,165,233,0.15)"
        stroke="#0ea5e9" strokeWidth="1.5"
        animate={{ scaleY: [1, 0.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ transformOrigin: '222px 175px' }}
      />
      <motion.ellipse
        cx="258" cy="175" rx="9" ry="7"
        fill="rgba(14,165,233,0.15)"
        stroke="#0ea5e9" strokeWidth="1.5"
        animate={{ scaleY: [1, 0.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ transformOrigin: '258px 175px' }}
      />
      <circle cx="222" cy="175" r="4" fill="#0ea5e9" />
      <circle cx="258" cy="175" r="4" fill="#0ea5e9" />
      {/* Antenna */}
      <line x1="240" y1="148" x2="240" y2="128" stroke="rgba(14,165,233,0.5)" strokeWidth="2" />
      <motion.circle
        cx="240" cy="122" r="6"
        fill="#0ea5e9"
        animate={{ opacity: [0.4, 1, 0.4], r: [5, 8, 5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Left arm */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '185px 225px' }}
      >
        <rect x="150" y="215" width="35" height="80" rx="10" fill="#0a1628" stroke="rgba(14,165,233,0.35)" strokeWidth="1.5" />
        <rect x="155" y="225" width="25" height="30" rx="5" fill="rgba(14,165,233,0.07)" />
        {/* hand */}
        <rect x="148" y="292" width="39" height="26" rx="8" fill="#0a1628" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" />
        <line x1="158" y1="292" x2="158" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
        <line x1="168" y1="292" x2="168" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
        <line x1="178" y1="292" x2="178" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
      </motion.g>

      {/* Right arm */}
      <motion.g
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '295px 225px' }}
      >
        <rect x="295" y="215" width="35" height="80" rx="10" fill="#0a1628" stroke="rgba(14,165,233,0.35)" strokeWidth="1.5" />
        <rect x="300" y="225" width="25" height="30" rx="5" fill="rgba(14,165,233,0.07)" />
        <rect x="293" y="292" width="39" height="26" rx="8" fill="#0a1628" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" />
        <line x1="303" y1="292" x2="303" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
        <line x1="313" y1="292" x2="313" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
        <line x1="323" y1="292" x2="323" y2="318" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
      </motion.g>

      {/* Legs */}
      <rect x="200" y="330" width="35" height="70" rx="10" fill="#0a1628" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" />
      <rect x="245" y="330" width="35" height="70" rx="10" fill="#0a1628" stroke="rgba(14,165,233,0.3)" strokeWidth="1.5" />
      {/* Feet */}
      <rect x="195" y="396" width="45" height="18" rx="7" fill="#0a1628" stroke="rgba(14,165,233,0.25)" strokeWidth="1.5" />
      <rect x="240" y="396" width="45" height="18" rx="7" fill="#0a1628" stroke="rgba(14,165,233,0.25)" strokeWidth="1.5" />

      {/* Floor reflection */}
      <ellipse cx="240" cy="420" rx="90" ry="10" fill="rgba(14,165,233,0.06)" />

      {/* Orbiting dots */}
      {[0, 90, 180, 270].map((deg, i) => (
        <motion.circle
          key={i}
          cx={240 + 160 * Math.cos((deg * Math.PI) / 180)}
          cy={240 + 160 * Math.sin((deg * Math.PI) / 180)}
          r="4"
          fill="#0ea5e9"
          opacity={0.6}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Small data points */}
      <motion.rect x="60" y="180" width="50" height="28" rx="6"
        fill="rgba(6,214,160,0.12)" stroke="rgba(6,214,160,0.3)" strokeWidth="1"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <text x="85" y="198" textAnchor="middle" fill="#06d6a0" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">AI 98%</text>

      <motion.rect x="370" y="240" width="55" height="28" rx="6"
        fill="rgba(14,165,233,0.12)" stroke="rgba(14,165,233,0.3)" strokeWidth="1"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      <text x="397" y="258" textAnchor="middle" fill="#0ea5e9" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="600">SYNC ✓</text>
    </svg>
  );
}
