
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';
import { ChatMessage } from '../types';

interface AIConsultantProps {
  onSelectPackage: (packageName: string) => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onSelectPackage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Mushy's Smart Assistant. Tell me a bit about your car's condition, and I'll recommend the best treatment!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const responseText = await getAIResponse(messages, userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  return (
    <div className="bg-[#0c0e14] border border-blue-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
      <div className="md:w-1/3 bg-gradient-to-br from-blue-900/40 to-black p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Smart Detailing <span className="text-blue-400">Advisor</span></h2>
          <p className="text-gray-400 text-sm mb-6">Not sure what your car needs? Chat with our AI expert to find the perfect service based on your vehicle's current state.</p>
          <ul className="space-y-4">
            <li className="flex items-center text-xs text-blue-300 bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Condition Assessment
            </li>
            <li className="flex items-center text-xs text-blue-300 bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Package Recommendations
            </li>
            <li className="flex items-center text-xs text-blue-300 bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Car Care Tips
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <p className="text-[10px] uppercase font-bold text-gray-600 mb-2">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {['Muddy', 'Pet Hair', 'Old Wax', 'Spills'].map(tag => (
              <button 
                key={tag}
                onClick={() => setInput(prev => `${prev} I have ${tag}.`.trim())}
                className="text-[10px] px-2 py-1 bg-white/5 rounded hover:bg-white/10 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-black/40">
        <div 
          ref={scrollRef}
          className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[400px] scrollbar-hide"
        >
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-white/5 bg-[#0a0c10]">
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your car condition..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 px-6 rounded-xl font-bold transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
