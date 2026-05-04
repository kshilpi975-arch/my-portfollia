import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Leone 1947',
      description: 'Created promotional images and branding visuals maintaining brand identity',
      image: '🏍️',
      tags: ['Branding', 'Promotional', 'Visual Design'],
      color: 'blue',
      features: ['Brand Identity', 'Campaign Visuals', 'Product Photography']
    },
    {
      title: 'Zivame',
      description: 'Designed social media creatives and campaign visuals to boost engagement',
      image: '👗',
      tags: ['Social Media', 'Campaign Design', 'Creative Strategy'],
      color: 'purple',
      features: ['Social Media Design', 'Campaign Assets', 'Engagement Optimization']
    },
    {
      title: 'AI Content Generator',
      description: 'Developed automated content creation system using Generative AI for marketing campaigns',
      image: '🤖',
      tags: ['Generative AI', 'Automation', 'Content Strategy'],
      color: 'blue',
      features: ['AI Integration', 'Content Automation', 'Campaign Optimization']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Created comprehensive Excel dashboards for media performance tracking and reporting',
      image: '📊',
      tags: ['Excel', 'Data Analysis', 'Reporting'],
      color: 'purple',
      features: ['Data Visualization', 'Performance Metrics', 'Automated Reports']
    },
    {
      title: 'Portfolio Repository',
      description: 'Developed and maintained complete portfolio website with GitHub version control and CI/CD pipeline',
      image: '🔧',
      tags: ['GitHub', 'Git', 'Version Control', 'CI/CD'],
      color: 'blue',
      features: ['Repository Management', 'Version Control', 'Code Documentation', 'Deployment Automation']
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'from-purple-600 to-purple-800',
        light: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-300'
      },
      purple: {
        bg: 'from-purple-600 to-purple-800',
        light: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto rounded-full shadow-3d"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Showcasing my best work in brand design and creative campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-3d-lg overflow-hidden card-3d border border-purple-100 hover:rotateY-10 hover:translateZ-20 transform-gpu transition-all duration-500">
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${colors.bg} relative overflow-hidden transform-3d`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/20 to-purple-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl float-3d">{project.image}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-magenta-500/80 backdrop-blur-sm text-white text-sm rounded-full shadow-3d card-3d hover:scale-110">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${colors.text} mb-3 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-purple-700 to-magenta-600 bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <svg className={`w-4 h-4 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <button className={`w-full py-3 ${colors.light} ${colors.text} rounded-lg font-semibold hover:shadow-md transition-all duration-300 border ${colors.border} hover:border-opacity-50`}>
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200 shadow-3d-lg card-3d hover:rotateX-5">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new creative challenges and help brands tell their story through compelling visuals.
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-magenta-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-magenta-700 shadow-3d-lg card-3d hover:rotateY-10 hover:scale-110 transform transition-all duration-500"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
