import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 relative overflow-hidden perspective-1000">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      {/* 3D Animated elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-3d animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animation-delay-4000"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 float-3d"></div>
      
      {/* 3D Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-transparent via-blue-500/20 to-transparent transform-3d" 
             style={{
               backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               transform: 'rotateX(45deg) translateZ(-100px)'
             }}>
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto transform-3d">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent transform-gpu hover:scale-110 transition-transform duration-500">
            Shilpi Jha
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 opacity-90 animate-fade-in animation-delay-200 text-cyan-200">
            Media Analyst at Tagfact Services Pvt Ltd
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-80 animate-fade-in animation-delay-400 text-blue-100">
            Creative Media Analyst specializing in image creation and brand storytelling
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600 perspective-1000">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 hover:rotateY-10 transition-all duration-500 shadow-3d-lg card-3d"
            >
              About Me
            </button>
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-300 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transform hover:scale-105 hover:rotateX(-10) transition-all duration-500 shadow-3d card-3d"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
