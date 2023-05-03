import { useContext } from "react";
import React from 'react';
import UserContext from "../Utils/UserContext";


const Footer = () => {
  const {user}=useContext(UserContext)

  return (
    <div className="bg-black flex justify-around p-2 m-1">
      <h1 className="font-bold align-middle text-white p-4 ">{user?.name}- {user?.gmail}</h1>
      <h2 className="font-bold align-middle text-white p-4 "> Contact : {user?.contact}</h2>

    </div>
  )
}

export default Footer;