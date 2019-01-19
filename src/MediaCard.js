import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LocationOn from '@material-ui/icons/LocationOn';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={'grid_card ' + props.profile}
          image={props.img}
          title="Contemplative Reptile"
        />
        { props.letters ? (
          <p className="default_avatar">{props.letters}</p>
        ) : ''}
        <p className={'status ' + props.status}></p>
        <CardContent className="content_margin">
          <Typography gutterBottom variant="h6" component="h2" className="card_top">
            { props.title }
          </Typography>
          <Typography component="p" className="card_description">
            <LocationOn /><span className="tag">Bishan, Singapore</span><span className="dot">&#8226;</span><span className="tag">5 miles away</span>
          </Typography>

          <Typography component="p" className="card_tags center">
            <span className="tag">Vlog</span><span className="dot">|</span><span className="tag">Cooking</span><span className="dot">|</span><span className="tag">Arts</span>
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions className="center">
        <Button size="small" color="primary" className="card_btn">
          View Channel
        </Button>
        <Button size="small" color="primary" className="card_btn">
          Send Message
        </Button>
      </CardActions>
    </Card>


  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);