import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        height: 300,
        width: '96%',
        objectFit:'cover',
        borderRadius: 20,
        backgroundColor: 'black',
        boxShadow: '0px 0px 10px #30373D',
        padding: 5,
    }
    
})

const Image = ({ image }) => {
    const classes = useStyles();
    return (
            <img className={classes.image} src={image.largeImageURL} alt={image.user} />
    )
}

export default Image;
