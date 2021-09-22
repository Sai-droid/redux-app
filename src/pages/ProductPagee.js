import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import RemoveShoppingCartTwoToneIcon from '@material-ui/icons/RemoveShoppingCartTwoTone';
// import { AddShoppingCartIcon } from '@mui/icons-material';
const useStyles = makeStyles({
  root: {
    width: 200,
    padding: "5px",
    margin: "5px",
    height:"95%",
    border: "1px solid teal",
    boxshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

  },
  media: {
    height: 100,
  },
});

export default function ProductPagee(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagee}
          title={props.title}
        />
        <h1>{props.price}</h1>
       <h5>{props.description}</h5>
      </CardActionArea>
      <CardActions>
        <Button size="small"  variant ="outlined"  onClick ={()=>{
            props.onClickadd(props.price)
        }}> <AddShoppingCartTwoToneIcon /> add</Button>
          <Button size="small"  variant ="outlined" onClick ={()=>{
            props.onClicksub(props.price)
        }}> <RemoveShoppingCartTwoToneIcon />REmove</Button>
      </CardActions>
    </Card>
  );
}

