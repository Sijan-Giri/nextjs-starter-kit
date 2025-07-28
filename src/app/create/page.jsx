import React from 'react'

const Create = ({type}) => {
  return (
<div className="flex items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-blue-600 flex items-center justify-center">
        <span className="mr-1 text-3xl font-bold">ES</span>
        BAZAR
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Best online ecommerce website for you
      </p>
    </div>
    <div className="my-6 border-t border-gray-300 relative">
      <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
        {type === 'edit' ? 'Edit Product' : 'Create Product'}
      </span>
    </div>
    <form className="space-y-4">
      <div>
        <input type="text" placeholder="Title" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      <div>
        <input type="text" placeholder="Subtitle" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      <div>
        <input type="email" placeholder="Description" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
        {type === 'edit' ? 'Update Product' : 'Create Product'}
      </button>
    </form>
  </div>
</div>


  )
}

export default Create