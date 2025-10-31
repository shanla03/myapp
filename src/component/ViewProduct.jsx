import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ViewProduct() {

    const [expanded, setExpanded] = React.useState(false);

    const [data, setData] =useState([]);
    
 const [ anchorEl, setAnchorEl] = useState(null);
 const [selectedId,setSelectedId] = useState(null);

    useEffect(()=>{
        const storeData = JSON.parse(localStorage.getItem("plant"));
        if(storeData){
            setData(storeData);
        }
        
    })


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const handleMenuOpen =(event ,id)=>{
    setAnchorEl(event.currentTarget)
    setSelectedId(id);
  }

  const handleMenuClose =()=>{
    setAnchorEl(null);
    setSelectedId(null);

  }

  const handleDelete =()=>{
    if(selectedId!==null){
      const updateData = data.filter((item,i)=>i!==selectedId);
    setData(updateData);
    localStorage.setItem("plant",JSON.stringify(updateData))
    }
    handleMenuClose();

  }

  return (
    <div style={{display:"flex",padding:"50px",gap:"20px"}}>
      
      {data.length ===0?(
        <Typography>No Plants found</Typography>
      ):(
       data.map((card,index)=>(

      
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" 
          onClick={(e)=>handleMenuOpen(e,index)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={card.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={card.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price:{card.price}<br/>
          Availability:{card.availability}
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
          <Typography sx={{ marginBottom: 2 }}>{card.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
     )) 
      )}

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}
       onClose={handleMenuClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  )
}
