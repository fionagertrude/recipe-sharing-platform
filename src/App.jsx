import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipe Sharing Platform
          </h1>
          <p className="text-blue-500 mt-2">Built with React + Tailwind CSS</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Recipe Sharing!
          </h2>
          <p className="text-gray-600">
            Your project is successfully set up with Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-8">
            Ready to start building your recipe sharing platform!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App