import React from 'react'

const ChatPage = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white px-5 py-3 border-b border-slate-50 flex items-center gap-3">
        <img src="https://i.pravatar.cc/100?u=4" className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-50" />
        <div className="flex-1">
          <h3 className="font-bold text-sm">Emma 老师</h3>
          <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">● 在线</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">AI</div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100 max-w-[80%] leading-relaxed text-slate-700">
            你好！让我们开始练习自我介绍吧。你可以试着用一句话说说你的工作吗？
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[80%]">
            I am working as a designer for 5 years.
          </div>
        </div>

        {/* 纠错卡片 */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <path d="M8 14h.01"></path>
              <path d="M16 14h.01"></path>
            </svg>
          </div>
          <div className="flex-1 bg-white rounded-2xl border border-indigo-100 shadow-sm overflow-hidden">
            <div className="bg-indigo-50/50 px-3 py-2 border-b border-indigo-50 flex justify-between items-center">
              <span className="text-[10px] font-black text-indigo-700 uppercase">语法优化</span>
              <span className="text-[10px] text-indigo-400">时态更正</span>
            </div>
            <div className="p-3 text-xs space-y-3">
              <div className="flex gap-2">
                <span className="text-red-400 font-bold text-[10px] mt-0.5">✕</span>
                <p className="line-through text-slate-300">I am working...</p>
              </div>
              <div className="flex gap-2">
                <span className="text-green-500 font-bold text-[10px] mt-0.5">✓</span>
                <p className="text-slate-700 font-bold bg-green-50 px-1 rounded">I have been working...</p>
              </div>
              <p className="pt-2 border-t border-slate-50 text-[10px] text-slate-400 italic">"现在完成进行时最适合描述持续至今的经历。"</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 输入框 */}
      <div className="bg-white border-t border-gray-100 p-3">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="输入你的回答..." 
            className="flex-1 border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage