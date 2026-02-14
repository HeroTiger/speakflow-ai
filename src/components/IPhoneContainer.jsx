import React from 'react'

const IPhoneContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen p-4">
      <div 
        className="relative w-[393px] h-[852px] bg-white dark:bg-gray-800 rounded-[55px] border-8 border-black overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* 摄像头区域 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-b-xl flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* 屏幕内容 */}
        <div className="pt-12 pb-8 px-0 h-full overflow-y-auto">
          {children}
        </div>
        
        {/* 底部指示器 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    </div>
  )
}

export default IPhoneContainer