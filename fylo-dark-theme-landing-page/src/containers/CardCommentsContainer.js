import React from 'react'
import BasicCard from '../components/BasicCard'
import { makeStyles } from '@material-ui/core'


//people
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

const person1 = {
    name: 'Satish Patel',
    title: ' Founder & CEO, Huddle',
    text: 'Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has  become a well - oiled collaboration machine.'
};
const person2 = {
    name: 'Bruce McKenzie',
    title: 'Founder & CEO, Huddle',
    text: 'Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has  become a well - oiled collaboration machine.'
};
const person3 = {
    name: 'Iva Boyd',
    title: 'Founder & CEO, Huddle',
    text: 'Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has  become a well - oiled collaboration machine.'
};

const CardCommentsContainer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <BasicCard profile={profile1} text={person1.text} name={person1.name} title={person1.title} />
            <BasicCard profile={profile2} text={person2.text} name={person2.name} title={person2.title} />
            <BasicCard profile={profile3} text={person3.text} name={person3.name} title={person3.title} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: '1fr',
        }
    }
}))

export default CardCommentsContainer