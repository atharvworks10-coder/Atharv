import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, X, Send, MapPin, Search as SearchIcon, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  grounding?: {
    search?: Array<{ uri: string; title: string }>;
    map?: string;
  };
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the Atharv Web Studio AI assistant. I can help you with web trends, location info, or web dev questions using Google Search and Maps.' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Using search and maps tools as requested
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
          tools: [{ googleSearch: {} }, { googleMaps: {} }],
        }
      });

      const text = response.text || "I couldn't generate a response.";
      
      // Extract grounding metadata
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const searchLinks = chunks
        .filter(c => c.web?.uri && c.web?.title)
        .map(c => ({ uri: c.web!.uri!, title: c.web!.title! }));

      // Ideally we would extract map data here if the API returns a structured map snippet, 
      // but typically we get text. We'll simulate map detection if the model text implies it.
      
      const modelMsg: ChatMessage = {
        role: 'model',
        text: text,
        grounding: {
          search: searchLinks.length > 0 ? searchLinks : undefined,
        }
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the server right now." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!process.env.API_KEY) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-2xl hover:bg-accentHover transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-5 duration-300" style={{ maxHeight: '600px', height: '80vh' }}>
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-accent text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  <p>{msg.text}</p>
                </div>
                
                {/* Grounding Sources */}
                {msg.grounding?.search && msg.grounding.search.length > 0 && (
                  <div className="mt-2 text-xs flex flex-wrap gap-2 max-w-[85%]">
                    {msg.grounding.search.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white border border-slate-200 text-slate-500 px-2 py-1 rounded-md flex items-center gap-1 hover:text-accent hover:border-accent transition-colors"
                      >
                        <SearchIcon size={10} />
                        <span className="truncate max-w-[150px]">{link.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-200">
                  <Loader2 className="animate-spin text-accent" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about web trends..."
                className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-accent text-white p-2 rounded-full hover:bg-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-slate-400 text-center mt-2 flex justify-center items-center gap-1">
               Powered by Gemini <span className="w-1 h-1 bg-slate-300 rounded-full"></span> Google Search Grounding
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;