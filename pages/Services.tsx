import React from 'react';
import { SERVICES, FAQS } from '../constants';
import { Check, ArrowRight, Layout, ShoppingCart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const getIcon = (name: string) => {
  switch (name) {
    case 'Layout': return <Layout size={32} />;
    case 'ShoppingCart': return <ShoppingCart size={32} />;
    case 'Settings': return <Settings size={32} />;
    default: return <Layout size={32} />;
  }
};

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-light">
      <div className="bg-primary py-20 mb-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive web solutions designed to scale with your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-6">
                  {getIcon(service.iconName)}
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
                  Get a Quote for {service.title} <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <img 
                  src={`https://picsum.photos/800/600?random=${40 + index}`} 
                  alt={service.title} 
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-slate-800">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform text-accent">▼</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;