import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import NoFoto from "../../Common/Foto/NoFoto.png"
// import MyPost from './MyPosts/MyPosts';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.profileHeader}>
        <img src='https://ic.pics.livejournal.com/stepbystep_hdr/11824494/342685/342685_original.jpg'></img>
      </div>
      <div className={s.avatar}>
        <img src={ props.profile.img ? props.profile.img : NoFoto} ></img>
      </div>
      <div className={s.descriptionBlock}>
        <h2>{props.profile.username}</h2>
        <h4>{props.profile.userstatus}</h4>
      </div>
    </div>)
}

export default ProfileInfo;