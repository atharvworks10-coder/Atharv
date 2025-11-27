import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Partial<typeof formData> = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
        tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Ready to start your project? Fill out the form below or contact us directly. 
            We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info Sidebar */}
          <div className="bg-primary text-white p-10 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                    <div className="font-medium hover:text-accent transition-colors cursor-pointer">+91 98765 43210</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="font-medium hover:text-accent transition-colors cursor-pointer">contact@atharvworks10.com</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Location</div>
                    <div className="font-medium">Delhi, India</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Business Hours</div>
                    <div className="font-medium">Mon - Fri: 10 AM – 7 PM IST</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Simulated Map Preview */}
            <div className="mt-12 bg-slate-800 h-48 rounded-xl relative overflow-hidden group">
               <img src="https://picsum.photos/400/300?grayscale" alt="Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-transform flex items-center gap-2">
                   <MapPin size={16} /> View on Google Maps
                 </button>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-accent font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-accent focus:ring-2 focus:ring-blue-100 transition-all outline-none`}
                      placeholder="Atharv"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-accent focus:ring-2 focus:ring-blue-100 transition-all outline-none`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject (Optional)</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-blue-100 transition-all outline-none text-slate-600"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a topic</option>
                    <option value="New Website">New Website Project</option>
                    <option value="Redesign">Website Redesign</option>
                    <option value="Maintenance">Maintenance & Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:border-accent focus:ring-2 focus:ring-blue-100 transition-all outline-none`}
                    placeholder="Tell us about your project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent text-white font-bold py-4 rounded-lg shadow-lg hover:bg-accentHover hover:shadow-xl transition-all flex justify-center items-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;