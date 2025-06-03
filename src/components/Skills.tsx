
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "Golang", "C#"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Next.js", "Vue.js", "AngularJS", "Angular", "HTML/CSS", "Figma"]
    },
    {
      title: "Backend Frameworks",
      skills: ["Laravel", "Django", "FastAPI", ".NET Core", "Node.js", "CodeIgniter"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "DynamoDB", "Elasticsearch", "Pinecone", "ChromaDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Jenkins", "GitLab", "Prometheus", "Grafana", "Netlify"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "JIRA", "Agile", "Microservices", "REST APIs", "CI/CD"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Langchain", "GPT Integration", "Gemini", "Claude", "Llama", "Vector Databases"]
    },
    {
      title: "Payment & Integration",
      skills: ["Stripe", "Square", "PayPal", "QuickBooks", "GSuite", "Dropbox"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-center"
                  >
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                <div className="text-gray-300">User Engagement Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
