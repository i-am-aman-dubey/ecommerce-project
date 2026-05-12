import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import {FaCartShopping} from 'react-icons/fa6'
import {FaCaretDown} from 'react-icons/fa'
import {FiShoppingBag } from 'react-icons/fi'
import { GiLitCandelabra } from 'react-icons/gi'
import DarkMode from './DarkMode'

const menu =[
    { 
        id:1,
        name:'Home',
        linke:"/#",
    },
    {
        id:2,
        name:'Top Rated',
        linke:'/#services'
    },
     {
        id:3,
        name:'Kids Wear',
        linke:'/#'
    },
     {
        id:3,
        name:'Mens Wear',
        linke:'/#'
    },
     {
        id:3,
        name:'Electronics',
        linke:'/#'
    },
]

const Dropdownlist=[
    {
        id:1,
        name:'Tranding Products',
        linke:'/#'
    },
      {
        id:2,
        name:'Best Selling',
        linke:'/#'
    },
]

const Navbar = ({handleOrderpopup ,search, setSearch}) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900  dark:text-white duration-200 relative z-40 sticky top-0'>
        <div className='bg-primary/40 dark:bg-gray-800 py-2'>
          <div className='container flex justify-between items-center '>
            <div>
                <a href='#' className='font-bold text-xl items-center flex gap-1'>
                    <FiShoppingBag size='30'/>
                    ShopeMe
                </a>
            </div>
            <div className='flex justify-between items-center gap-4 '>
                <div className='relative group hidden sm:block'>
                    <input type='text' placeholder='Search'value={search} onChange={(e)=> setSearch(e.target.value)} className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800'/>
                    <IoMdSearch className='text-slate-800 dark:text-white group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
                <button onClick={()=>{handleOrderpopup()}} className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                    <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
                <div className=''>
                    <DarkMode/>
                </div>
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {menu.map((data)=>(
                    <li key={data.id}>
                        <a href={data.linke} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                    </li>
                ))}
                <li className=' relative group cursor-pointer '>
                    <a href="#" className='flex items-center gap-1 py-2 '>
                        Tranding Products
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                            {Dropdownlist.map((data)=>(
                                <li key={data.id}>
                                    <a href={data.linke} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
