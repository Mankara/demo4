import { Box, Button } from '@material-ui/core'
import React, { Component } from 'react'
var num =1;
export default class ClassEvent extends Component {
    show = () =>{
        console.log("Class " + num);
        num=num+1;
    }



    render() {
        return (
            <div>
                <Box padding={5}>
                    <Button variant="contained" color="secondary" onClick={() => this.show()}>Click me</Button>
                </Box>
            </div>
        )
    }
}
