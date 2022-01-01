import { Grid } from '@material-ui/core';
import Image from './Image';
import "./img.css"

const Images = ({ data }) => {
    console.log(data);
    return (
        <Grid container className="abs">
            {
                data.map(image => (
                    <Grid xs={3} item>
                        <Image key={image.id} image={image} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Images;