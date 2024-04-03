import React, { useState } from 'react';
import EventAvailable from '@mui/icons-material/EventAvailable';
import TimerIcon from '@mui/icons-material/Timer';
import ChatIcon from '@mui/icons-material/Chat';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Todosec from './Todosec';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Todo() {

    const [isClicked, setIsclicked] = useState(false);
    const handleOp = () => {

        setIsclicked(!isClicked);
    }

  return (
        <div className="relative right-[140px]">

            <div className = "relative top-[100px] left-[10rem] flex gap-4">
                <EventAvailable fontSize = "large"/>

                <div>
                    <p className='font-bold text-xl'>Drop 2</p>
                    <p className='text-gray-500'>Today</p>
                </div>
            </div>

            <section className = "relative top-[120px] left-[13rem]">

                <CheckCircleIcon style = {{color:"green"}}fontSize = "large" className="relative top-[60px] right-[15px] z-10"/>

                <div className="w-72 h-[90px] bg-white pl-[30px] shadow-xl border">

                    <p className="font-bold text-xl">Refinement</p>

                    <div className="flex gap-2">
                        <TimerIcon fontSize = "medium"/>
                        <p>-3 days</p>
                    </div>

                    <div className="flex gap-2">

                        <ChatIcon fontSize = "medium"/>
                        <FilterNoneIcon fontSize = "medium"/>
                        <StarOutlineIcon fontSize = "medium"/>
                    </div>
                    
                </div>

            </section>

            <Todosec collor="red"/>
            <AddCircleIcon onClick = {handleOp}className="relative top-[200px] left-[23rem]" sx={{fontSize:70}}/>
            
            
        </div>
    );
}

export default Todo;
