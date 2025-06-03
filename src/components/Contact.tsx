
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "moeezghauri786@gmail.com",
      href: "mailto:moeezghauri786@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/moeez-ghauri-17148b144",
      href: "https://linkedin.com/in/moeez-ghauri-17148b144"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can work together to bring your next project to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always interested in hearing about new opportunities, challenging projects, 
                and innovative ideas. Whether you're looking for a senior developer, team lead, 
                or technical consultant, I'd love to hear from you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With my extensive experience in full-stack development, DevOps, and team leadership, 
                I can help you build scalable, efficient, and user-friendly applications.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <contact.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-white">{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => window.open('mailto:moeezghauri786@gmail.com')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-slate-700 pt-8">
          <p className="text-gray-400">
            © 2024 Moeez Ghauri. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
