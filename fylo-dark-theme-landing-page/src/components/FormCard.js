import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { borderRadius, height } from '@mui/system';
import { ButtonStyled, InputStyled } from '../styled/styledcomponents';

const FormCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Card className={classes.root}>
        <CardContent className={classes.CardContent}>
          <Typography variant="h5" component="h2">
            Get early access today

          </Typography>
          <Typography className={classes.pos}>
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.
          </Typography>

        </CardContent>
        <CardActions className={classes.cardActions}>
          <InputStyled placeholder='@gmail.com' />
          <ButtonStyled>Get Started For Free</ButtonStyled>
        </CardActions>
      </Card>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '8rem 0',
  },
  root: {
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      width: '500px',
    },
    backgroundColor: 'hsl(218, 28%, 13%)',
    color: 'hsl(0, 0%, 100%)',
    textAlign: 'center',

    position: 'absolute',
    padding: theme.spacing(2),
    top: '-120px',
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
    justifyContent: 'center',
    gap: '10px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',

    }
  },
  CardContent: {
    display:'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  }

}));

export default FormCard;