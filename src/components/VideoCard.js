import React from 'react'

const VideoCard = ({videoInfo}) => {
    console.log(videoInfo);
    const {snippet,statistics}= videoInfo;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-3 w-72 shadow-lg'>
       <img className="rounded-lg" alt='' src={thumbnails.medium.url}/>
        <ul>
             <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>Views: {statistics.viewCount}</li>
         </ul>
    </div>
  )
}

export default VideoCard

