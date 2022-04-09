import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'hsl(216, 53%, 9%)',
    color: 'hsl(0, 0%, 100%)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '40px'
  },
  cardActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start'
  },
  box: {
      display: 'flex',
      flexDirection: 'column',
  }
});

export default function BasicCard({profile, name, text, title}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
         {text}
        </Typography>
       
      </CardContent>
      <CardActions className={classes.cardActions}>
          <img className={classes.avatar} src={profile}/>
         <div className={classes.box}>
         <Typography variant='h5'>{name}</Typography>
          <Typography component='h2'>{title}</Typography>
         </div>
      </CardActions>
    </Card>
  );
}