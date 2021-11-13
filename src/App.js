// import { Input } from '@mui/material';
import './App.css';

import { useState } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  const pov = [
    {name:"Rayed",picture:"https://c.tenor.com/uQNoWGXo9VwAAAAM/profile-picture-discord.gif",age:"24",gender:"male"},
    {name:"Achyut",picture:"https://media3.giphy.com/media/gEwRbygRCpBZFxVj4t/200.gif",age:"24",gender:"male"},
    {name:"Radha",picture:"http://68.media.tumblr.com/c77e4ae1a65e0b8a4e4cc4ccc470322e/tumblr_o9xt7pNgKY1uzwbyjo2_540.gif",age:"25",gender:"female"},
    {name:"Akash",picture:"https://media.giphy.com/media/Up8PH67rCip6aXRnzv/giphy.gif",age:"24",gender:"male"},
    {name:"Siddharth",picture:"https://i.pinimg.com/originals/61/75/75/61757542fb9261f580fdef07362f93ec.gif",age:"24",gender:"male"},
    {name:"Priya",picture:"https://c.tenor.com/ir2nX96xSJUAAAAC/ghosts-my-profile.gif",age:"25",gender:"female"},
    {name:"Robin",picture:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/14cb6b84808917.5d68451d7d126.gif",age:"27",gender:"female"},
  ]
  const [profiles,setProfiles] = useState(pov);
  console.log(profiles[0].name)
  return(
    <div className="App">
        <MiniDrawer profiles={profiles} setProfiles={setProfiles}/>
    </div>
  )
}




