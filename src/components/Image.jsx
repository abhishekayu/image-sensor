import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        height: 300,
        width: '100%',
        objectFit:'cover',
        borderRadius: 20,
        backgroundColor: 'black'
    }
    
})

const Image = ({ image }) => {
    const classes = useStyles();
    return (
        <Card className="card">
            <img className={classes.image} src={image.largeImageURL} alt={image.user} />
        </Card>
    )
}

export default Image;