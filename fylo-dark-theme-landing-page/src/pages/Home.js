import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Link } from '@material-ui/core'


//svg
import illustrationIntro from '../images/illustration-intro.png';
import illustrationStayProductive from '../images/illustration-stay-productive.png';
import arrowIcon from '../images/icon-arrow.svg';
import { ButtonStyled } from '../styled/styledcomponents';
import GridSkills from '../components/GridSkills';
import CardCommentsContainer from '../containers/CardCommentsContainer';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';



const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.sect}>
     
   
    <section className={classes.section}>
      <Container className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         
          title="Banner Desktop"
        />
      <img className={classes.img} src={illustrationIntro}/>
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          All your files in one secure location, accessible anywhere
          </Typography>
          <Typography variant="body2"  component="p">
          Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.
          </Typography>
        </CardContent>
      <CardActions className={classes.cardActionsCenter}>
        <ButtonStyled size="medium">
        Get Started
        </ButtonStyled>
        
      </CardActions>

      <GridSkills />


      </Container>
      <div className={classes.flex}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         
          title="Banner Desktop"
        />
      <img className={classes.img} src={illustrationStayProductive}/>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          Stay productive, wherever you are

          </Typography>
          <Typography variant="body2"  component="p">
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.
          </Typography>
          <Typography variant="body2"  component="p">
          Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.

          </Typography>
          <Link className={classes.linkStyled}> See how Fylo works <img src={arrowIcon}/></Link>
        </CardContent>
      </div>
            <CardCommentsContainer />
            </section>

            <Footer />
            </section>

  );
}

const useStyles = makeStyles((theme)=> ({
    section: {
      width: '94%',
      margin: '0 auto',
    },
    root: {
      maxWidth: 645,
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    media: {
      height: 140,
    },
    cardActionsCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },
    },
      cardContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    description: {
        color: 'hsl(0, 0%, 100%)'
    },
    img: {
      width: '100%',
      height: '400px',
      zIndex: '1000'
    },
    sect: {
      width: '100%'
    },
    linkStyled: {
      color: 'hsl(176, 68%, 64%)',
      cursor: 'pointer'
    },
 
  
  }));
  

export default Home;