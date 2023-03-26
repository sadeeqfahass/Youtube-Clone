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
            <img src="logo.png" alt="" className='pointer'/>
          </div>
          <div className="search">
            <input type="text" name="" id="" />
            <SearchIcon className='icon search-icon pointer'/>
            <KeyboardVoiceIcon className='icon mic-icon pointer'/>
          </div>
          <div className="icons">
            <VideoCallOutlinedIcon className='icon pointer'/>
            <NotificationsNoneOutlinedIcon className='icon pointer'/>
            <div className="user-profile">
                <img src="user.png" alt="" className='pointer'/>
            </div>
          </div>
        </div>
        <div className="bottom">
            <Filter category = "All"/>
            <Filter category = "Gaming"/>
            <Filter category = "Computer"/>
            <Filter category = "Aviation"/>
            <Filter category = "Sports League"/>
            <Filter category = "Recently Uploaded"/>
            <Filter category = "Programming"/>
            <Filter category = "AI"/>
            <Filter category = "Live"/>
            <Filter category = "Electric Vehicles"/>
            <Filter category = "Gadgets"/>
            <Filter category = "Podcats"/>
            <Filter category = "Comedy"/>
            <Filter category = "Body Building"/>
            <Filter category = "Visual Arts"/>
            <Filter category = "Mercedes Benz"/>
            <Filter category = "Sales"/>
            <Filter category = "Flights"/>
            <Filter category = "Watched"/>
        </div>
      </div>
    </>
  );
}

export default Nav;
