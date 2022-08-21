import { Component} from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export class FormUserSocial extends Component {
  continue = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    // const { values} = this.props;
    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Social Media
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="github"
            name="github"
            label="Github"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="Linkedin"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
            defaultValue={values.linkedin}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={this.back} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>

                  <Button
                    variant="contained"
                    onClick={this.continue}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Submit
                  </Button>
                </Box>
    </React.Fragment>
    );
  }
}

export default FormUserSocial;