import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full shadow-3d"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center perspective-1000">
          <div className="order-2 md:order-1">
            <div className="relative transform-3d">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-3d-lg card-3d hover:rotateY-15">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-3d float-3d">
                    <span className="text-white text-4xl font-bold">SJ</span>
                  </div>
                  <p className="text-gray-700 font-medium">Professional Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-30 blur-xl float-3d animation-delay-2000"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full opacity-30 blur-xl float-3d"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Media Analyst & Creative Professional
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a Media Analyst with experience in creating engaging visual content and brand-focused imagery. I work on delivering high-quality creatives aligned with marketing strategies. Proficient in modern tools including GitHub/Git for version control, Generative AI for content creation, Google Drive for collaboration, Excel for data analysis, and PowerPoint for professional presentations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 card-3d hover:rotateX-5">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-3d">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creative Strategy</h4>
                  <p className="text-gray-600 text-sm">Developing innovative visual solutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 card-3d hover:rotateX-5">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-3d">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Brand Design</h4>
                  <p className="text-gray-600 text-sm">Creating compelling brand identities</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 card-3d hover:rotateX-5">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-3d">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Campaign Execution</h4>
                  <p className="text-gray-600 text-sm">Delivering results-driven campaigns</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-3d card-3d hover:rotateY-10">
                Detail Oriented
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium shadow-3d card-3d hover:rotateY-10">
                Team Player
              </span>
              <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium shadow-3d card-3d hover:rotateY-10">
                Creative Thinker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
