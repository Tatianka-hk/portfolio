export default function bookCover (){ return(
<svg viewBox="0 0 600 900" className="w-full h-full">
    {/* Фон старовинного паперу */}
    <rect width="100%" height="100%" fill="#2c1e0f" />

    {/* Текстура паперу */}
    <pattern
        id="paperTexture"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
    >
        <rect width="100" height="100" fill="#3e2c1c" />
        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="rgba(0, 0, 0, 0.1)" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#paperTexture)" opacity="0.3" />

    {/* Тіньова рамка */}
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

    {/* Великий круг для акценту */}
    <circle
        cx="300"
        cy="400"
        r="250"
        fill="none"
        stroke="#4a3625"
        strokeWidth="5"
        strokeDasharray="10,5"
    />

    {/* Лупа (символ детектива) */}
    <g transform="translate(300, 400)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="#6b4f32" strokeWidth="5" />
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#6b4f32" strokeWidth="5" />
        <line x1="0" y1="-80" x2="0" y2="80" stroke="#6b4f32" strokeWidth="5" />
        <path
            d="M-60 -60 L-100 -100 M60 -60 L100 -100"
            stroke="#6b4f32"
            strokeWidth="5"
            strokeLinecap="round"
        />
    </g>

    {/* Текст заголовка */}
    <text
        x="50%"
        y="35%"
        textAnchor="middle"
        fontSize="50"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fill="#d4af37"
    >
        Detective's Journal
    </text>

    {/* Текст підзаголовка */}
    <text
        x="50%"
        y="45%"
        textAnchor="middle"
        fontSize="30"
        fontFamily="Georgia, serif"
        fill="#d4af37"
    >
        Case Files & Investigations
    </text>

    {/* Символічні деталі */}
    <g transform="translate(300, 600)">
        {/* Слід */}
        <path
            d="M-100 0 Q-50 -50 0 0 T100 0"
            fill="none"
            stroke="#6b4f32"
            strokeWidth="5"
        />
        {/* Відбиток пальця */}
        <circle cx="-50" cy="0" r="10" fill="#6b4f32" />
        <circle cx="50" cy="0" r="10" fill="#6b4f32" />
        <path
            d="M-50 0 Q-25 -20 0 0 T50 0"
            fill="none"
            stroke="#6b4f32"
            strokeWidth="5"
        />
    </g>

    {/* Підпис */}
    <text
        x="50%"
        y="90%"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Georgia, serif"
        fill="#d4af37"
    >
        "Secrets Unveiled"
    </text>
</svg>
) }
