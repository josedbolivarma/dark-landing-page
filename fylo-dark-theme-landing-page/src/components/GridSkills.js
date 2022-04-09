import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'

//Icons
import iconAccess from '../images/icon-access-anywhere.svg';
import iconSecurity from '../images/icon-security.svg';
import iconCollaboration from '../images/icon-collaboration.svg';
import iconAnyFile from '../images/icon-any-file.svg';

const GridSkills = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container>
                <div className={classes.grid}>
                    <div className={classes.gridItem}>
                        <img src={iconAccess} />
                        <Typography variant='h6' component='h2'>Access your files, anywhere
                        </Typography>
                        <Typography variant='p' component='p'>

                            The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </Typography>
                    </div>
                    <div className={classes.gridItem}>
                        <img src={iconSecurity} />
                        <Typography variant='h6' component='h2'>  Security you can trust
</Typography>
                        <Typography variant='p' component='p'>
                        2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.
                        </Typography>
                    </div>
                    <div className={classes.gridItem}>
                        <img src={iconCollaboration} />
                        <Typography variant='h6' component='h2'>  Real-time collaboration
</Typography>
                        <Typography variant='p' component='p'>
                        Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.
                        </Typography>
                    </div>
                    <div className={classes.gridItem}>
                        <img src={iconAnyFile} />
                        <Typography variant='h6' component='h2'>  Store any type of file
</Typography>
                        <Typography variant='p' component='p'>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.
                        </Typography>
                    </div>

                </div>
            </Container>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '4rem 0'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(10),
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: '1fr',
        }
    },
    gridItem: {
        textAlign: 'center',
        width: '200px'
    }
}))

export default GridSkills