import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    component: {
        background: '#000'
    }
})

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position="sticky">
            <Toolbar>
                <FavoriteIcon />
                <Typography variant="h5" style={{marginLeft: 10}}>Image Sensor</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;