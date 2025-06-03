
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in multiple programming languages and frameworks including Python, Laravel, React, and Go"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully led teams of 15+ developers, implementing Agile methodologies and best practices"
    },
    {
      icon: Zap,
      title: "DevOps & Architecture",
      description: "Expert in setting up CI/CD pipelines, microservices architecture, and cloud-based solutions"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Delivered applications that enhanced user engagement by 35% and reduced server downtime by 20%"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Dynamic Software Developer with 6 years of experience, specializing in the design 
              and implementation of innovative software solutions that drive user engagement and 
              operational efficiency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans multiple programming languages and frameworks, alongside solid 
              DevOps practices to streamline development processes. I have a proven ability to 
              lead diverse teams in agile environments, delivering high-quality applications while 
              enhancing code quality and performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about leveraging emerging technologies to create scalable software 
              architectures and improve user experiences. Committed to continuous learning and 
              adapting to industry trends to maintain a competitive edge.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-medium">Master of Science in Computer Science</h4>
                  <p className="text-gray-300">Lahore University of Management Sciences</p>
                  <p className="text-gray-400 text-sm">2022 - 2024</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-medium">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-300">Comsats University Islamabad</p>
                  <p className="text-gray-400 text-sm">2015 - 2019</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <p className="text-gray-300">📍 Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <highlight.icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
