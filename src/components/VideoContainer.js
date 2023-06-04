import React from 'react'
import { useEffect,useState } from 'react'
import { YouTubeApiKey } from '../utils/constants'
import {Link} from 'react-router-dom'
import VideoCard from './VideoCard';
function VideoContainer() {
  const[videos,setVideos]=useState([]);
 useEffect(()=>{
   
    async function callApi(){
      const response= await fetch(YouTubeApiKey)  
    const data= await response.json(); 
  console.log(data.items)
  setVideos(data.items)
  }
    callApi()
    },[])
  return (
    <div className='flex flex-wrap'>
           {videos.map((video)=> (
           <Link to={'/watch?v='+ video.id}><VideoCard key={video.id} videoInfo={video} /> 
           </Link>
           ))}


{/* <VideoCard videoInfo={videos[1]}/> */}
    </div>
  )
}

export default VideoContainer