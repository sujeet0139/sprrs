export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Professional School Logo SVG */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          {/* Main gradient */}
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F2344" />
          </linearGradient>
          
          {/* Gold gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background circle */}
        <circle cx="28" cy="28" r="27" fill="url(#mainGradient)" filter="url(#shadow)"/>
        
        {/* Decorative outer ring */}
        <circle cx="28" cy="28" r="27" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6"/>

        {/* Temple/Dome roof - Premium style */}
        <path
          d="M 14 30 L 28 10 L 42 30"
          fill="url(#goldGradient)"
          stroke="#F59E0B"
          strokeWidth="1.5"
          opacity="0.95"
        />

        {/* Main building body */}
        <rect x="16" y="30" width="24" height="18" fill="url(#mainGradient)" stroke="#FCD34D" strokeWidth="1" opacity="0.9"/>

        {/* Center door - Gold */}
        <rect x="23" y="38" width="10" height="10" fill="url(#goldGradient)" stroke="none" rx="2"/>
        <circle cx="31" cy="42" r="1.5" fill="#1E3A8A" opacity="0.8"/>

        {/* Left column windows */}
        <rect x="18" y="33" width="4" height="4" fill="#FCD34D" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.9"/>
        <rect x="18" y="40" width="4" height="4" fill="#FCD34D" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.9"/>

        {/* Right column windows */}
        <rect x="34" y="33" width="4" height="4" fill="#FCD34D" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.9"/>
        <rect x="34" y="40" width="4" height="4" fill="#FCD34D" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.9"/>

        {/* Flag pole */}
        <line x1="28" y1="10" x2="28" y2="6" stroke="#FCD34D" strokeWidth="1.5"/>

        {/* Flag */}
        <path
          d="M 28 6 L 34 8 L 28 10 Z"
          fill="url(#goldGradient)"
          stroke="#F59E0B"
          strokeWidth="0.5"
        />

        {/* Bottom accent line */}
        <line x1="16" y1="48" x2="40" y2="48" stroke="#FCD34D" strokeWidth="2" opacity="0.7"/>

        {/* Small book icons - bottom decoration */}
        <rect x="13" y="50" width="6" height="3" fill="url(#goldGradient)" rx="0.5" opacity="0.8"/>
        <rect x="25" y="50" width="6" height="3" fill="url(#mainGradient)" rx="0.5" opacity="0.8"/>
        <rect x="37" y="50" width="6" height="3" fill="url(#goldGradient)" rx="0.5" opacity="0.8"/>
      </svg>

      {/* School name/branding - Enhanced */}
      <div className="hidden sm:block border-l-2 border-gray-300 pl-3">
        <p className="text-xs font-bold text-blue-900 leading-none">SRPSS</p>
        <p className="text-xs text-amber-600 font-bold">Since 1986</p>
      </div>
    </div>
  );
}
