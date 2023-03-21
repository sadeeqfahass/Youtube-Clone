import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Aside() {
  return (
    <>
      <div className="aside">
        <div className="side-bar">
            <MenuOutlinedIcon className='menu-icon icon'/>
            <div className="content">
                <HomeIcon className='icon'/>
                <p>Home</p>
            </div>
            <div className="content">
                <YouTubeIcon className='icon'/>
                <p>Shorts</p>
            </div>
            <div className="content">
                <SubscriptionsIcon className='icon'/>
                <p>Subscription</p>
            </div>
            <div className="content">
                <VideoLibraryIcon className='icon'/>
                <p>Library</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Aside
