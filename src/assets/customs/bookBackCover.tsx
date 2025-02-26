export default function BookBackCover() { return (
<svg viewBox="0 0 600 900" className="w-full h-full">
  {/* Background */}
  <rect width="100%" height="100%" fill="#2c1e0f" />

  {/* Paper texture pattern */}
  <pattern
    id="backCoverTexture"
    x="0"
    y="0"
    width="100"
    height="100"
    patternUnits="userSpaceOnUse"
  >
    <rect width="100" height="100" fill="#3e2c1c" />
    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="rgba(0, 0, 0, 0.1)" />
  </pattern>
  <rect width="100%" height="100%" fill="url(#backCoverTexture)" opacity="0.3" />

  {/* Border frame with slight wear and tear */}
  <rect
    x="20"
    y="20"
    width="560"
    height="760"
    rx="20"
    ry="20"
    fill="none"
    stroke="#1a1209"
    strokeWidth="10"
  />

  {/* Worn corner effect */}
  <path d="M20 20 L40 40 L60 20" fill="none" stroke="#1a1209" strokeWidth="2" />
  <path d="M580 20 L560 40 L540 20" fill="none" stroke="#1a1209" strokeWidth="2" />
  <path d="M20 780 L40 760 L60 780" fill="none" stroke="#1a1209" strokeWidth="2" />
  <path
    d="M580 780 L560 760 L540 780"
    fill="none"
    stroke="#1a1209"
    strokeWidth="2"
  />

  {/* Decorative circles */}
  <circle
    cx="300"
    cy="300"
    r="200"
    fill="none"
    stroke="#4a3625"
    strokeWidth="5"
    strokeDasharray="10,5"
    opacity="0.7"
  />
  <circle
    cx="300"
    cy="300"
    r="150"
    fill="none"
    stroke="#6b4f32"
    strokeWidth="3"
    strokeDasharray="5,10"
    opacity="0.5"
  />

  {/* Abstract detective symbols */}
  <g transform="translate(300, 500)">
    {/* Keyhole */}
    <path
      d="M0 -50 C-30 -50 -30 0 0 0 C30 0 30 -50 0 -50 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="4"
    />
    <path d="M0 0 L0 30" stroke="#d4af37" strokeWidth="4" />

    {/* Footprints */}
    <path
      d="M-120 80 C-110 75 -100 90 -90 85 C-80 80 -70 85 -60 80"
      fill="none"
      stroke="#6b4f32"
      strokeWidth="3"
    />
    <path
      d="M-90 100 C-80 95 -70 110 -60 105 C-50 100 -40 105 -30 100"
      fill="none"
      stroke="#6b4f32"
      strokeWidth="3"
    />

    {/* Magnifying glass */}
    <circle cx="70" cy="80" r="25" fill="none" stroke="#d4af37" strokeWidth="3" />
    <line x1="90" y1="100" x2="120" y2="130" stroke="#d4af37" strokeWidth="5" />
  </g>

  {/* Quote or enigmatic phrase */}
  <text
    x="50%"
    y="70%"
    textAnchor="middle"
    fontSize="24"
    fontFamily="Georgia, serif"
    fill="#d4af37"
    fontStyle="italic"
  >
    "Every mystery has its solution..."
  </text>

  {/* Author attribution */}
  <text
    x="50%"
    y="80%"
    textAnchor="middle"
    fontSize="20"
    fontFamily="Georgia, serif"
    fill="#d4af37"
  >
    Private Investigations
  </text>

  {/* Decorative corners */}
  <path d="M40 40 L70 40 L70 70" fill="none" stroke="#d4af37" strokeWidth="2" />
  <path d="M560 40 L530 40 L530 70" fill="none" stroke="#d4af37" strokeWidth="2" />
  <path d="M40 760 L70 760 L70 730" fill="none" stroke="#d4af37" strokeWidth="2" />
  <path
    d="M560 760 L530 760 L530 730"
    fill="none"
    stroke="#d4af37"
    strokeWidth="2"
  />
</svg>
) }
