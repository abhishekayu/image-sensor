import { Box, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#30373D',
        borderRadius:20,
        border: '5px solid #000',
        '& > *': {
            margin: theme.spacing(1),
            marginLeft: theme.spacing(10),
            padding: theme.spacing(1),
        }
    }
}))

const BreadCrumb = ({onTextChange, onCountChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.component}>
            <TextField 
                onChange={(e) => onTextChange(e.target.value)}
                label="Search images" 
            />
            <TextField 
                onChange={(e) => onCountChange(e.target.value)}
                label="Number of images" 
                type="number"
            />
        </Box>
    )
}

export default BreadCrumb;