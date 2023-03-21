import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Filter from './Filter';
function Nav() {
  return (
    <>
      <div className="nav">
        <div className="top">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <div className="search">
            <input type="text" name="" id="" />
            <SearchIcon className='icon search-icon'/>
            <KeyboardVoiceIcon className='icon mic-icon'/>
          </div>
          <div className="icons">
            <VideoCallOutlinedIcon className='icon'/>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="user-profile">
                <img src="user.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
            <Filter category = "All"/>
            <Filter category = "Gaming"/>
            <Filter category = "Computer"/>
            <Filter category = "Aviation"/>
            <Filter category = "SportsLeague"/>
            <Filter category = "RecentlyUploaded"/>
            <Filter category = "Programming"/>
            <Filter category = "AI"/>
            <Filter category = "Live"/>
            <Filter category = "ElectricVehicles"/>
            <Filter category = "Gadgets"/>
            <Filter category = "Podcats"/>
            <Filter category = "Comedy"/>
            <Filter category = "BodyBuilding"/>
            <Filter category = "Fights"/>
            <Filter category = "Fights"/>
            <Filter category = "Fights"/>
            <Filter category = "Fights"/>
            <Filter category = "Fights"/>
        </div>
      </div>
    </>
  );
}

export default Nav;
