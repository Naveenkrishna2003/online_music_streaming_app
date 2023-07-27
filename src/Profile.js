import React from "react";
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import pro from './proicon.jpeg';
import './profile.css';
import { Button} from "@mui/material";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Profile(){
    const theme = useTheme();

  const [value, setValue] = React.useState(4);
return(
<div className="all">
{/* <form className='form1'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form> */}
<nav className="navbar">

        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <Link to="/navbar" className="temp4"><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" className="temp4"><li className="nav-item">Your Playlists</li></Link>
          <Link to="/singer" className="temp4"><li className="nav-item">Singers</li></Link>
          <Link to="/profile" className="ac4"><li className="nav-item">Profile</li></Link>
          <Link to="/" className="temp4"><li className="drop" >Login</li></Link>
        </ul>
      </nav>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
    <div className="pmain">

<div className="picon">
<img src={pro} width={100} height={100}/>
<h3>UserName:</h3>
<TextField id="filled-basic" label="Naveenkrishna" variant="filled" />
<h3>Email</h3>
<TextField id="filled-basic" label="727721euit102@skcet.ac.in" variant="filled" />
</div>
<h3>Languages That you Listen!</h3>
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="English" control={<Radio />} label="English" />
        <FormControlLabel value="Tamil" control={<Radio />} label="Tamil" />
        <FormControlLabel value="Hindi" control={<Radio />} label="Tamil" />
      </RadioGroup>
    </FormControl>
    <h5>Recently Listned</h5>
    <div>
    
    </div>
    <Stack direction="row" spacing={2}>
        <Item><Card className="history" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography> */}
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
        image={require('./nr.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card></Item>
        <Item><Card className="history" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography> */}
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
        image={require('./jjp.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card></Item>
        <Item><Card className="history" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography> */}
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
        image={require('./toofan.jpeg')}
      />
      {/* <Typography component="legend">Rating</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </Card></Item>
        <Item><Card className="history" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* <Typography component="div" variant="h5">
            Pathaan
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jhoome Jo Pathaan
          </Typography> */}
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
    </Card></Item>
      </Stack>
      <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
    </div>
    <Typography component="legend">Rate our App</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
</div>
    );

}
export default Profile;