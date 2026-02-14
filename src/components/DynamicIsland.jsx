import React from 'react'

const DynamicIsland = () => {
  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-full flex items-center justify-center z-50">
      <div className="flex items-center gap-2 text-white text-xs">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span>AI 英语教学</span>
      </div>
    </div>
  )
}

export default DynamicIsland