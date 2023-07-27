import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './navbar.css';
import './Screenshot 2023-07-13 214525.png'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { green, pink } from '@mui/material/colors';
import PageviewIcon from '@mui/icons-material/Pageview';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [state, setState] = React.useState({
    
    SUBSCRIBE: false
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2>SUBSCRIBE TO LISTEN AD FREE MUSIC</h2>
      <br></br>
      <h5>Just $10 a year</h5>
      <img  src={require('./premium.jpg')}></img>
      <Divider />
      
    </Box>
  );
  return (
      <div className="body">
    <div className="App">
    {/* <form className='form'>
    <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>
    <input type='text' placeholder='Search' />
    </form> */}
      <nav className="navbar">
        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <Link to="/navbar" className='ac'><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" className='temp2'><li className="nav-item">Your Playlists</li></Link>
          <Link to="/singer" className='temp2'><li className="nav-item">Singers</li></Link>
          <Link to="/profile" className='temp2'><li className="nav-item">Profile</li></Link>
          <Link to="/" className='temp2'><li className="drop" >Login</li></Link>
          <Link to="/Feedback" className='temp2'><li className="drop" >Feedback</li></Link>
        </ul>
      </nav>
        <div className="content1">
            <h1>Welcome to Music hits</h1>
            <p>Enjoy your music journey</p>
        </div>
        <br></br>
        <div className='subscribe'>
      {['','','','','SUBSCRIBE'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <Link to="/subs"><button>CLick</button></Link>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      
    </div>
        <div className="App8">
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="The Real Toofan"
        subheader="July 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={require('./toofan.jpeg')}
        alt="KGF2"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          #Trending no.1
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          <Typography paragraph>In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy
          </Typography>
          {/* <Typography paragraph> 
Rocky
          </Typography>
          
          <Typography>
            1000cr+
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
      </div>

      </div>
      
      <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      {/* <LinearProgress className="topcolor" color="secondary" /> */}
      {/* <LinearProgress color="success" /> */}
      {/* <LinearProgress className="botcolor" color="inherit" /> */}
    </Stack>
    </div>
  );
}

export default Home;