import React from 'react'

const TabBar = ({ activeTab, onTabChange }) => {
  return (
    <div className="absolute bottom-0 w-full h-[90px] bg-white/95 backdrop-blur-xl border-t border-gray-100 flex justify-around items-start pt-3 z-50 pb-8">
      <div 
        className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-indigo-600' : 'text-gray-400'}`}
        onClick={() => onTabChange('home')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="text-[10px] font-bold">首页</span>
      </div>
      <div 
        className={`flex flex-col items-center gap-1 ${activeTab === 'course' ? 'text-indigo-600' : 'text-gray-400'}`}
        onClick={() => onTabChange('course')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
        <span className="text-[10px] font-bold">课程</span>
      </div>
      <div 
        className="relative -top-7"
        onClick={() => onTabChange('chat')}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-300 text-white border-4 border-white transition-transform active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </div>
      </div>
      <div 
        className={`flex flex-col items-center gap-1 ${activeTab === 'review' ? 'text-indigo-600' : 'text-gray-400'}`}
        onClick={() => onTabChange('review')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="m22 2-7 20-4-9-9-4 20-7Z"></path>
        </svg>
        <span className="text-[10px] font-bold">复习</span>
      </div>
      <div 
        className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-indigo-600' : 'text-gray-400'}`}
        onClick={() => onTabChange('profile')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="text-[10px] font-bold">我的</span>
      </div>
    </div>
  )
}

export default TabBar