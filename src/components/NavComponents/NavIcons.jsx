import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

function NavIcons() {
  return (
    <div className="icons">
      <VideoCallOutlinedIcon className="icon pointer" />
      <NotificationsNoneOutlinedIcon className="icon pointer" />
      <div className="user-profile">
        <img src="user.png" alt="" className="pointer" />
      </div>
    </div>
  );
}

export default NavIcons;
