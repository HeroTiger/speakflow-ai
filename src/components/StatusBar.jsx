import React from 'react'

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-white dark:bg-gray-800 z-50 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
      <div className="font-semibold text-sm">{currentTime}</div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center text-[8px] text-white dark:text-black">
          5G
        </div>
        <div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-green-500"></div>
        </div>
        <div className="text-sm">100%</div>
      </div>
    </div>
  )
}

export default StatusBar