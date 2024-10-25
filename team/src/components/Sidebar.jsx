import React from 'react'
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { HiInboxArrowDown } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { RxLightningBolt } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open fixed top-[68px]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="bg-base-200 h-full flex flex-col gap-y-5 w-80 p-4">
          <Link to="/" className='flex items-center gap-2'>
            <RxDashboard className='text-2xl'/><li className=''>Dashboard</li>
          </Link>
          <Link to="/" className='flex items-center gap-2'>
            <HiInboxArrowDown className='text-2xl'/><li className=''>Leads</li>
          </Link>
          <Link to="/" className='flex items-center gap-2'>
            <AiOutlineDollar className='text-2xl'/><li className=''>Transactions</li>
          </Link>
          <Link to="" className='flex items-center gap-2'>
            <AiFillSignal className='text-2xl'/><li className=''>Analytics</li>
          </Link>
          <Link to="" className='flex items-center gap-2'>
            <RxLightningBolt className='text-2xl' /><li className=''>Integration</li>
          </Link>
          <Link to="" className='flex items-center gap-2'>
            <IoCalendarOutline className='text-2xl'/><li className=''>Calendar</li>
          </Link>
          <Link to="/" className='flex items-center justify-between'>
            <li className='flex gap-2'><LuFiles className='text-2xl'/>Pages</li><li className=''><FaChevronDown/></li>
          </Link>
          <Link to="/" className='flex items-center gap-2 justify-between'>
            <li className='flex gap-2'><IoSettingsOutline className='text-2xl'/>Settings</li><li className=''><FaChevronDown/></li> 
          </Link>
          <Link to="/" className='flex items-center justify-between'>
            <li className='flex gap-2'><IoDocumentTextSharp className='text-2xl'/>Documentation</li><li className=''><FaChevronDown/></li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar