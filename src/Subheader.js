import React from 'react';

import LayersIcon from '@mui/icons-material/Layers';

import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import ListIcon from '@mui/icons-material/List';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Subheader() {
  return (
    <div className="relative right-[160px]">

      <div className='flex relative top-[25px] left-[10rem] gap-4'>

          <LayersIcon className='ml-[10px]' fontSize = "large"/>

          <p className='font-bold text-xl'>Design System</p>
      </div>

      <div className = "relative top-[50px] left-[10rem] flex gap-20">
        <span className="m-2 w-[55px] h-[55px] rounded-full bg-white inline-block flex items-center justify-center shadow-lg border">
          <EditCalendarIcon fontSize = "large"/>
        </span>
        <span className="m-2 w-[55px] h-[55px] rounded-full bg-white inline-block flex items-center justify-center shadow-lg border">
          <EventAvailableIcon fontSize = "large"/>
        </span>
        <span className="m-2 w-[55px] h-[55px] rounded-full bg-white inline-block flex items-center justify-center shadow-lg border">
          <ListIcon fontSize = "large"/>
        </span>
        <span className="m-2 w-[55px] h-[55px] rounded-full bg-white inline-block flex items-center justify-center shadow-lg border">
          <AccountCircleIcon fontSize = "large"/>
        </span>


      </div>

        
        
        
    </div>
  )
}

export default Subheader