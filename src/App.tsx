import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Smartphone, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="NamibNest Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-semibold text-xl text-amber-900">NamibNest</h1>
              <p className="text-xs tracking-wider text-amber-700">SIMPLY NAMIBIAN</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#solutions" className="hover:text-amber-700 transition-colors">Solutions</a>
            <a href="#features" className="hover:text-amber-700 transition-colors">Features</a>
            <a href="#benefits" className="hover:text-amber-700 transition-colors">Benefits</a>
            <a href="#team" className="hover:text-amber-700 transition-colors">Team</a>
          </div>
          <a 
            href="#contact" 
            className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Namibian Desert Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bridging Namibian Hospitality with Modern Technology
            </h1>
            <p className="text-xl mb-8 text-stone-100">
              Empowering tourism businesses with intuitive booking systems and customer support solutions designed specifically for the Namibian context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-amber-900 hover:bg-stone-100 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#solutions" 
                className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Challenges Facing Namibian Hospitality</h2>
            <p className="text-lg text-stone-600 mb-8">
              Many tourism businesses in Namibia struggle with outdated booking systems, inefficient customer support processes, and limited technological infrastructure. This creates barriers to growth and competitiveness in the global market.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-stone-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="font-semibold mb-2">Manual Booking Processes</h3>
                <p className="text-stone-600 text-sm">Reliance on manual systems leads to booking errors and lost opportunities.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="font-semibold mb-2">Fragmented Communication</h3>
                <p className="text-stone-600 text-sm">Disconnected systems create communication gaps with guests and partners.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="font-semibold mb-2">Limited Analytics</h3>
                <p className="text-stone-600 text-sm">Lack of data insights prevents strategic business decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solutions" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Technology and Nature" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-stone-600 mb-6">
                NamibNest has developed a comprehensive technology ecosystem that addresses the unique challenges of Namibian tourism businesses while preserving the authentic charm of local hospitality.
              </p>
              <p className="text-stone-600 mb-8">
                Our solutions are built with an understanding of local infrastructure limitations, cultural nuances, and the specific needs of businesses operating in Namibia's tourism sector.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Locally Developed:</span> Created by Namibians who understand the local context</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Offline Capabilities:</span> Functions even with limited internet connectivity</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
                  <p><span className="font-medium">Integrated Systems:</span> All tools work together seamlessly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Key Features</h2>
            <p className="text-lg text-stone-600">
              Comprehensive solutions designed specifically for Namibian tourism and hospitality businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-amber-800" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Booking System</h3>
              <p className="text-stone-600">
                Intuitive reservation management designed for lodges, hotels, and tour operators with flexible payment options.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-amber-800" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Customer Support</h3>
              <p className="text-stone-600">
                Streamlined communication tools that work even with limited connectivity to keep guests informed.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-7 w-7 text-amber-800" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Mobile Solutions</h3>
              <p className="text-stone-600">
                Mobile-friendly interfaces for both business owners and customers, accessible anywhere.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7 text-amber-800" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Analytics Dashboard</h3>
              <p className="text-stone-600">
                Insightful data visualization to help businesses make informed decisions and optimize operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits for Your Business</h2>
            <p className="text-lg text-amber-100">
              Our solutions deliver tangible improvements to your operations and customer experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Increased Bookings</h3>
              <p className="text-amber-100 mb-4">
                Streamlined booking process leads to 30% more confirmed reservations on average.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Operational Efficiency</h3>
              <p className="text-amber-100 mb-4">
                Reduce administrative work by up to 40% through automation and integrated systems.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Enhanced Guest Experience</h3>
              <p className="text-amber-100 mb-4">
                Improved communication and personalization leads to higher satisfaction and reviews.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Data-Driven Decisions</h3>
              <p className="text-amber-100 mb-4">
                Gain valuable insights into your business performance and customer preferences.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Local Support</h3>
              <p className="text-amber-100 mb-4">
                Access to Namibian-based technical support who understand your business context.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="bg-amber-900/30 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Competitive Edge</h3>
              <p className="text-amber-100 mb-4">
                Stand out in the market with modern technology that enhances your authentic offerings.
              </p>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-stone-600">
              Meet the visionaries behind NamibNest who combine local expertise with global tech standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="/gideon.jpg" 
                  alt="Gideon Naftali" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl">Gideon Naftali</h3>
              <p className="text-amber-800 mb-2">Chief Executive Officer</p>
              <p className="text-stone-600 text-sm px-4">
                With over 15 years in Namibian tourism, Gideon brings deep industry knowledge and visionary leadership.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="/charles.jpg" 
                  alt="Charles Titus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl">Charles Titus</h3>
              <p className="text-amber-800 mb-2">CTO & Founder</p>
              <p className="text-stone-600 text-sm px-4">
                A tech innovator with global experience, Charles returned to Namibia to revolutionize local hospitality technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="/even.jpg" 
                  alt="Even Hashikutuva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl">Even Hashikutuva</h3>
              <p className="text-amber-800 mb-2">Chief Marketing Officer</p>
              <p className="text-stone-600 text-sm px-4">
                Even combines marketing expertise with a passion for showcasing Namibian businesses to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg text-amber-100 mb-6">
                  Schedule a demo to see how NamibNest can help your hospitality business thrive with technology that's Simply Namibian.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <p>+264 61 123 4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <p>info@namibnest.com</p>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3" />
                    <a href="https://linkedin.com/namibnest-ai" className="underline hover:text-amber-200 transition-colors">
                      linkedin.com/namibnest-ai
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-stone-800 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-stone-600 mb-1">
                      Business Name
                    </label>
                    <input 
                      type="text" 
                      id="business" 
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Namibia Safari Lodge"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Tell us about your business needs..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Schedule a Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img 
                src="/logo.png" 
                alt="NamibNest Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h1 className="font-semibold text-lg text-white">NamibNest</h1>
                <p className="text-xs tracking-wider text-amber-600">SIMPLY NAMIBIAN</p>
              </div>
            </div>
            
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} NamibNest. All rights reserved.
              </p>
              <p className="text-xs mt-1">
                Revolutionizing Namibian hospitality with technology.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/namibnest-ai" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@namibnest.com" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+26461234567" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;