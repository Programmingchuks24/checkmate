import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import ChatIcon from '@mui/icons-material/Chat';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Todosec({collor}) {
  return (
    <section className = "relative top-[120px] left-[13rem]">

        <CheckCircleIcon style = {{color:collor}}fontSize="large" className="relative top-[60px] right-[15px] z-10"/>

        <div className="w-72 h-[90px] bg-white pl-[30px] shadow-xl border">

            <p className="font-bold text-xl">Refinement</p>

            <div className="flex gap-2">
                <TimerIcon fontSize="medium"/>
                <p>-3 days</p>
            </div>

            <div className="flex gap-2">
                <ChatIcon fontSize="medium"/>
                <FilterNoneIcon fontSize="medium"/>
                <StarOutlineIcon fontSize="medium"/>
            </div>
            
        </div>

    </section>
  )
}

export default Todosec