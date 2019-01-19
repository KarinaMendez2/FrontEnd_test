import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MediaCard from './MediaCard';

import img1 from './img/binoculars.jpg';
import img2 from './img/dizzy.jpeg';
import img3 from './img/girl.jpeg';
import img5 from './img/boy.jpeg';

import img8 from './img/cat.jpeg';
import img9 from './img/photo.jpeg';
import img10 from './img/dog.jpeg';
import img12 from './img/hat.jpeg';

import img14 from './img/hat2.jpeg';
import img15 from './img/big_dog.jpeg';
import img16 from './img/man.jpeg';


import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography component="p" className="grid_title">
        Viewing<strong> 16</strong> of <strong>40 </strong>results.
      </Typography>

      <Grid container spacing={24}>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="1. Claus Asil" status="offline" img={img1}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="2. Jasper Barham" status="online" img={img2}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="3. Sue Wilhem" status="online" img={img3}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="4. Alex Putt" status="busy" profile="turq" letters="AP" img=''></MediaCard>
        </Grid>

        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="5. Brill Yard" status="busy" img={img5}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="6. Hae Schmidt" status="online" profile="blue" letters="HS" img=''></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="7. Rico Alverez" status="online" profile="turq" letters="RA" img=''></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="8. Eurn Blinn" status="online" img={img8}></MediaCard>
        </Grid>

        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="9. Karsten Dass" status="offline" img={img9}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="10. Reggie Ng" status="offline" img={img10}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="11. Nicolo Pigg" status="busy" profile="blue" letters="NP" img=''></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="12. Abbey Goetsch" status="online" img={img12}></MediaCard>
        </Grid>

        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="13. Charlie Nedeau" status="online" img={img9}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="14. Susan Slezak" status="online" img={img14}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="15. Sue Wilhem" status="busy" img={img15}></MediaCard>
        </Grid>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <MediaCard title="16. Alex Putt" status="offline" img={img16}></MediaCard>
        </Grid>
      </Grid>

      <div className="pagination">
        <Typography component="span" className="arrow">
          <ChevronLeft />
        </Typography>

        <Typography component="span" className="num">
          1
        </Typography>
        <Typography component="span" className="num">
          2
        </Typography>
        <Typography component="span" className="num">
          3
        </Typography>
        
        <Typography component="span" className="arrow">
          <ChevronRight />
        </Typography>

      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);