import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Button, TextField, Typography, InputLabel, Checkbox, FormControlLabel } from '@material-ui/core'

export default class Signup extends Component {
    render() {
        return (
            <div style={{ flex: 1 }}>

                <Grid container spacing={2} justifyContent={"center"} >

                    <Grid item xs={12} sm={8} md={4}>


                        <Box height={500} style={{ backgroundColor: "#d3d3d3" }} border={1} textAlign={"center"} padding={5} border={"dotted"}>
                            <Grid container spacing={2}  >
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography variant="h3" > SignupPage </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField  id="outlined-username" label="Username" variant="outlined"  style= {{backgroundColor:"#fff", borderRadius:5, borderWidth:1}} color="secondary" fullWidth>
                                    </TextField>

                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                <TextField  id="outlined-username" label="Username" type={"password"} variant="outlined" fullWidth>
                                    </TextField>

                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Box textAlign={"left"} flexDirection={"row"}>

                                    <FormControlLabel control={<Checkbox defaultChecked />} label="By signing up  you accept the terms of service and privacy of policy." />
                                    
                                    </Box>
                                </Grid>



                            </Grid>

                        </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


