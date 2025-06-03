
import { ExternalLink, Calendar, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Innvo8Agent",
      period: "04/2024 - 07/2024",
      company: "Freelance",
      description: "Real estate listings platform with innovative AI applications",
      technologies: ["AI Integration", "Stripe", "Square", "Gemini", "GPT", "Llama", "Claude"],
      achievements: [
        "Setup Payment Gateways and User subscription using Stripe and Square",
        "Setup communication with real estate listing and built an AI model on top of it",
        "Fixed Existing Bugs and refined architecture for cost optimization",
        "Setup Multi-AI Model usage such as Gemini, GPT, Llama and Claude"
      ]
    },
    {
      title: "Punjab Aviation",
      period: "02/2024 - 04/2024",
      company: "Freelance",
      description: "Flight booking and planning management system",
      technologies: ["Laravel", "React", "Flight APIs"],
      achievements: [
        "Setup Project with Laravel Backend and React Frontend",
        "Setup Booking, Flight planning and other Related modules",
        "Coordinated with front end team for effective software development and API Creation"
      ]
    },
    {
      title: "SecureChat",
      period: "07/2023 - 01/2024",
      company: "Freelance",
      description: "Privacy-focused communication platform with AI capabilities",
      technologies: ["Python", "Django", "Langchain", "Pinecone", "ChromaDB", "GSuite", "Dropbox"],
      achievements: [
        "Setup LLM based chatbot using Langchain with Python",
        "Setup Vector Database (Pinecone, ChromaDB) for securely storing user's data",
        "Integrated With GSuite and Dropbox for document import",
        "Full Stack Application Development using Django"
      ]
    },
    {
      title: "Taxbox",
      period: "05/2023 - 08/2023",
      company: "Freelance",
      description: "Tax articles and management platform",
      technologies: [".NET Core", "Next.js", "Elasticsearch"],
      achievements: [
        "Application Built using Dot Net Core and NextJs",
        "Setup search using elastic search for faster searching of tax articles",
        "Setup Blog creation and management for adding and managing tax articles",
        "Integrated Multiple Softwares for effective usage"
      ]
    },
    {
      title: "Rize",
      period: "06/2023 - 07/2023",
      company: "Freelance",
      description: "NFT Marketplace facilitating user transactions",
      technologies: ["Next.js", "Figma", "Blockchain"],
      achievements: [
        "Converted Figma design files to functional components in a Next.js application",
        "Integrated Next.js framework into the development of an NFT Marketplace with features such as user authentication",
        "Implemented server-side rendering in Next.js for enhanced security"
      ]
    },
    {
      title: "Resourceinn (HRMS)",
      period: "07/2019 - Present",
      company: "Geekinn Pvt. Ltd",
      description: "HRMS application focusing on enhancing employee management",
      technologies: ["Laravel", "AngularJS", "Micro-Services"],
      achievements: [
        "Resourceinn is an HRMS application focusing on enhancing employee management",
        "Built using Laravel backend with AngularJS frontend",
        "Implemented using Micro-Services architecture"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical implementations across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase size={14} />
                    <span>{project.company}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="space-y-2">
                  {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-xs leading-relaxed">{achievement}</p>
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

export default Projects;
