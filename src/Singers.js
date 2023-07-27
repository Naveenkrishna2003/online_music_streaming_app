import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SearchIcon from '@mui/icons-material/Search';
import { Button} from "@mui/material";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import './live-from-space.jpg';
import './singers.css'
import './3moonu-128kbps-MassTamilan.com/A-life-Full-of-love.mp3'
import Rating from '@mui/material/Rating';
import {Link} from 'react-router-dom';

const songs = [
  'Poo-Nee-Poo.mp3',
  'Why-this-kolaveri.mp3',
  'Naa-Ready.mp3'
  // Add more song names here
];
export default function MediaControlCard() {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // When the current song ends, play the next song
    audioRef.current.addEventListener('ended', () => {
      playNextSong();
    });

    // Clean up the event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener('ended', () => {
        playNextSong();
      });
    };
  }, []);

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const currentSong = songs[currentSongIndex];
  const [value, setValue] = React.useState(4);
  return (
    <div className='singerbg'>
    {/* <form className='form1'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form> */}
    <nav className="navbar">
        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <Link to="/navbar" className="temp1"><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" className="temp1"><li className="nav-item">Your Playlists</li></Link>
          <Link to="/singer" className="ac1"><li className="nav-item">Singers</li></Link>
          <Link to="/profile" className="temp1"><li className="nav-item">Profile</li></Link>
          <Link to="/" className="temp1"><li className="drop" >Login</li></Link>
        </ul>
      </nav>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
<h3 className='fam3'>Famous Singers In Your Region</h3>
<div className='rightcol'>
<Card className="ani1" sx={{ display: 'flex', height: '200px', marginLeft: '20px' }}>
        {/* ... card content, song details, and icon buttons ... */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Anirudh
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {currentSong}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={playPreviousSong}>
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {isPlaying ? (
                <PauseIcon sx={{ height: 38, width: 38 }} />
              ) : (
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>
            <IconButton aria-label="next" onClick={playNextSong}>
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={require('./an.jpeg')}
        />
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Card>

      {/* Right-side song tracker */}
      {isPlaying && (
        <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)', padding: '10px', background: 'lightblue' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Now Playing:</div>
          <div style={{ marginBottom: '10px' }}>{currentSong}</div>
          <div>{/* Display timing of the current song using audioRef.current.currentTime */}</div>
          <div style={{ width: '100px', height: '5px', background: 'grey' }}>
            <div style={{ width: `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`, height: '100%', background: 'green' }} />
          </div>
          <div>{/* Display timing of the next song using audioRef.current.duration */}</div>
        </div>
      )}

      {/* Audio element for playing the songs */}
      <audio ref={audioRef} src={`./3moonu-128kbps-MassTamilan.com/${currentSong}.mp3`} />
    <br></br>
    <Card className="ar1" sx={{ display: 'flex', height: '200px', marginLeft: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          AR Rahman
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            PS1,PS2,etc..
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./download.jpeg')}
        alt="Live from space album cover"
      />
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Card>
    <br></br>
    <Card className="ar1" sx={{ display: 'flex', height: '200px', marginLeft: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          SS Thaman
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Prince,Varisu
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./sst.jpeg')}
        alt="Live from space album cover"
      />
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Card> 
    <br></br>
    <br></br>
    <div>

    <Card className="ar1" sx={{ display: 'flex', height: '200px', marginLeft: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Haris Jeyaraj
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Legend
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./hj.jpeg')}
        alt="Live from space album cover"
      />
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Card> 
    </div>
    <div className="footer">
   
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
    
</div>

    </div>
  );
}