'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Code, Briefcase, GraduationCap, Terminal, Rocket, Zap, Menu, X, Download, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Update scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              AS
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors hover:text-emerald-400 relative group ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-zinc-400'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 transform transition-transform origin-left ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 absolute w-full">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left text-sm transition-colors hover:text-emerald-400 py-2 ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-zinc-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1 hover:bg-emerald-500/20 transition-colors cursor-default">
                Software Engineer & Data Scientist
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent animate-fadeInUp">
              Affan Siddiqui
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Translating complex theoretical concepts into practical applications. Building great software with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={() => scrollToSection('contact')} className="bg-emerald-500 hover:bg-emerald-600 text-white hover:scale-105 transition-transform">
                Get In Touch
              </Button>
              <Button onClick={() => scrollToSection('projects')} variant="outline" className="border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 hover:scale-105 transition-all">
                View Projects
              </Button>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="mailto:maffan0154@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-emerald-400 transition-all animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    I'm a Software Engineer with a proven ability to translate complex theoretical concepts into practical applications.
                    Currently pursuing a Master's in Data Science at RMIT University while working as a Technical Dental Assistant,
                    where I manage enterprise software and optimize workflows.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    With experience in full-stack development, cloud infrastructure, and data engineering, I'm eager to contribute
                    to meaningful projects and be part of teams that value learning, collaboration, and building great software.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-300 group hover:text-emerald-400 transition-colors">
                    <MapPin className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Melbourne, Australia</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 group hover:text-emerald-400 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>maffan0154@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 group hover:text-emerald-400 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>0481349778</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 group hover:text-emerald-400 transition-colors">
                    <GraduationCap className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Master's in Data Science (RMIT)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Techlogix */}
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Code className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
                      <p className="text-emerald-400">Techlogix</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Karachi, Pakistan</p>
                      <p className="text-zinc-500 text-sm">Apr 2024 – Jul 2024</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Developed scalable RESTful APIs using Python and Node.js with JWT authentication</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Built backend services via REST and GraphQL, using React Query for data fetching</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Managed cloud infrastructure using Azure ARM templates and Terraform</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Built scalable frontend features using React.js and Next.js with Redux Toolkit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* BenchMatrix */}
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
                      <p className="text-emerald-400">BenchMatrix Pvt. Ltd.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Karachi, Pakistan</p>
                      <p className="text-zinc-500 text-sm">Feb 2023 – Apr 2024</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Developed scalable backend microservices using Java and Python for financial apps</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Integrated backend services with responsive ReactJS frontend</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Deployed containerized applications using Docker and Kubernetes on Linux servers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Designed SQL scenarios for Anti-Money Laundering (AML) systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Developed ETL pipelines for large-scale banking datasets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Pacific Smiles Dental */}
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Technical Dental Assistant</h3>
                      <p className="text-emerald-400">Pacific Smiles Dental</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Melbourne, Australia</p>
                      <p className="text-zinc-500 text-sm">Oct 2024 – Present</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Managed patient data and performed CRUD operations using D4W software</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>Gained hands-on experience with enterprise software and workflow optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-zinc-800 p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-400" />
                  Languages & Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java Spring Boot', 'C#', 'SQL', 'Flask', 'FastAPI', '.NET', 'Node.js', 'Redis'].map((skill) => (
                    <Badge key={skill} className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Tailwind', 'Material UI', 'Ant Design', 'Framer'].map((skill) => (
                    <Badge key={skill} className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS', 'Git', 'Postman', 'Swagger', 'Jira'].map((skill) => (
                    <Badge key={skill} className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <Code className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">EyeWear.pk - Final Year Project</h3>
                  <p className="text-zinc-300 mb-4 leading-relaxed">
                    Built a full-stack E-Commerce website for eyewear using the MERN stack, integrating a NeuralNetwork-based
                    chatbot (using PyTorch and Flask). Incorporated a ML model using TensorFlow for eye disease classification
                    and a 3D virtual try-on feature to enhance shopping experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Flask', 'PyTorch', 'NLP', 'Deep Learning', 'VR', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'TensorFlow'].map((tech) => (
                      <Badge key={tech} className="bg-zinc-800 text-zinc-300 border-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Master of Science Data Science</h3>
                      <p className="text-emerald-400">RMIT University</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Melbourne, Australia</p>
                      <p className="text-zinc-500 text-sm">Jul 2024 – Present</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      CGPA: 3.5/4.0
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                      Dean's List (2x)
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Bachelor's of Science Computer Science</h3>
                      <p className="text-emerald-400">FAST NUCES</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Karachi, Pakistan</p>
                      <p className="text-zinc-500 text-sm">Aug 2019 – Jul 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      CGPA: 3.6/4.0
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                      Cum Laude
                    </Badge>
                    <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                      Dean's List (4x)
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-zinc-300 mb-8 text-lg">
              I'm currently looking for new opportunities and meaningful projects. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <a href="mailto:maffan0154@gmail.com">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-zinc-500">
            © 2025 Affan Siddiqui. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
