import React from 'react'
import Imge1 from '../../assets/women/women.png';
import Imge2 from '../../assets/women/women2.jpg';
import Imge3 from '../../assets/women/women3.jpg';
import Imge4 from '../../assets/women/women4.jpg';
import {FaStar} from 'react-icons/fa6';

const ProductsData = [
    {
        id:1,
        img:Imge1,
        title:'Women Ethnic',
        rating:5.0,
        color:'white',
        aosDelay:'0'
    },
    {
        id:2,
        img:Imge2,
        title:'Women Western',
        rating:4.0,
        color:'Red',
        aosDelay:'200'
    },
    {
        id:3,
        img:Imge3,
        title:'Goggles',
        rating:4.5,
        color:'Brown',
        aosDelay:'400'
    },
     {
        id:4,
        img:Imge4,
        title:'Women Ethnic',
        rating:4.7,
        color:'Yello',
        aosDelay:'600'
    },
    {
        id:5,
        img:Imge1,
        title:'Women Ethnic',
        rating:4.7,
        color:'black',
        aosDelay:'800'
    },

]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex laboriosam fugit?</p>
        </div>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {ProductsData.map((data)=>(
                    <div key={data.id} data-aos='fade-up' data-aos-delay={data.aosDelay} className='space-y-3'>
                        <img src={data.img} alt="Cover image" className='h-[220px] w-[150pc] object-cover rounded-md' />
                        <div>
                            <h3 className='font-semibold'>{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center '>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>view All button</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
