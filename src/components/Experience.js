import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Media Analyst',
      company: 'Tagfact Services Pvt Ltd',
      location: 'Bangalore, India',
      duration: 'Present',
      type: 'Full-time',
      description: 'Leading creative media analysis and visual content strategy for diverse client portfolios.',
      achievements: [
        'Created visual content for campaigns',
        'Collaborated with teams',
        'Delivered creative assets on time',
        'Implemented version control with GitHub/Git for project management',
        'Utilized Generative AI for content optimization',
        'Managed project documentation in Google Drive',
        'Created data-driven reports with Excel',
        'Designed client presentations with PowerPoint'
      ],
      skills: ['Media Analysis', 'Content Creation', 'Team Collaboration', 'Brand Strategy', 'Version Control', 'AI Integration', 'Data Analysis', 'Document Management', 'Presentation Design'],
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'from-teal-600 to-cyan-700',
        light: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full shadow-3d"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            My professional journey in media analysis and creative design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div
                key={exp.title}
                className="bg-white rounded-2xl shadow-3d-lg overflow-hidden card-3d hover:rotateY-10 hover:translateZ-20 transform-gpu transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Experience Header */}
                <div className={`h-32 bg-gradient-to-r ${colors.bg} relative transform-3d`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-turquoise-500/20 to-cyan-500/20"></div>
                  <div className="absolute inset-0 flex items-center px-8">
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-turquoise-200 bg-clip-text text-transparent">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                          </svg>
                          {exp.company}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Content */}
                <div className="p-8">
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className={`w-5 h-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 ${colors.light} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Additional Experience Timeline */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200 shadow-3d-lg card-3d hover:rotateX-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Open to New Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Always interested in challenging projects and creative collaborations
              </p>
              <div className="flex justify-center gap-4">
                <span className="px-4 py-2 bg-white text-teal-700 rounded-full text-sm font-medium border border-teal-300 shadow-3d card-3d hover:rotateY-5">
                  Remote Available
                </span>
                <span className="px-4 py-2 bg-white text-cyan-700 rounded-full text-sm font-medium border border-cyan-300 shadow-3d card-3d hover:rotateY-5">
                  Freelance Projects
                </span>
                <span className="px-4 py-2 bg-white text-turquoise-700 rounded-full text-sm font-medium border border-turquoise-300 shadow-3d card-3d hover:rotateY-5">
                  Full-time Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
