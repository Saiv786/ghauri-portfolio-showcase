
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (Currently Senior Lead)",
      company: "Geekinn Pvt. Ltd",
      location: "Lahore, Pakistan",
      period: "07/2019 - Present",
      type: "Full-time",
      description: "A software development company focusing on innovative technology solutions",
      achievements: [
        "Developed and maintained software applications using both monolith and micro-service architecture",
        "Implemented various design patterns, primarily utilizing the repository pattern on Laravel framework",
        "Proficient in a wide range of frameworks and languages including Go, React, Vue, Python, Laravel, AngularJS, and Angular",
        "Played a key role in setting up DevOps practices, including configuring servers and implementing CI/CD pipelines",
        "Directed a team of 15 developers in the creation and deployment of a cloud-based application, which enhanced user engagement by 35% and reduced server downtime by 20%",
        "Conducted comprehensive code reviews for a team of 15 developers, improving code quality by 30%"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Systems Limited Pvt. Ltd",
      location: "Lahore, Pakistan",
      period: "07/2017 - 10/2017",
      type: "Internship",
      description: "A leading provider of technology solutions and services",
      achievements: [
        "Completed a 4-month internship in software development, focusing on web development, Database management and REST APIs",
        "Acquired hands-on experience with the .NET Framework during the internship",
        "Successfully contributed to the creation of an application named e-scout, designed for tracking employee work",
        "Demonstrated proficiency in coding, problem-solving, and collaborating with team members during the project",
        "Actively participated in the software development life cycle, from design to testing and deployment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional journey showcasing growth from intern to senior leadership roles
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300 border border-slate-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                <div className="grid gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
