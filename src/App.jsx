import React, { useState } from 'react'
import IPhoneContainer from './components/IPhoneContainer'
import StatusBar from './components/StatusBar'
import DynamicIsland from './components/DynamicIsland'
import TabBar from './components/TabBar'
import ChatPage from './components/ChatPage'

function App() {
  const [currentTab, setCurrentTab] = useState('home')

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <div className="pt-24 px-6 pb-8">
            {/* 顶部欢迎语和连胜天数 */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">SpeakFlow AI</h1>
              <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                  <path d="M19.45 15.28c.04-.32.05-.64.05-.98 0-.63-.1-1.23-.3-1.79-1.62.39-3.22.6-4.9.6-1.68 0-3.28-.21-4.9-.6-.2.56-.3 1.16-.3 1.79s.01.66.05.98c-1.37.12-2.68.66-3.8.66-.55 0-1-.45-1-1s.45-1 1-1c1.49 0 2.9-.82 3.8-1.28-.03-.32-.05-.64-.05-.98 0-1.1.43-2.1 1.17-2.83-1.17-.29-2.22-.82-3.03-1.53-.81.71-1.86 1.24-3.03 1.53C2.43 9.9 2 10.9 2 12s.43 2.1 1.17 2.83c-1.17.29-2.22.82-3.03 1.53.81-.71 1.86-1.24 3.03-1.53C2.43 14.1 2 15.1 2 16s.43 2.1 1.17 2.83c-.18.18-.31.4-.31.67 0 .55.45 1 1 1s1-.45 1-1c0-.13-.04-.25-.09-.36 1.09.61 2.3.96 3.59.96 1.68 0 3.28-.21 4.9-.6.2.56.3 1.16.3 1.79s-.01.66-.05.98c1.37.12 2.68.66 3.8.66.55 0 1-.45 1-1s-.45-1-1-1c-1.49 0-2.9-.82-3.8-1.28.03-.32.05-.64.05-.98 0-1.1-.43-2.1-1.17-2.83 1.17-.29 2.22-.82 3.03-1.53-.81.71-1.86 1.24-3.03 1.53C21.57 13.9 22 14.9 22 16s-.43 2.1-1.17 2.83c.18-.18.31-.4.31-.67 0-.55-.45-1-1-1s-1 .45-1 1c0 .13.04.25.09.36-1.09-.61-2.3-.96-3.59-.96-1.68 0-3.28.21-4.9.6-.2-.56-.3-1.16-.3-1.79s.01-.66.05-.98c1.37-.12 2.68-.66 3.8-.66.55 0 1 .45 1 1s-.45 1-1 1c-1.49 0-2.9.82-3.8 1.28zm-1.45-2.28c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12 6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
                <span>12 天连胜</span>
              </div>
            </div>
            
            {/* 渐变背景的今日目标卡片 */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-[32px] p-6 text-white shadow-xl shadow-indigo-100 relative overflow-hidden group mb-8">
              <div className="relative z-10">
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">今日目标</span>
                <h3 className="text-xl font-bold mt-2">商务英语：模拟面试</h3>
                <p className="text-indigo-100/80 text-xs mt-1 leading-relaxed">用 15 分钟时间练习如何回答 <br/>"What is your strength?"</p>
                <button className="mt-5 bg-white text-indigo-600 w-full py-3 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 group-active:scale-95 transition-transform">
                  开始练习
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* 场景模拟卡片 */}
            <h2 className="font-bold text-lg mb-4 text-slate-800">场景模拟</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: '雅思口语', icon: '🎓', color: 'bg-blue-50' },
                { title: '咖啡馆点餐', icon: '☕️', color: 'bg-orange-50' },
                { title: '机场办理', icon: '✈️', color: 'bg-purple-50' },
                { title: '职场汇报', icon: '💼', color: 'bg-green-50' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow active:bg-slate-50">
                  <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-xl mb-3`}>{item.icon}</div>
                  <h4 className="font-bold text-sm text-slate-700">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )
      case 'chat':
        return (
          <div className="pt-24 pb-24">
            <ChatPage />
          </div>
        )
      case 'course':
        return (
          <div className="pt-24 px-6 pb-24">
            <h2 className="text-xl font-bold text-center mb-8">课程页面</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-center text-gray-600">课程列表即将上线</p>
            </div>
          </div>
        )
      case 'review':
        return (
          <div className="pt-24 px-6 pb-24">
            <h2 className="text-xl font-bold text-center mb-8">复习页面</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-center text-gray-600">复习内容即将上线</p>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="pt-24 px-6 pb-24">
            <h2 className="text-xl font-bold text-center mb-8">个人中心</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-center text-gray-600">个人信息设置即将上线</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <IPhoneContainer>
      <StatusBar />
      <DynamicIsland />
      {renderContent()}
      <TabBar activeTab={currentTab} onTabChange={setCurrentTab} />
    </IPhoneContainer>
  )
}

export default App