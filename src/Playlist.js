import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './playlist.css';
import BottomBar from './bottombar'; // Assuming the BottomBar component is in a file named "BottomBar.js"
import { useState ,useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
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
import './jjp.jpeg';
import PauseIcon from '@mui/icons-material/Pause';
import './nr.jpeg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import pathanmps3 from './Jhoome Jo Pathaan_64(PagalWorld.com.se).mp3'
import Rating from '@mui/material/Rating';
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    const updateDuration = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('timeupdate', updateCurrentTime);
    audioRef.current.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
      audioRef.current.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [duration2, setDuration2] = useState(0);
  const audioRef2 = useRef(null);
  
  const handlePlayPause2 = () => {
    if (isPlaying2) {
      audioRef2.current.pause();
    } else {
      audioRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };
  
  useEffect(() => {
    const updateCurrentTime2 = () => {
      setCurrentTime2(audioRef2.current.currentTime);
    };
  
    const updateDuration2 = () => {
      setDuration2(audioRef2.current.duration);
    };
  
    audioRef2.current.addEventListener('timeupdate', updateCurrentTime2);
    audioRef2.current.addEventListener('loadedmetadata', updateDuration2);
  
    return () => {
      audioRef2.current.removeEventListener('timeupdate', updateCurrentTime2);
      audioRef2.current.removeEventListener('loadedmetadata', updateDuration2);
    };
  }, []);
  const [isPlaying3, setIsPlaying3] = useState(false);
const [currentTime3, setCurrentTime3] = useState(0);
const [duration3, setDuration3] = useState(0);
const audioRef3 = useRef(null);

const handlePlayPause3 = () => {
  if (isPlaying3) {
    audioRef3.current.pause();
  } else {
    audioRef3.current.play();
  }
  setIsPlaying3(!isPlaying3);
};

useEffect(() => {
  const updateCurrentTime3 = () => {
    setCurrentTime3(audioRef3.current.currentTime);
  };

  const updateDuration3 = () => {
    setDuration3(audioRef3.current.duration);
  };

  audioRef3.current.addEventListener('timeupdate', updateCurrentTime3);
  audioRef3.current.addEventListener('loadedmetadata', updateDuration3);

  return () => {
    audioRef3.current.removeEventListener('timeupdate', updateCurrentTime3);
    audioRef3.current.removeEventListener('loadedmetadata', updateDuration3);
  };
}, []);
  const progressPercentage = (currentTime / duration) * 100;
  
  const[id,setid]=useState("");
  const[songname,setsongname]=useState("");
  const[movie,setmovie]=useState("");
const SubmitHandler=(e)=>{
  e.preventDefault();
  const data={
      id:id,
      songname:songname,
      movie:movie
  };
  axios.post('http://localhost:8085/playlists/post',data);
}
  const [playlist, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const [value, setValue] = React.useState(4);

  return (
    <div>

      <div className="body1">
    <div className="App1">
    {/* <form className='form1'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form> */}
    <nav className="navbar">
        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <Link to="/navbar" className='temp3'><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" className='ac3'><li className="nav-item">Your Playlists</li></Link>
          <Link to="/singer" className='temp3'><li className="nav-item">Singers</li></Link>
          <Link to="/profile" className='temp3'><li className="nav-item">Profile</li></Link>
          <Link to="/" className='temp3'><li className="drop" >Login</li></Link>
        </ul>
      </nav>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
   
    <h4>Your Playlists</h4>
    <section className='allsongs'>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require('./jjp.jpeg')}
      />
      <audio ref={audioRef}>
        <source src={pathanmps3} type="audio/mpeg" />
      </audio>
      
      {isPlaying && (
        <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)', padding: '10px', background: 'lightblue' }}>
          <div style={{ marginBottom: '10px' }}>Now Playing:</div>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Jhoome Jo Pathaan</div>
          <div>{formatTime(currentTime)}</div>
          <div style={{ width: '100px', height: '5px', background: 'grey' }}>
            <div style={{ width: `${progressPercentage}%`, height: '100%', background: 'green' }} />
          </div>
          <div>{formatTime(duration)}</div>
        </div>
      )}
      <IconButton onClick={SubmitHandler}>
      <AddBoxIcon />
    </IconButton>
    </Card>
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h6">
        LEO
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Naa Ready
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <IconButton aria-label="previous">
        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause" onClick={handlePlayPause2}>
        {isPlaying2 ? (
          <PauseIcon sx={{ height: 38, width: 38 }} />
        ) : (
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        )}
      </IconButton>
      <IconButton aria-label="next">
        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </Box>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={require('./nr.jpeg')}
  />
  <audio ref={audioRef2}>
  <source src={require('./Naa-Ready-MassTamilan.dev.mp3')} type="audio/mpeg" />
</audio>

  {isPlaying2 && (
    <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)', padding: '10px', background: 'lightblue' }}>
      <div style={{ marginBottom: '10px' }}>Now Playing:</div>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Naa Ready</div>
      <div>{formatTime(currentTime2)}</div>
      <div style={{ width: '100px', height: '5px', background: 'grey' }}>
        <div style={{ width: `${(currentTime2 / duration2) * 100}%`, height: '100%', background: 'green' }} />
      </div>
      <div>{formatTime(duration2)}</div>
    </div>
  )}
  <IconButton onClick={SubmitHandler}>
    <AddBoxIcon />
  </IconButton>
</Card>
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h6">
        K.G.F-2
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Toofan
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <IconButton aria-label="previous">
        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause" onClick={handlePlayPause3}>
        {isPlaying3 ? (
          <PauseIcon sx={{ height: 38, width: 38 }} />
        ) : (
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        )}
      </IconButton>
      <IconButton aria-label="next">
        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </Box>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={require('./toofan.jpeg')}
  />
   <audio ref={audioRef3}>
    <source src={require('./Toofan (KGF 2)_128-(PagalWorld.Ink).mp3')} type="audio/mpeg" />
  </audio>

  {isPlaying3 && (
    <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)', padding: '10px', background: 'lightblue' }}>
      <div style={{ marginBottom: '10px' }}>Now Playing:</div>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Toofan</div>
      <div>{formatTime(currentTime3)}</div>
      <div style={{ width: '100px', height: '5px', background: 'grey' }}>
        <div style={{ width: `${(currentTime3 / duration3) * 100}%`, height: '100%', background: 'green' }} />
      </div>
      <div>{formatTime(duration3)}</div>
    </div>
  )}
  <IconButton onClick={SubmitHandler}>
    <AddBoxIcon />
  </IconButton>
</Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            RRR
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Naatu Naatu
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
        image={require('./naatunaatu.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
      {/* <IconButton onClick={SubmitHandler}>
      <AddBoxIcon />
    </IconButton> */}
    </Card>  
    </section>
    
    </div>

    <div className='leftie'>
   <div className='leftcol'>

    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Beast
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Arabic Kuthu
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
        image={require('./arabickuthu.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
      {/* <IconButton onClick={SubmitHandler}>
      <AddBoxIcon />
    </IconButton> */}
    
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Tere Vaaste
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Zara Hatke Zara Bachke
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
        image={require('./terevaaste.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Kushi
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Naa Roja
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
        image={require('./kushi.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card>  
    <br></br>
    <Card className="ani2" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Jailer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Kaavala
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
        image={require('./jailer.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
      {/* <IconButton onClick={SubmitHandler}>
      <AddBoxIcon />
    </IconButton> */}
    </Card>  
    
    

        

    </div>
    </div>
    </div>
    <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
   </div>

  );
}

export default Home;