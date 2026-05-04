import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Image Creation', icon: '🎨', level: 90, color: 'blue' },
    { name: 'Canva', icon: '🖼️', level: 85, color: 'purple' },
    { name: 'Adobe Photoshop', icon: '🎯', level: 80, color: 'pink' },
    { name: 'Social Media Design', icon: '📱', level: 88, color: 'indigo' },
    { name: 'Branding', icon: '🏷️', level: 85, color: 'orange' },
    { name: 'GitHub/Git', icon: '🐙', level: 75, color: 'blue' },
    { name: 'Generative AI', icon: '🤖', level: 82, color: 'purple' },
    { name: 'Google Drive', icon: '☁️', level: 95, color: 'pink' },
    { name: 'Excel', icon: '📊', level: 88, color: 'indigo' },
    { name: 'PowerPoint', icon: '📽️', level: 92, color: 'orange' },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-emerald-500 to-emerald-600',
      purple: 'from-emerald-500 to-emerald-600',
      pink: 'from-emerald-500 to-emerald-600',
      indigo: 'from-emerald-500 to-emerald-600',
      orange: 'from-emerald-500 to-emerald-600',
    };
    return colorMap[color] || 'from-emerald-500 to-emerald-600';
  };

  const getBgColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-emerald-50',
      purple: 'bg-emerald-50',
      pink: 'bg-emerald-50',
      indigo: 'bg-emerald-50',
      orange: 'bg-emerald-50',
    };
    return colorMap[color] || 'bg-emerald-50';
  };

  const getTextColorClasses = (color) => {
    const colorMap = {
      blue: 'text-emerald-700',
      purple: 'text-emerald-700',
      pink: 'text-emerald-700',
      indigo: 'text-emerald-700',
      orange: 'text-emerald-700',
    };
    return colorMap[color] || 'text-emerald-700';
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto rounded-full shadow-3d"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Expertise in creating compelling visual content and brand experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-6 shadow-3d-lg card-3d cursor-pointer hover:rotateY-15 hover:translateZ-30 float-3d"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 ${getBgColorClasses(skill.color)} rounded-xl flex items-center justify-center text-2xl mr-4 shadow-3d float-3d`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${getTextColorClasses(skill.color)}`}>
                    {skill.name}
                  </h3>
                  <div className="flex items-center mt-2">
                    <div className="flex-1 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full h-3 mr-3 shadow-3d">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(skill.color)} transition-all duration-1000 ease-out shadow-3d`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-bold ${getTextColorClasses(skill.color)} bg-gradient-to-r from-yellow-400 to-yellow-500 px-2 py-1 rounded-full shadow-3d`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {[...Array(Math.ceil(skill.level / 20))].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${getBgColorClasses(skill.color)} ${getTextColorClasses(skill.color)}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Content Strategy', 'Visual Storytelling', 'Campaign Planning', 'Brand Guidelines', 'Creative Direction', 'Market Research', 'Version Control', 'AI Integration', 'Data Analysis', 'Document Management', 'Presentation Design'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white border border-emerald-200 text-emerald-700 rounded-full text-sm font-medium hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300 hover:shadow-3d card-3d hover:rotateX-5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
