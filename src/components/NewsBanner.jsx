import { Link } from "react-router-dom";
// Premium Football Icon with Advanced 3D Effects
const FootballIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 transition-transform hover:scale-110 duration-300"
    style={{
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))',
      transformOrigin: 'center'
    }}
  >
    <defs>
      {/* Advanced gradient with multiple color stops */}
      <radialGradient id="ballGradient" cx="45%" cy="45%" r="65%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#3a3a3a" />
        <stop offset="40%" stopColor="#1e1e1e" />
        <stop offset="70%" stopColor="#0a0a0a" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
      
      {/* Shine gradient */}
      <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      
      {/* Panel highlights */}
      <linearGradient id="panelHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
      </linearGradient>
      
      {/* Shadow filter */}
      <filter id="ballShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
        <feOffset in="blur" dx="0" dy="2" result="offsetBlur" />
        <feComponentTransfer in="offsetBlur" result="shadow">
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Main ball with enhanced gradient */}
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      fill="url(#ballGradient)" 
      stroke="#555" 
      strokeWidth="0.5"
      filter="url(#ballShadow)"
      style={{
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
        transformBox: 'fill-box'
      }}
    />
    
    {/* Detailed panel pattern */}
    <g stroke="#ffffff" strokeWidth="0.4" strokeLinejoin="round" strokeLinecap="round">
      {/* Center pentagon */}
      <path 
        d="M12 6l2.5 5h-5L12 6z" 
        fill="none"
        style={{
          strokeDasharray: '0.5,0.5',
          strokeOpacity: '0.7'
        }}
      />
      
      {/* Side panels */}
      <path 
        d="M6 12l5-2.5v5L6 12zm12 0l-5 2.5v-5l5 2.5zM12 18l-2.5-5h5L12 18z" 
        fill="none"
        style={{
          strokeDasharray: '0.3,0.3',
          strokeOpacity: '0.6'
        }}
      />
      
      {/* Connecting lines */}
      <path 
        d="M12 6l-2.5 5 2.5 2.5 2.5-2.5L12 6z" 
        fill="none"
        style={{
          strokeOpacity: '0.8'
        }}
      />
    </g>
    
    {/* Panel highlights */}
    <path 
      d="M12 6l2.5 5h-5L12 6z" 
      fill="url(#panelHighlight)" 
      fillOpacity="0.15"
      style={{
        mixBlendMode: 'screen'
      }}
    />
    
    {/* Shine effect */}
    <circle 
      cx="8" 
      cy="8" 
      r="2.5" 
      fill="url(#shine)"
      style={{
        mixBlendMode: 'overlay',
        filter: 'blur(1px)'
      }}
    />
    
    {/* Center highlight */}
    <circle 
      cx="12" 
      cy="12" 
      r="1" 
      fill="rgba(255,255,255,0.4)"
      style={{
        filter: 'blur(0.5px)'
      }}
    />
    
    {/* Subtle texture */}
    <circle 
      cx="12" 
      cy="12" 
      r="9.5" 
      fill="none"
      stroke="rgba(255,255,255,0.05)" 
      strokeWidth="0.5"
      strokeDasharray="0.5,0.5"
    />
  </svg>
);
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsBanner = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/resources/`);
        const fetchedResources = response.data.results;
        if (fetchedResources && fetchedResources.length > 0) {
          const sortedResources = fetchedResources
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            )
            .slice(0, 5);
          setResources(sortedResources);
        } else {
          console.error("No resources available");
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <p>Loading resources...</p>;
  }

  return (
    <div className="text-white bg-black py-2 px-4 flex flex-row items-center gap-2">
      <FootballIcon />
      <Marquee pauseOnHover autoFill>
        <div className="flex items-center gap-8">
          {/* Countdown message */}
          <div className="flex items-center text-sm font-medium text-white/90 whitespace-nowrap">
            Countdown to Kenya United Cup 2025 - November 7th, 2025 - The Ultimate Grassroot Football Showdown!
            <div className="h-4 w-px bg-white/30 mx-4"></div>
          </div>
          
          {/* Existing resources */}
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center text-sm font-normal"
            >
              <p className="whitespace-nowrap">{resource.title}</p>
              <Link
                to={resource.document}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline font-medium px-2 transition-colors"
              >
                View
              </Link>
              <div className="h-4 w-px bg-white/30 mx-2"></div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default NewsBanner;
