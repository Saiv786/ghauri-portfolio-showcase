
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-blue-400">Moeez</span> Ghauri
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Senior Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            6+ years of experience crafting innovative software solutions with expertise in 
            full-stack development, DevOps practices, and team leadership. Passionate about 
            leveraging emerging technologies to create scalable architectures.
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="mailto:moeezghauri786@gmail.com"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/moeez-ghauri-17148b144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
