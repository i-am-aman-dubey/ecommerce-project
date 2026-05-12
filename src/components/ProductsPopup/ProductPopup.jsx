import React from 'react'
import { FaStar } from 'react-icons/fa6';

const ProductPopup = ({selectedProduct,setSelectedProduct}) => {
    if(!selectedProduct) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" >
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-2xl w-[90%] max-w-4xl relative" data-aos= "zoom-in" >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className='w-full max-h-[400px] object-contain rounded-xl' />
            <div className='space-y-4'>
                 <h1 className='text-2xl font-bold mt-4 '>{selectedProduct.title}</h1>
            <p className='text-gray-500 dark:text-gray-400'>
           {`Category: ${selectedProduct.category}`}
           </p>
           <p className="text-xl font-semibold text-gray-500 mt-2">
                {`Price: ${selectedProduct.price}`}
                </p>
                 <div className='flex text-gray-500 items-center gap-1'>
                    Rating:
                    <FaStar className='text-yellow-400'/>
                    <span>{selectedProduct.rating}</span>
                </div>
                <button className='absolute top-0 right-6 text-2xl'
                onClick={()=>setSelectedProduct(null)}
                >x</button>
            </div>
            </div>
    </div>
    </div>
  )
}

export default ProductPopup
