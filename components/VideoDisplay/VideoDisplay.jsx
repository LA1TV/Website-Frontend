import React from 'react';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';

//const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoDisplay = ({ children, className, href }) => (
  <ReactPlayer url={["https://www.la1tv.co.uk/file/61690"]} controls="true" allowFullScreen light="https://www.la1tv.co.uk/file/26264"/>
);
  
export default VideoDisplay;