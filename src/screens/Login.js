import { Grid, Box, Button, Typography, TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>

                <Grid container spacing={2} justifyContent={"center"} >

                    <Grid item xs={12} sm={8} md={4}>


                        <Box height={500} style={{ backgroundColor: "orange" }} border={1} textAlign={"center"} padding={5} border={"groove"}>
                            <Grid container spacing={2} justifyContent="center" >
                                <Grid item xs={12} sm={12} md={12}>


                                    <Typography variant="h3" > Login form </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <TextField id="outlined-basic"  label="Username" variant="outlined" fullWidth  />

                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />

                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Button variant="contained" >Submit</Button>

                                  
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} padding={5}>
                                        <Typography variant="h5" > Forgot Password? </Typography>

                                    </Grid>

                            </Grid>

                        </Box>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
