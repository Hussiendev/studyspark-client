function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Test Container */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        
        {/* Text Styling Test */}
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          🎉 Tailwind CSS Test
        </h1>
        
        <p className="text-gray-600 mb-6">
          If you can see styled elements below, Tailwind is working!
        </p>

        {/* Color Classes Test */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-red-500 text-white rounded text-center">Red Box</div>
          <div className="p-4 bg-green-500 text-white rounded text-center">Green Box</div>
          <div className="p-4 bg-blue-500 text-white rounded text-center">Blue Box</div>
        </div>

        {/* Responsive Design Test */}
        <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
          <p className="text-yellow-800">
            <span className="font-semibold">Responsive test:</span> 
            Resize your browser window. On mobile, the boxes above should stack vertically.
          </p>
        </div>

        {/* Button Test */}
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:scale-105">
          Test Button
        </button>

        {/* Hover Effect Test */}
        <div className="mt-6 p-4 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer">
          Hover over me! (Should change background color)
        </div>

      </div>
    </div>
  )
}

export default App