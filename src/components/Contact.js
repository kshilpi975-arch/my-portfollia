import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'shilpi.jha@example.com',
      href: 'mailto:shilpi.jha@example.com',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/shilpi-jha',
      href: 'https://linkedin.com/in/shilpi-jha',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/kshilpi975-arch',
      href: 'https://github.com/kshilpi975-arch',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Bangalore, India',
      href: null,
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-gray-100',
        text: 'text-gray-700',
        hover: 'hover:bg-orange-100',
        border: 'border-orange-300'
      },
      purple: {
        bg: 'bg-gray-100',
        text: 'text-gray-700',
        hover: 'hover:bg-orange-100',
        border: 'border-orange-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden perspective-1000">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      {/* 3D Animated elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-3d animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-3d animation-delay-4000"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 float-3d"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full shadow-3d"></div>
          <p className="text-white/90 mt-6 max-w-2xl mx-auto text-lg">
            Let's collaborate on your next creative project or discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const colors = getColorClasses(info.color);
            return (
              <div
                key={info.label}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-3d-lg card-3d hover:rotateY-5 float-3d"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${colors.bg.replace('bg-', 'bg-white/20 backdrop-blur-')} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 text-center">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-white/90 text-center block hover:text-white transition-colors duration-300"
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white/90 text-center">{info.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-3d-lg card-3d hover:rotateX-5 float-3d">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 shadow-3d-lg card-3d hover:rotateY-10 hover:scale-110 transform transition-all duration-500"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! I will get back to you soon.');
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 mb-4">
              © 2024 Shilpi Jha. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
