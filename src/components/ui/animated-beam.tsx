import React from 'react';

export const AnimatedBeam = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated beam rings radiating from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[300px] h-[300px] border-2 border-emerald-500/20 rounded-full animate-ping" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute w-[400px] h-[400px] border-2 border-emerald-500/15 rounded-full animate-ping" 
             style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute w-[500px] h-[500px] border-2 border-emerald-500/10 rounded-full animate-ping" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Central glow */}
        <div className="absolute w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
};
