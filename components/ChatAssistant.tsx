"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Minimize2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const SUGGESTIONS = [
  "Who is Sachin?",
  "What tools does he use?",
  "Is he available to hire?",
  "Tell me about his experience",
  "What's his biggest achievement?",
];

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.match(/who|about|introduce|yourself|sachin/)) {
    return "👋 Sachin Koirala is a Software Developer in Test (QA Engineer) based in Kathmandu, Nepal. He has 5+ years of experience in web, API, ETL automation, and manual testing across enterprise, SaaS, e-commerce, and fintech applications. He holds the ISTQB Foundation Level certification and is currently pursuing a Masters in E-Governance.";
  }

  if (q.match(/experience|work|job|role|career|company/)) {
    return "💼 Sachin has worked at:\n• UBA Solutions (Monotype Imaging) — Software Developer in Test (Feb 2023 – Present)\n• Tekkon Technologies — QA Engineer (May 2022 – Feb 2023)\n• IT Himalaya Pvt Ltd — Junior QA Engineer (Jun 2021 – May 2022)\n• IT Himalaya Pvt Ltd — QA Trainee (Dec 2020 – May 2021)\n\nHe's been growing steadily from trainee to senior-level SDT.";
  }

  if (q.match(/skill|tool|tech|stack|framework|language/)) {
    return "🛠️ Sachin's key tools & skills:\n• Automation: Selenium, Cypress, Pytest, Postman/Newman, Rest Assured, JMeter\n• Languages: Python, Java, JavaScript, SQL\n• Databases: MySQL, MongoDB, ElasticSearch\n• CI/CD: Jenkins, Octopus, AWS\n• Management: JIRA, TestRail, Git\n• Testing: Functional, Regression, API, ETL, Performance, Mobile (iOS/Android)";
  }

  if (q.match(/available|hire|open|opportunity|job|freelance|remote/)) {
    return "✅ Yes! Sachin is actively open to new opportunities. He's interested in full-time, contract, and hybrid/remote roles. Feel free to reach out at Sachinkoirala14@gmail.com or connect on LinkedIn: linkedin.com/in/sachin-koirala-a289621a3";
  }

  if (q.match(/achievement|impact|proud|best|accomplish|result/)) {
    return "🚀 Sachin's standout achievements:\n• Built ETL testing framework (Python + Pandas) → reduced testing time by 90%, achieved 100% test coverage\n• Cypress automation at Tekkon → cut regression time by 60%\n• Selenium framework from scratch at IT Himalaya → 50% time reduction\n• CI/CD integration with Jenkins + Octopus on AWS for continuous quality";
  }

  if (q.match(/education|degree|study|university|college|masters|bsc/)) {
    return "🎓 Sachin's education:\n• Masters in E-Governance — Nepal Open University (2024 – Running)\n• BSc CSIT — Nepalaya College, affiliated to Tribhuvan University (2016 – 2021)\n\nHe's also ISTQB Foundation Level certified (Jul 2023, ID: CTFL-2023-008-NSTQB).";
  }

  if (q.match(/certif|istqb|cert/)) {
    return "🏆 Sachin holds the ISTQB® Foundation Level certification — globally recognized as the standard for software testing professionals. Credential ID: CTFL-2023-008-NSTQB, issued July 2023 by the Nepal Software Testing Qualifications Board (NSTQB).";
  }

  if (q.match(/contact|email|phone|reach|linkedin|message/)) {
    return "📬 You can reach Sachin at:\n• Email: Sachinkoirala14@gmail.com\n• Phone: +977 9840588669\n• LinkedIn: linkedin.com/in/sachin-koirala-a289621a3\n• Location: Kathmandu, Nepal";
  }

  if (q.match(/etl|data|pipeline|pandas|python/)) {
    return "📊 One of Sachin's proudest projects: he built an ETL testing framework from scratch using Python and Pandas at UBA Solutions. It reduced ETL testing time by 90% and achieved 100% test case coverage — turning what was a multi-day manual process into an automated, reliable pipeline.";
  }

  if (q.match(/api|rest|soap|postman|endpoint/)) {
    return "🔌 Sachin has extensive API testing experience: REST and SOAP API validation using Postman, Newman, and Rest Assured. He's tested financial transaction endpoints, loan disbursement flows, payment integrations (Stripe), authentication services, and more across multiple platforms.";
  }

  if (q.match(/automation|selenium|cypress|framework/)) {
    return "⚙️ Sachin has built automation frameworks from scratch multiple times:\n• Selenium (Java) at IT Himalaya → 50% faster testing\n• Cypress at Tekkon → 60% regression time saved\n• Python/Pandas ETL framework at UBA → 90% time reduction\n\nHe excels at building scalable, maintainable test suites.";
  }

  if (q.match(/hello|hi|hey|howdy|sup/)) {
    return "Hey there! 👋 I'm Sachin's AI assistant. Ask me anything about his experience, skills, projects, or how to get in touch. What would you like to know?";
  }

  return "🤔 Great question! I can tell you about Sachin's experience, skills, tools, achievements, education, certifications, or how to contact him. What would you like to know?";
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hey! 👋 I'm Sachin's AI assistant. Ask me anything about his experience, skills, or how to hire him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500 + Math.random() * 400));
    const botMsg: Message = { role: "assistant", text: getResponse(text) };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-purple-600 hover:bg-purple-500 shadow-2xl shadow-purple-500/30 flex items-center justify-center text-white transition-all duration-300 glow-pulse ${
          open ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open AI assistant"
      >
        <MessageSquare size={22} />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#07070f] animate-pulse" />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] bg-[#0e0e1a] border border-[#1e1e38] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#141428] border-b border-[#1e1e38]">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
            <Bot size={16} className="text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">Ask about Sachin</p>
            <p className="text-slate-500 text-xs font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AI assistant · always online
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 space-y-3 scrollbar-thin">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mr-2 mt-0.5">
                  <Bot size={12} />
                </div>
              )}
              <div
                className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-purple-600 text-white rounded-br-sm"
                    : "bg-[#141428] text-slate-300 border border-[#1e1e38] rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Bot size={12} className="text-purple-400" />
              </div>
              <div className="bg-[#141428] border border-[#1e1e38] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && (
          <div className="px-4 pb-3 flex gap-1.5 flex-wrap">
            {SUGGESTIONS.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="px-4 pb-4 pt-2 border-t border-[#1e1e38] flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Sachin..."
            className="flex-1 bg-[#141428] border border-[#1e1e38] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-30 flex items-center justify-center text-white transition-all"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </>
  );
}
