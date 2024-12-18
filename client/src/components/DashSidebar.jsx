import { Sidebar } from 'flowbite-react';
import React from 'react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import {useEffect,useState}from 'react'
import { Link,useLocation } from 'react-router-dom';
function DashSidebar() {
    const location=useLocation();
    const [tab,setTab]=useState('')
    useEffect(()=>{
      const urlParams=new URLSearchParams(location.search)
      const tabFromUrl=urlParams.get('tab');
      if(tabFromUrl){
        setTab(tabFromUrl);
      }
  
    },[location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* Profile Section */}
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item
           active={tab==='profile'}
            icon={HiUser}
            className="cursor-pointer"
          >
            Profile
          </Sidebar.Item>
          </Link>
          {/* Sign Out Section */}
          <Sidebar.Item
           
            icon={HiArrowSmRight}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
