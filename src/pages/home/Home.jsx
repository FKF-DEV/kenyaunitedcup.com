import { Hero } from "./section";

function Home() {
  return (
    <main
      className="relative overflow-hidden min-h-screen"
      style={{
        background:
          "linear-gradient(-45deg, #0a0a0a 0%, #111111 40%, #064e3b 75%, #7f1d1d 100%)",
      }}
    >
      {/* Enhanced football pitch overlay with realistic grass texture */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        {/* Grass texture background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-green-800/5">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Football pitch markings - full width and height */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs></defs>
            {/* Pitch outline - full width with padding */}
            <rect x="1" y="1" width="98" height="98" rx="2" stroke="#ffffff" strokeWidth="0.5" fill="none" />
            
            {/* Center circle - perfectly circular */}
            <circle cx="50" cy="50" r="15" stroke="#ffffff" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" />
            <circle cx="50" cy="50" r="1.2" fill="#ffffff" vectorEffect="non-scaling-stroke" />
          
            {/* Center line - vertical line down the middle */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="#ffffff" strokeWidth="0.8" />
          
            {/* Penalty areas */}
            <rect x="5" y="25" width="20" height="50" stroke="#ffffff" strokeWidth="0.8" fill="none" />
            <rect x="75" y="25" width="20" height="50" stroke="#ffffff" strokeWidth="0.8" fill="none" />
          
            {/* 6-yard boxes */}
            <rect x="5" y="35" width="10" height="30" stroke="#ffffff" strokeWidth="0.8" fill="none" />
            <rect x="85" y="35" width="10" height="30" stroke="#ffffff" strokeWidth="0.8" fill="none" />
          
            {/* Penalty spots */}
            <circle cx="25" cy="50" r="1.2" fill="#ffffff" vectorEffect="non-scaled-stroke" />
            <circle cx="75" cy="50" r="1.2" fill="#ffffff" vectorEffect="non-scaled-stroke" />
          
            {/* Corner arcs - more visible */}
            <path d="M10,10 a 2,2 0 0 1 2,-2 h2 a 2,2 0 0 0 2,2 v2 a 2,2 0 0 1 -2,2 h-2 a 2,2 0 0 1 -2,-2 v-2" 
                  stroke="#ffffff" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M90,10 a 2,2 0 0 0 -2,-2 h-2 a 2,2 0 0 1 -2,2 v2 a 2,2 0 0 0 2,2 h2 a 2,2 0 0 0 2,-2 v-2" 
                  stroke="#ffffff" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M10,90 a 2,2 0 0 1 2,2 v2 a 2,2 0 0 0 2,-2 v-2 a 2,2 0 0 1 2,-2 h-2 a 2,2 0 0 0 -2,2" 
                  stroke="#ffffff" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M90,90 a 2,2 0 0 0 -2,-2 h-2 a 2,2 0 0 1 -2,2 v2 a 2,2 0 0 0 2,2 h2 a 2,2 0 0 0 2,-2 v-2" 
                  stroke="#ffffff" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        
        {/* Enhanced football with brighter and more prominent design */}
        <div className="absolute -top-40 -right-40 md:-top-56 md:-right-56 lg:-top-64 lg:-right-64 transform scale-110">
          <svg width="920" height="920" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
            <defs>
              <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
              </radialGradient>
              <linearGradient id="rg2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="40%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
              <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <clipPath id="clipTR">
                <rect x="100" y="0" width="100" height="100" />
              </clipPath>
            </defs>
            
            {/* Football base with stronger glow */}
            <circle cx="100" cy="100" r="95" stroke="#ffffff" strokeWidth="5" fill="url(#fade)" filter="drop-shadow(0 0 8px rgba(255,255,255,0.3))" />
            
            {/* Football pattern - enhanced with more contrast */}
            <path 
              d="M100 55 L128 72 L118 103 L82 103 L72 72 Z" 
              fill="#ffffff" 
              fillOpacity="0.2" 
              stroke="#ffffff" 
              strokeWidth="4"
              strokeOpacity="1"
              strokeLinejoin="round"
            />
            
            {/* Enhanced ball lines - bolder and more prominent */}
            <g strokeLinecap="round" strokeLinejoin="round">
              <path d="M100 55 L100 5" stroke="#ffffff" strokeOpacity="1" strokeWidth="3.5" />
              <path d="M128 72 L170 50" stroke="#ffffff" strokeOpacity="1" strokeWidth="3.5" />
              <path d="M118 103 L150 145" stroke="#ffffff" strokeOpacity="1" strokeWidth="3.5" />
              <path d="M82 103 L50 145" stroke="#ffffff" strokeOpacity="1" strokeWidth="3.5" />
              <path d="M72 72 L30 50" stroke="#ffffff" strokeOpacity="1" strokeWidth="3.5" />
            </g>

            {/* Inner colored arc with stronger effect */}
            <g clipPath="url(#clipTR)" filter="url(#blur2)">
              <circle cx="100" cy="100" r="80" stroke="url(#rg2)" strokeWidth="16" fill="none" />
            </g>
            
            {/* Ball center highlight */}
            <circle cx="100" cy="100" r="6" fill="#ffffff" fillOpacity="0.6" filter="blur(1px)" />
            
            {/* Ball shine effect */}
            <circle cx="120" cy="80" r="15" fill="#ffffff" fillOpacity="0.15" filter="blur(4px)" />
          </svg>
        </div>
      </div>
      <Hero />
    </main>
  );
}

export default Home;
