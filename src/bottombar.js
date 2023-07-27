import React, { useRef, useEffect, useState } from 'react';

const BottomBar = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    setDuration(audioRef.current.duration);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audioRef]);

  return (
    <div style={{ background: 'lightblue', padding: '10px', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div style={{ width: '100%', height: '5px', background: 'grey' }}>
        <div
          style={{ width: `${(currentTime / duration) * 100}%`, height: '100%', background: 'green' }}
        />
      </div>
    </div>
  );
};

export default BottomBar;