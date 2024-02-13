"use client";

import Style from "./LogoutButton.module.css";

export default function LogoutButton() {
  const onLogout = () => {};


  
  const my = {
    // 임시로 내 정보
    id: "guzzi",
    nickname: "꾸찌",
    image: "/zzi.jpg",
  };

  return (
    <button className={Style.logOutButton} onClick={onLogout}>
      <div className={Style.logOutUserImage}>
        <img src={my.image} />
      </div>
      <div className={Style.logOutUserName}>
        <div>{my.nickname}</div>
        <div>@{my.id}</div>
      </div>
    </button>
  );
}
