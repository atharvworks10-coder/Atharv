import React from 'react';
import { TEAM } from '../constants';
import {  Award, Users, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const About: React.FC = () => {

  const data = [
    { name: 'Jan', traffic: 400 },
    { name: 'Feb', traffic: 800 },
    { name: 'Mar', traffic: 1400 },
    { name: 'Apr', traffic: 2200 },
    { name: 'May', traffic: 3500 },
    { name: 'Jun', traffic: 5000 },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-slate-50 py-16 mb-16">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl font-bold text-primary mb-4">About Atharv Web Studio</h1>
           <p className="text-slate-600 max-w-2xl mx-auto">Combining creativity and technology to deliver digital excellence.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                 <p>
                    Atharv Web Studio started with a simple passion: helping businesses shine online through combining creativity and cutting-edge technology.
                 </p>
                 <p>
                    What began as a freelance journey has grown into a trusted web development partner for businesses across diverse industries. Our mission is to empower you with beautiful, functional websites that deliver measurable results.
                 </p>
                 <p>
                    We value quality, transparency, and client satisfaction above all else. Every line of code we write is dedicated to your success.
                 </p>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/400/500?random=30" alt="Office" className="rounded-2xl shadow-lg mt-8" />
              <img src="https://picsum.photos/400/500?random=31" alt="Meeting" className="rounded-2xl shadow-lg" />
           </div>
        </div>

        {/* Stats / Chart */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-24">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 h-[300px]">
                 <h3 className="text-xl font-bold text-primary mb-6">Client Success: Avg. Traffic Growth</h3>
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                        cursor={{ fill: '#f1f5f9' }}
                      />
                      <Bar dataKey="traffic" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-6 rounded-2xl text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center mb-4">
                       <Briefcase size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-slate-500">Projects Completed</div>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl text-center">
                    <div className="mx-auto w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                       <Award size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary">2024</div>
                    <div className="text-sm text-slate-500">Best Web Designer</div>
                 </div>
                 <div className="col-span-2 bg-slate-50 p-6 rounded-2xl text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                       <Users size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-slate-500">Client Satisfaction</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-primary mb-12">Meet the Expert</h2>
           <div className="flex justify-center">
              {TEAM.map((member, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-sm">
                    <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-slate-50" />
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;