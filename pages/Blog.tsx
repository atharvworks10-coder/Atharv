import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-primary mb-4">Latest Insights</h1>
           <p className="text-slate-600">Web design trends, development tips, and digital marketing strategies.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} /> Atharv
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-slate-200 text-slate-600 px-8 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;