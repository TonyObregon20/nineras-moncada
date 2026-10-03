export function BabyLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#FFE3D1" />
      {/* Hair swirl */}
      <path
        d="M24 8C26 6 29 7 28.5 10C28 12.5 25 13 24 14"
        stroke="#8D5B4C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Ears */}
      <circle cx="4" cy="24" r="3.5" fill="#FFCDB2" />
      <circle cx="44" cy="24" r="3.5" fill="#FFCDB2" />
      {/* Eyes */}
      <ellipse cx="17" cy="23" rx="2.5" ry="3" fill="#3D3A37" />
      <circle cx="16" cy="22" r="1" fill="#FFFFFF" />
      <ellipse cx="31" cy="23" rx="2.5" ry="3" fill="#3D3A37" />
      <circle cx="30" cy="22" r="1" fill="#FFFFFF" />
      {/* Cute blush cheeks */}
      <ellipse cx="14" cy="28" rx="3.5" ry="2" fill="#FF9A85" fillOpacity="0.6" />
      <ellipse cx="34" cy="28" rx="3.5" ry="2" fill="#FF9A85" fillOpacity="0.6" />
      {/* Nose */}
      <circle cx="24" cy="26" r="1.5" fill="#E29578" />
      {/* Sweet smile */}
      <path
        d="M20 30C21.5 32.5 26.5 32.5 28 30"
        stroke="#593E36"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NannyPlayImage({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nannyRoom" x1="0" y1="0" x2="500" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBF7F0" />
          <stop offset="1" stopColor="#EFE6D8" />
        </linearGradient>
        <linearGradient id="matGrad" x1="50" y1="260" x2="450" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9DF7B" />
          <stop offset="1" stopColor="#F4D06F" />
        </linearGradient>
        <linearGradient id="scrubGrad" x1="60" y1="120" x2="160" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B5DE5" />
          <stop offset="1" stopColor="#7B2CBF" />
        </linearGradient>
        <linearGradient id="babyShirt1" x1="220" y1="200" x2="280" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF99C8" />
          <stop offset="1" stopColor="#FC60A8" />
        </linearGradient>
        <linearGradient id="babyShirt2" x1="360" y1="200" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#70D6FF" />
          <stop offset="1" stopColor="#3A86FF" />
        </linearGradient>
      </defs>

      {/* Room Background */}
      <rect width="500" height="360" fill="url(#nannyRoom)" />
      
      {/* Nursery Window with soft clouds */}
      <rect x="30" y="30" width="130" height="120" rx="16" fill="#E0F2FE" opacity="0.8" />
      <line x1="95" y1="30" x2="95" y2="150" stroke="#BAE6FD" strokeWidth="4" />
      <line x1="30" y1="90" x2="160" y2="90" stroke="#BAE6FD" strokeWidth="4" />
      <circle cx="65" cy="65" r="16" fill="#FDE047" opacity="0.8" />

      {/* Playroom Shelves with pastel toys */}
      <rect x="320" y="40" width="150" height="12" rx="4" fill="#D6B898" />
      <rect x="340" y="24" width="22" height="16" rx="4" fill="#80CED6" />
      <circle cx="390" cy="30" r="10" fill="#F4A261" />
      <rect x="420" y="18" width="28" height="22" rx="5" fill="#E76F51" />

      {/* Soft Play Mat */}
      <path d="M 30 270 Q 250 240 470 270 L 485 350 L 15 350 Z" fill="url(#matGrad)" />
      
      {/* Decorative cushion */}
      <ellipse cx="280" cy="270" rx="35" ry="16" fill="#FFB4A2" />

      {/* Toys on floor: blocks, rings */}
      <rect x="180" y="280" width="24" height="24" rx="4" fill="#E63946" />
      <text x="186" y="297" fontSize="14" fontWeight="bold" fill="white">A</text>
      <rect x="208" y="288" width="22" height="22" rx="4" fill="#457B9D" />
      <text x="214" y="304" fontSize="13" fontWeight="bold" fill="white">B</text>
      <rect x="195" y="262" width="20" height="20" rx="4" fill="#2A9D8F" />
      <text x="200" y="277" fontSize="12" fontWeight="bold" fill="white">1</text>

      {/* Toy Duck / Dinosaur */}
      <path d="M 130 290 Q 140 275 155 285 Q 165 290 155 305 Q 135 310 130 290 Z" fill="#52B788" />
      <circle cx="152" cy="285" r="2" fill="#1B4332" />

      {/* NANNY FIGURE (Left, kneeling warmly towards babies) */}
      {/* Legs kneeling */}
      <path d="M 50 280 Q 75 270 95 320 L 40 330 Z" fill="#6A1B9A" />
      {/* Torso in professional purple scrub */}
      <path d="M 70 180 Q 85 150 120 160 L 135 240 Q 100 270 70 240 Z" fill="url(#scrubGrad)" />
      {/* Neck & Head */}
      <circle cx="110" cy="115" r="28" fill="#F5CBA7" />
      {/* Hair styled up in ponytail */}
      <path d="M 90 115 C 85 85 130 80 135 110 C 135 125 125 135 110 135 Z" fill="#4A2810" />
      <ellipse cx="85" cy="100" rx="14" ry="18" fill="#4A2810" />
      <circle cx="95" cy="105" r="5" fill="#E63946" /> {/* hair scrunchie */}
      {/* Smiling Profile Eye & Mouth */}
      <ellipse cx="124" cy="115" rx="3" ry="4" fill="#2B1E16" />
      <path d="M 125 127 Q 133 133 126 137" stroke="#9C443C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="120" cy="123" rx="4" ry="2" fill="#FF8A80" opacity="0.6" />
      {/* Arm extended playing with baby */}
      <path d="M 115 190 Q 150 210 170 255" stroke="#F5CBA7" strokeWidth="16" strokeLinecap="round" />
      <circle cx="170" cy="255" r="10" fill="#F5CBA7" />

      {/* BABY 1 (Center-Left: sitting happily) */}
      <circle cx="260" cy="180" r="24" fill="#FCD5CE" />
      {/* Baby hair curl */}
      <path d="M 260 156 Q 266 148 268 156" stroke="#9C6644" strokeWidth="3" strokeLinecap="round" />
      {/* Baby face */}
      <ellipse cx="253" cy="178" rx="2.5" ry="3" fill="#2B1E16" />
      <ellipse cx="267" cy="178" rx="2.5" ry="3" fill="#2B1E16" />
      <circle cx="248" cy="186" r="3" fill="#FF8A80" opacity="0.7" />
      <circle cx="272" cy="186" r="3" fill="#FF8A80" opacity="0.7" />
      <path d="M 256 190 Q 260 196 264 190" stroke="#7F4F24" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Baby body */}
      <path d="M 242 205 Q 260 200 278 205 L 285 270 Q 260 280 235 270 Z" fill="url(#babyShirt1)" />
      <circle cx="240" cy="240" r="8" fill="#FCD5CE" />
      <circle cx="280" cy="240" r="8" fill="#FCD5CE" />

      {/* BABY 2 (Right: clapping and smiling) */}
      <circle cx="390" cy="175" r="25" fill="#FFE5D9" />
      <path d="M 390 150 Q 397 142 399 152" stroke="#6F4E37" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="383" cy="173" rx="2.5" ry="3" fill="#2B1E16" />
      <ellipse cx="397" cy="173" rx="2.5" ry="3" fill="#2B1E16" />
      <circle cx="377" cy="182" r="3" fill="#FF8A80" opacity="0.7" />
      <circle cx="403" cy="182" r="3" fill="#FF8A80" opacity="0.7" />
      <path d="M 386 186 Q 390 194 394 186" stroke="#7F4F24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Baby body */}
      <path d="M 372 200 Q 390 195 408 200 L 415 270 Q 390 280 365 270 Z" fill="url(#babyShirt2)" />
      <circle cx="375" cy="235" r="8" fill="#FFE5D9" />
      <circle cx="405" cy="235" r="8" fill="#FFE5D9" />

      {/* Badge overlay on top corner */}
      <g transform="translate(20, 20)">
        <rect width="130" height="28" rx="8" fill="rgba(255,255,255,0.92)" />
        <circle cx="16" cy="14" r="6" fill="#10B981" />
        <path d="M13 14 L15 16 L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="18" fill="#065F46" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Niñera Verificada</text>
      </g>
    </svg>
  );
}

export function HomeCareStaffImage({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cleanBg" x1="0" y1="0" x2="500" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="uniformBlue" x1="160" y1="100" x2="260" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="cartGrad" x1="280" y1="160" x2="440" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Pristine Modern Home Room */}
      <rect width="500" height="360" fill="url(#cleanBg)" />
      
      {/* Floor tiles perspective */}
      <line x1="0" y1="280" x2="500" y2="280" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="100" y1="280" x2="40" y2="360" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="240" y1="280" x2="220" y2="360" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="380" y1="280" x2="410" y2="360" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Sunlit window */}
      <rect x="40" y="40" width="110" height="150" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="2" />
      <line x1="95" y1="40" x2="95" y2="190" stroke="#BAE6FD" strokeWidth="2" />
      <line x1="40" y1="115" x2="150" y2="115" stroke="#BAE6FD" strokeWidth="2" />

      {/* Sparkles of cleanliness */}
      <g transform="translate(80, 240)">
        <polygon points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7" fill="#F59E0B" />
      </g>
      <g transform="translate(420, 90)">
        <polygon points="8,0 10,5 16,8 10,11 8,16 6,11 0,8 6,5" fill="#38BDF8" />
      </g>

      {/* ORGANIZED SERVICE TROLLEY (Right, matching reference screenshot) */}
      <rect x="330" y="160" width="110" height="130" rx="10" fill="url(#cartGrad)" />
      {/* Trolley shelves */}
      <rect x="325" y="150" width="120" height="8" rx="4" fill="#94A3B8" />
      <rect x="325" y="210" width="120" height="8" rx="4" fill="#94A3B8" />
      <rect x="325" y="280" width="120" height="8" rx="4" fill="#94A3B8" />
      {/* Trolley wheels */}
      <circle cx="340" cy="305" r="12" fill="#475569" />
      <circle cx="340" cy="305" r="6" fill="#94A3B8" />
      <circle cx="430" cy="305" r="12" fill="#475569" />
      <circle cx="430" cy="305" r="6" fill="#94A3B8" />
      {/* Clean buckets & bottles */}
      <rect x="340" y="165" width="30" height="40" rx="6" fill="#EF4444" />
      <rect x="380" y="165" width="45" height="40" rx="6" fill="#0284C7" />
      <rect x="350" y="110" width="14" height="35" rx="3" fill="#10B981" />
      <rect x="375" y="105" width="16" height="40" rx="3" fill="#F59E0B" />
      <circle cx="357" cy="100" r="4" fill="#10B981" />
      <circle cx="383" cy="95" r="4" fill="#F59E0B" />

      {/* PROFESSIONAL STAFF (Left/Center holding mop) */}
      {/* Shoes */}
      <ellipse cx="190" cy="335" rx="20" ry="10" fill="#0F172A" />
      <ellipse cx="250" cy="335" rx="20" ry="10" fill="#0F172A" />
      {/* Trousers */}
      <path d="M 175 220 L 180 330 L 205 330 L 215 240 L 225 330 L 255 330 L 260 220 Z" fill="#0369A1" />
      {/* Uniform Top */}
      <path d="M 170 120 Q 215 110 260 120 L 265 225 L 165 225 Z" fill="url(#uniformBlue)" />
      {/* White collar & ID Badge */}
      <polygon points="215,120 205,145 225,145" fill="#FFFFFF" />
      <rect x="180" y="145" width="22" height="15" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <rect x="184" y="149" width="14" height="2" fill="#0284C7" />
      {/* Arms holding microfiber mop */}
      <path d="M 170 140 Q 150 180 160 220" stroke="#F5CBA7" strokeWidth="14" strokeLinecap="round" />
      <path d="M 255 140 Q 230 185 210 215" stroke="#F5CBA7" strokeWidth="14" strokeLinecap="round" />
      {/* Aluminum mop handle */}
      <line x1="220" y1="120" x2="140" y2="330" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" />
      {/* Blue Microfiber mop head */}
      <rect x="110" y="325" width="60" height="16" rx="6" fill="#0284C7" />

      {/* Head & Friendly Smile */}
      <circle cx="215" cy="80" r="26" fill="#F5CBA7" />
      <path d="M 195 75 C 195 50 235 50 235 75 Z" fill="#334155" />
      <ellipse cx="208" cy="80" rx="2" ry="3" fill="#1E293B" />
      <ellipse cx="222" cy="80" rx="2" ry="3" fill="#1E293B" />
      <path d="M 210 93 Q 215 98 220 93" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Top Banner Tag */}
      <g transform="translate(20, 20)">
        <rect width="145" height="28" rx="8" fill="rgba(255,255,255,0.92)" />
        <circle cx="16" cy="14" r="6" fill="#0284C7" />
        <path d="M13 14 L15 16 L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="18" fill="#0369A1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Hogar & Limpieza</text>
      </g>
    </svg>
  );
}

export function NurseNeonatalImage({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nurseRoom" x1="0" y1="0" x2="500" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0FDFA" />
          <stop offset="1" stopColor="#CCFBF1" />
        </linearGradient>
        <linearGradient id="nurseWhite" x1="60" y1="120" x2="200" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F1F5F9" />
        </linearGradient>
      </defs>

      {/* Gentle Clinical/Home Nursery Background */}
      <rect width="500" height="360" fill="url(#nurseRoom)" />

      {/* Soft warm nursery lamp */}
      <circle cx="420" cy="60" r="40" fill="#FEF08A" opacity="0.4" />
      <circle cx="420" cy="60" r="20" fill="#FEF08A" opacity="0.7" />

      {/* Soft bassinet / crib behind */}
      <rect x="270" y="120" width="180" height="110" rx="20" fill="#FFFFFF" opacity="0.8" stroke="#99F6E4" strokeWidth="2" />
      <line x1="300" y1="230" x2="300" y2="320" stroke="#5EEAD4" strokeWidth="4" />
      <line x1="420" y1="230" x2="420" y2="320" stroke="#5EEAD4" strokeWidth="4" />
      <path d="M 310 145 Q 360 125 410 145" stroke="#14B8A6" strokeWidth="3" strokeDasharray="6 6" fill="none" />

      {/* NURSE FIGURE (Left & Center, holding tenderly an infant) */}
      {/* Body in clinical scrub with gentle teal piping */}
      <path d="M 80 180 Q 130 140 180 160 L 210 320 L 70 320 Z" fill="url(#nurseWhite)" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Teal scrub collar */}
      <path d="M 120 150 Q 135 170 150 150" stroke="#0D9488" strokeWidth="4" fill="none" />
      
      {/* Stethoscope around neck */}
      <path d="M 115 160 Q 95 210 120 240 Q 135 255 145 240 Q 170 210 155 160" stroke="#334155" strokeWidth="3.5" fill="none" />
      <circle cx="125" cy="245" r="8" fill="#94A3B8" stroke="#334155" strokeWidth="2" />

      {/* Nurse Head & Caring Expression */}
      <circle cx="135" cy="95" r="28" fill="#FCD5CE" />
      {/* Brown Hair in neat bun */}
      <path d="M 110 90 C 110 60 160 60 160 90 C 160 100 150 110 135 110 Z" fill="#5C3A21" />
      <circle cx="155" cy="75" r="14" fill="#5C3A21" />
      {/* Eyes with gentle smile lines */}
      <ellipse cx="140" cy="95" rx="2.5" ry="3.5" fill="#1E293B" />
      <ellipse cx="154" cy="95" rx="2.5" ry="3.5" fill="#1E293B" />
      <path d="M 142 108 Q 148 114 154 108" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="134" cy="103" r="3.5" fill="#F43F5E" opacity="0.4" />
      <circle cx="158" cy="103" r="3.5" fill="#F43F5E" opacity="0.4" />

      {/* Gentle Arms cradling baby */}
      <path d="M 100 200 Q 130 250 200 240 Q 230 230 220 200" stroke="#FCD5CE" strokeWidth="20" strokeLinecap="round" fill="none" />

      {/* NEWBORN BABY SWADDLED IN SOFT MUSLIN */}
      {/* Swaddle blanket */}
      <ellipse cx="205" cy="210" rx="38" ry="24" transform="rotate(-20 205 210)" fill="#BAE6FD" />
      {/* Baby Head */}
      <circle cx="180" cy="195" r="16" fill="#FFE5D9" />
      <ellipse cx="178" cy="195" rx="1.5" ry="0.5" stroke="#78350F" strokeWidth="1.5" fill="none" /> {/* sleeping eye */}
      <circle cx="185" cy="199" r="2" fill="#F43F5E" opacity="0.5" />
      {/* Baby cap */}
      <path d="M 168 195 C 168 180 192 180 192 195 Z" fill="#FDE047" />

      {/* Heart beat vitality line graphic */}
      <path d="M 310 80 L 330 80 L 340 65 L 350 95 L 360 75 L 370 85 L 380 80 L 400 80" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Top Banner Tag */}
      <g transform="translate(20, 20)">
        <rect width="160" height="28" rx="8" fill="rgba(255,255,255,0.92)" />
        <circle cx="16" cy="14" r="6" fill="#0D9488" />
        <path d="M13 14 L15 16 L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="28" y="18" fill="#0F766E" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Enfermería Neonatal</text>
      </g>
    </svg>
  );
}

export function FamilyCareBannerHero() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Panoramic SVG warm gradient background depicting a loving modern home */}
      <svg className="w-full h-full object-cover" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroDarkScrim" x1="720" y1="0" x2="720" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E293B" stopOpacity="0.82" />
            <stop offset="0.5" stopColor="#0F172A" stopOpacity="0.75" />
            <stop offset="1" stopColor="#020617" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="warmSun" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" stopOpacity="0.15" />
            <stop offset="0.6" stopColor="#FB7185" stopOpacity="0.08" />
            <stop offset="1" stopColor="#0F172A" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ambient Warm Interior Room silhouette */}
        <rect width="1440" height="600" fill="#2E201B" />
        
        {/* Soft glowing architectural lights & living room tones */}
        <circle cx="200" cy="150" r="300" fill="#D97706" opacity="0.25" />
        <circle cx="1200" cy="200" r="350" fill="#EA580C" opacity="0.2" />
        <circle cx="720" cy="100" r="400" fill="#FBBF24" opacity="0.12" />

        {/* Soft domestic architectural contours */}
        <path d="M 0 350 Q 400 320 800 340 T 1440 330 L 1440 600 L 0 600 Z" fill="#1C1917" opacity="0.5" />
        <path d="M 100 200 L 220 200 L 220 450 L 100 450 Z" fill="#292524" opacity="0.3" />
        <path d="M 1250 180 L 1380 180 L 1380 460 L 1250 460 Z" fill="#292524" opacity="0.3" />

        {/* Color overlay */}
        <rect width="1440" height="600" fill="url(#warmSun)" />
        {/* Dark contrast scrim ensuring crystal-clear text readability */}
        <rect width="1440" height="600" fill="url(#heroDarkScrim)" />
      </svg>
    </div>
  );
}
