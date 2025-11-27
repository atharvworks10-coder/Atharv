import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Layout, Zap, Smartphone, DollarSign } from 'lucide-react';
import { TESTIMONIALS, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Abstract tech background using CSS gradients */}
             <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
             <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
             <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-accent text-sm font-medium mb-2">
              Best Freelancer Web Designer 2024
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Crafting Stunning Websites That <span className="text-accent">Drive Growth</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg">
              Professional, custom web development tailored to your business needs. 
              We transform ideas into digital reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors text-center">
                View Portfolio
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accentHover transition-colors flex items-center justify-center gap-2 group">
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="pt-8 flex gap-8 border-t border-slate-800">
              <div>
                <span className="block text-3xl font-bold text-white">150+</span>
                <span className="text-sm text-slate-500">Projects Done</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-slate-500">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">100%</span>
                <span className="text-sm text-slate-500">Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             <img 
               src="https://picsum.photos/600/600?random=1" 
               alt="Web Development Dashboard" 
               className="rounded-2xl shadow-2xl border border-slate-700 relative z-10 transform hover:-translate-y-2 transition-transform duration-500"
             />
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden lg:block">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Zap size={24} />
                   </div>
                   <div>
                      <div className="font-bold text-slate-800">Fast Performance</div>
                      <div className="text-xs text-slate-500">98/100 Google PageSpeed</div>
                   </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[98%]"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Businesses Trust Atharv Web Studio</h2>
            <p className="text-slate-600">We don't just build websites; we build digital assets that work for you 24/7.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: "Responsive Design", desc: "Optimized flawlessly for mobile, tablet, and desktop screens." },
              { icon: Zap, title: "SEO Friendly", desc: "Built with clean code structure to boost your search rankings." },
              { icon: Smartphone, title: "Fast Turnaround", desc: "Get your business online quickly without compromising quality." },
              { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. Clear quotes tailored to your specific needs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
                <span className="text-accent font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
                <h2 className="text-3xl font-bold text-primary mt-2">Services We Offer</h2>
             </div>
             <Link to="/services" className="hidden md:flex items-center gap-2 text-accent font-medium hover:underline">
               View All Services <ArrowRight size={16} />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {SERVICES.slice(0, 3).map((service) => (
                <div key={service.id} className="group relative bg-slate-50 rounded-2xl p-8 overflow-hidden hover:bg-primary transition-colors duration-300">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Layout size={120} />
                   </div>
                   <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-4 relative z-10">{service.title}</h3>
                   <p className="text-slate-600 group-hover:text-slate-300 mb-6 relative z-10">{service.description}</p>
                   <ul className="space-y-2 mb-8 relative z-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400">
                           <CheckCircle size={14} className="text-accent" /> {feature}
                        </li>
                      ))}
                   </ul>
                   <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold relative z-10 group-hover:text-white">
                      Learn More <ArrowRight size={16} />
                   </Link>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((testi) => (
              <div key={testi.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                 <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(testi.rating)].map((_, i) => <span key={i}>★</span>)}
                 </div>
                 <p className="text-lg text-slate-300 italic mb-6">"{testi.content}"</p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white">
                       {testi.name.charAt(0)}
                    </div>
                    <div>
                       <div className="font-bold">{testi.name}</div>
                       <div className="text-xs text-slate-500">{testi.role}</div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-600 text-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
               Let's collaborate to build a website that truly represents your brand. 
               Get a free quote today.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/contact" className="bg-white text-accent px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all">
                  Get Your Free Quote
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;