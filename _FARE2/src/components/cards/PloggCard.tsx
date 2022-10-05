import { FunctionComponent } from 'react'
import Image from 'next/image'
import './card.module.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type Props = {
    id :string,
    title? :string
    description? :string
    image? :string,
    avatar? :string,
    clickGoToItem? :any     //TODO
}


const PloggCard: FunctionComponent<Props> = ({ id,  title, description, image, avatar, clickGoToItem}) => {
    const defaultImage = 'https://assets.guebbit.com/plogging/images/default-park-image.jpg';
    /*
    <Image src={image || defaultImage}
           layout="fill"
           placeholder="blur"
           blurDataURL={ thumbnail }
    />
    */
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={ image || defaultImage }
            />
            <CardContent>
                <ListItemButton>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>

                <br/><br/><br/><br/><br/>

                <IconButton aria-label="add to favorites">
                    <FavoriteIcon key={'delete_' + id} />
                </IconButton>

                <br/><br/><br/><br/><br/>

                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default PloggCard;