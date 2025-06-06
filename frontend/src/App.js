import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to dark mode
      setIsDarkMode(true);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      id: 1,
      title: 'CloudFlow CRM',
      description: 'A comprehensive Customer Relationship Management system built with React, TypeScript, and Tailwind CSS that helps businesses manage their customer relationships, track sales pipelines, and analyze business metrics.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveDemo: 'https://cloud-flow-crm.netlify.app/',
      github: 'https://github.com/midlaj-muhammed/Cloud-Flow-CRM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      title: 'IdeaStruct',
      description: 'An AI-powered web platform that helps users transform their app ideas into detailed technical blueprints with recommended tech stacks and implementation plans.',
      category: 'nlp',
      technologies: ['Python', 'NLP', 'React', 'TensorFlow'],
      liveDemo: 'https://idea-struct.vercel.app/',
      github: 'https://github.com/midlaj-muhammed/IdeaStruct',
      image: 'https://images.unsplash.com/photo-1621711678457-a314cede97d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      title: 'LeafLens',
      description: 'AI-powered plant companion that identifies plants using Google Gemini AI. Simply upload a photo or describe a plant, and our app instantly identifies it.',
      category: 'cv',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Google Gemini AI', 'React'],
      liveDemo: 'https://leaf-lens-one.vercel.app/',
      github: 'https://github.com/midlaj-muhammed/LeafLens',
      image: 'https://images.pexels.com/photos/17484975/pexels-photo-17484975.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'CortexCrawler',
      description: 'AI-powered platform that transforms any website into structured data without coding. Features smart extraction, intelligent summaries, and enterprise-grade security.',
      category: 'dl',
      technologies: ['Python', 'Next.js', 'Machine Learning', 'BeautifulSoup'],
      liveDemo: 'https://cortex-crawler.vercel.app/',
      github: 'https://github.com/midlaj-muhammed/CortexCrawler',
      image: 'https://images.pexels.com/photos/17484901/pexels-photo-17484901.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'WriteGenuine',
      description: 'Comprehensive text analysis platform that helps users detect AI-generated content, check for plagiarism, and transform artificial text into natural human writing.',
      category: 'nlp',
      technologies: ['Python', 'NLP', 'React', 'TensorFlow'],
      liveDemo: '#',
      github: 'https://github.com/midlaj-muhammed/WriteGenuine',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 6,
      title: 'SentimentScope',
      description: 'Sentiment analysis tool that analyzes URLs and hashtags, providing real-time sentiment scores, trends, and visualizations with a modern, responsive UI.',
      category: 'nlp',
      technologies: ['Python', 'NLP', 'React', 'Data Visualization'],
      liveDemo: '#',
      github: 'https://github.com/midlaj-muhammed/SentimentScope',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 7,
      title: 'ShiftBox',
      description: 'Modern file sharing application built with React, TypeScript, and Supabase that allows users to securely upload, manage, and share files with customizable access controls.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Supabase', 'Node.js'],
      liveDemo: '#',
      github: 'https://github.com/midlaj-muhammed/ShiftBox',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 8,
      title: 'CalorAI',
      description: 'AI-powered nutrition and calorie tracking application using computer vision for food recognition and nutritional analysis. Features real-time food detection, calorie counting, and personalized meal recommendations.',
      category: 'cv',
      technologies: ['Python', 'PyTorch', 'Computer Vision', 'React Native', 'TensorFlow'],
      liveDemo: '#',
      github: 'https://github.com/midlaj-muhammed/CalorAI',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxmb29kJTIwaGVhbHRofGVufDB8fHx8MTcwOTIxNDA0NXww&ixlib=rb-4.1.0&q=85',
      inDevelopment: true
    }
  ];

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'TensorFlow', level: 85, category: 'Deep Learning' },
    { name: 'PyTorch', level: 80, category: 'Deep Learning' },
    { name: 'OpenCV', level: 85, category: 'Computer Vision' },
    { name: 'NLP', level: 75, category: 'Natural Language Processing' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Database' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'cv', label: 'Computer Vision' },
    { key: 'nlp', label: 'NLP' },
    { key: 'dl', label: 'Deep Learning' },
    { key: 'web', label: 'Web Development' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Muhammed Midlaj P
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzQ5MjE0MDQ1fDA&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Muhammed Midlaj P
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Machine Learning Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Specializing in Deep Learning, Computer Vision, and Natural Language Processing. 
            Passionate about building intelligent systems that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Junior ML Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Machine Learning developer with expertise in Deep Learning, Computer Vision, and Natural Language Processing. 
                My journey in AI began with a fascination for how machines can learn and understand complex patterns in data.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in building end-to-end ML solutions, from data preprocessing and model development to deployment and optimization. 
                My projects range from computer vision applications for agricultural solutions to intelligent web crawlers and CRM systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">Deep Learning</h4>
                  <p className="text-sm text-gray-300">Neural networks, CNNs, RNNs</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Computer Vision</h4>
                  <p className="text-sm text-gray-300">Image processing, object detection</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-cyan-400 font-semibold mb-2">NLP</h4>
                  <p className="text-sm text-gray-300">Text analysis, sentiment analysis</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-2">Full Stack</h4>
                  <p className="text-sm text-gray-300">React, Node.js, Python</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-center">Experience Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">5+ Machine Learning Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Computer Vision Applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">NLP & Text Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Full Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my machine learning and full-stack development projects, each demonstrating different aspects of AI and modern web technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  {project.inDevelopment && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      In Development
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.liveDemo !== '#' ? (
                      <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-center py-2 px-4 rounded-lg font-medium transition-all"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-600 text-center py-2 px-4 rounded-lg font-medium text-gray-400">
                        Coming Soon
                      </div>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-600 hover:border-blue-400 text-center py-2 px-4 rounded-lg font-medium transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative ML projects or discuss new opportunities. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:midlajvalappil@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      midlajvalappil@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+919744140313" className="text-white hover:text-blue-400 transition-colors">
                      +91 9744140313
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/midlaj-muhammed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      github.com/midlaj-muhammed
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm currently open to new opportunities and exciting projects. Whether you have a question about machine learning, 
                want to collaborate on a project, or just want to say hello, I'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Available For:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Machine Learning Consulting</li>
                    <li>• Full-stack Development</li>
                    <li>• Computer Vision Projects</li>
                    <li>• NLP Applications</li>
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="mailto:midlajvalappil@gmail.com"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-center py-3 px-6 rounded-lg font-semibold transition-all"
                  >
                    Send Email
                  </a>
                  <a 
                    href="tel:+919744140313"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 py-3 px-6 rounded-lg font-semibold transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Muhammed Midlaj P. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;