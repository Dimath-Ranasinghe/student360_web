import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

import { 
  BookOpen, 
  Bell, 
  MessageSquare, 
  Download,
  Github,
  Twitter,
  Linkedin,
  Mail,
  X,
  Phone,
  MapPin,
  Eye,
  AlertCircle,
  Lightbulb,
  Database,
  Instagram
} from 'lucide-react';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dimath Ranasinghe",
    role: "Frontend Developer",
    image: "/images/ddddd.jpg",
linkedin: "https://www.linkedin.com/in/dimath-ranasinghe-908ba1295/"
  },
  {
    id: 2,
    name: "Benul Fernando",
    role: "Frontend Developer",
    image: "/images/WhatsApp Image 2025-02-23 at 21.06.34_cceaa4fd.jpg",
    linkedin: "https://www.linkedin.com/in/benulfernando/"
  },
  {
    id: 3,
    name: "Dulaj Weerakoon",
    role: "Database Administrator",
    image: "/images/WhatsApp Image 2025-02-23 at 22.43.49_860001a2.jpg",
    linkedin: "https://www.linkedin.com/in/dulaj-weerakoon-b4a6b1320/"
  },
  {
    id: 4,
    name: "Rushith Abeykoon",
    role: "Backend Developer",
    image: "/images/WhatsApp Image 2025-02-23 at 22.01.24_107447ec.jpg",
    linkedin: "https://www.linkedin.com/in/rushith-sathnuka/"
  },
  {
    id: 5,
    name: "Yumira Chanul",
    role: "Backend Developer",
    image: "public/images/yumira.JPG",
    linkedin: "https://www.linkedin.com/in/yumira-chanul-4bb890320/"
  },
  {
    id: 6,
    name: "Tiyana Ludowyke",
    role: "Backend Developer",
    image: "/images/WhatsApp Image 2025-02-23 at 14.53.02_55648158.jpg",
    linkedin: "https://www.linkedin.com/in/tiyana-ludowyke/"
  }
];

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these placeholders with your own EmailJS credentials
    const serviceID = 'service_81gt019'; // Your service ID from EmailJS
    const templateID = 'template_bpcmygm'; // Your template ID from EmailJS
    const userID = '6CPDgjRbPviuMlxy0'; // Your user ID from EmailJS

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Message sent successfully', response);
        setFormData({ name: '', email: '', message: '' });
        setIsContactModalOpen(false);
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Student 360</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Students using mobile app"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <BookOpen className="w-24 h-24 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Revolutionizing Student Records Management
            </h1>
            <p className="text-xl text-gray-200">
              Student 360 is a mobile application designed to digitalize student record books, 
              providing easy access to records, notices, and feedback.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Vision, Problem, Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <Eye className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To revolutionize education by creating a seamless digital ecosystem that connects students, 
                    educators, and administrators. We envision a future where academic record management is 
                    effortless, transparent, and accessible to all stakeholders in the educational journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <AlertCircle className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-600">
                    Traditional student record management systems are often fragmented, paper-based, and prone 
                    to errors. This leads to inefficient processes, delayed access to important information, 
                    and communication gaps between educational institutions and students.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <Lightbulb className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-600">
                    Student 360 provides a comprehensive digital platform that centralizes all student records, 
                    enables real-time communication, and ensures secure access to academic information. Our 
                    mobile-first approach makes it convenient for all users to stay connected and informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Overview Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Product Overview
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              className="w-full h-[500px] rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg 
                hover:bg-red-700 transition-colors"
            >
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      </section> */}



      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Student Record Book System</h3>
              <p className="text-gray-600">
                Securely store and access student records digitally, ensuring data safety and easy retrieval.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Bell className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Notice Board</h3>
              <p className="text-gray-600">
                Stay updated with important announcements and notifications in real-time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Feedback System</h3>
              <p className="text-gray-600">
                Enable seamless communication between students and faculty members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <a href={member.linkedin} className="text-blue-600 hover:underline mt-2 block">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our dedicated team members are working tirelessly to revolutionize education through digital innovation.
          </p>
          
          {/* Team member grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">0787228399</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">student360is@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    IIT CITY Office<br />
                    435 Galle Rd<br/>
                    Colombo 03<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                  hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <img
                src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg"
                alt="Flutter"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flutter</h3>
              <p className="text-gray-600">Cross-platform mobile development framework</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <img
                src="https://nodejs.org/static/images/logo.svg"
                alt="Node.js"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p className="text-gray-600">Backend runtime environment</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Database className="w-24 h-24 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
              <p className="text-gray-600">NoSQL database for flexible data storage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold text-white">Student 360</span>
              </div>
              <p className="text-sm">
                Transforming education through digital innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            {/* <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div> */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Dimath-Ranasinghe/Student_360" className="hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/student___360?igsh=YWc5cHV5eTZkd2lv" className="hover:text-blue-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm">
              Copyright © 2025 Student 360. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full mx-4 relative animate-fade-in">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                  hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      

    </div>
  );
}
export default App;