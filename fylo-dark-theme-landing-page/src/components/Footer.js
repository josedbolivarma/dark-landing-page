import React from 'react'
import { Link, makeStyles, Typography } from '@material-ui/core';
import FormCard from './FormCard';
import logo from '../images/logo.svg'
import iconLocation from '../images/icon-location.svg';
import iconPhone from '../images/icon-phone.svg';
import iconEmail from '../images/icon-email.svg';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormCard />
      <img className={classes.logo} src={logo} alt='Logo' width='200px'/>
      <div className={classes.contactContainer}>
        <div className={classes.contactNormal}>
        <div className={classes.contactBox}>
        <img src={iconLocation} className={classes.icon}/>
          <Typography>Lorem Ipsum</Typography>
        </div>
          
        </div>
        <div className={classes.contactBox}>
          <img src={iconPhone} className={classes.icon}/>
          <Typography>Lorem Ipsum</Typography>
        </div>
        <div className={classes.contactBox}>
          <img src={iconEmail} className={classes.icon}/>
          <Typography>Lorem Ipsum</Typography>
        </div>
        <div className={classes.paginationBpx}>
          <Link className={classes.linkStyled}>About Us</Link>
          <Link className={classes.linkStyled}>Jobs</Link>
          <Link className={classes.linkStyled}>Press</Link>
          <Link className={classes.linkStyled}>Blog</Link>
        </div>
        <div className={classes.paginationBpx}>
          <Link className={classes.linkStyled}>Contact Us</Link>
          <Link className={classes.linkStyled}>Terms</Link>
          <Link className={classes.linkStyled}>Privacy</Link>
        </div>
      </div>
      </div>

  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'hsl(216, 53%, 9%)',
        color: 'hsl(0, 0%, 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(24),
        padding: theme.spacing(4)
    },
    contactContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, auto)',
      gap: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '1fr',
      }
    },
    contactBox: {
      display: 'flex',
      gap: theme.spacing(2)
    },
    paginationBpx: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    },
    contactNormal: {
      display: 'flex',
      flexDirection: 'column'
    },
    linkStyled: {
      textDecoration: 'none',
      color: 'hsl(0, 0%, 80%)',
      fontSize: '1.1rem',
      cursor: 'pointer'
    },
    icon: {
      width: '20px',
      height: '20px'
    },
    logo: {
      width: '140px',
      height: '60px'
    }
}))

export default Footer;