import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationOn from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';

import Favorite from '@material-ui/icons/Favorite';
import WbIncandescent from '@material-ui/icons/WbIncandescent';
import Close from '@material-ui/icons/Close';


import Button from '@material-ui/core/Button';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div className="center full_width">
      <Typography variant="h3" className="title">
        Sed augue ipsum egestas
      </Typography>
      <br/>
      <Typography variant="h5" className="subtitle">
        Curabitur nisi. Vivamus consectetuer hendrerit.
      </Typography>
      <br/>

      <FormControl className="general_input md_wd" >
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationOn />
            </InputAdornment>
          }
          value="Palau Ujong, Singapore"
        />
      </FormControl>

      <FormControl className="general_input radioBtnIcon sm_wd" >
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <RadioButtonChecked />
            </InputAdornment>
          }
          value="5 mi"
        />
      </FormControl>

      <FormControl className="general_input endAdornment lg_wd" >
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Favorite />
            </InputAdornment>
          }
          value="Cooking"
          endAdornment={
            <InputAdornment position="end">
              <Close />
            </InputAdornment>
          }
        />
      </FormControl>

      <TextField
        className="general_input lightIcon endAdornment lg_wd"
        id="input-with-icon-textfield"          
        value="Italian Cuisine"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WbIncandescent />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Close />
            </InputAdornment>
          ),
        }}
      />

      
        <Button variant="contained" className="search_btn">
            SEARCH
        </Button>

      
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);