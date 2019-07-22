import React from 'react';
import dynamic from 'next/dynamic';

const VideoDisplay = ({ children, className, href }) => (
  // <ReactPlayer url={["https://www.la1tv.co.uk/file/61690"]} controls="true" allowFullScreen light="https://www.la1tv.co.uk/file/26264"/>
  <iframe src="https://embed.la1tv.co.uk/328"></iframe>
);
  
export default VideoDisplay;