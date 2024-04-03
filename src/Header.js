import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MenuIcon from '@mui/icons-material/Menu';
import  { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Header() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {

    setIsClicked(!isClicked);
  }
  return (
    <div className='bg-blue-200 w-[32rem] h-20 flex items-center justify-around shadow-xl relative'>
        <MenuIcon className='ml-[10px]' fontSize = "large"/>
        <p className='ml-[20px] mb-[20px]'>Checkmate</p>

        <div onClick={handleClick}>
          {isClicked ? <BookmarkBorderIcon  className='ml-[10px]' fontSize="large"/> : <BookmarkIcon className='ml-[10px]' fontSize="large"/>}
        
          </div>
       

        
    </div>
  )
}

export default Header