import { Box, Button } from '@material-ui/core'
import React from 'react'
var num=1;
function show(){
    console.log("Hello " + num);
    num=num+1;
}

export default function FunctionEvent() {
    return (
        <div>
            <Box padding={5}>
                <Button variant="contained" onClick={ () => show()}>Click me</Button>
            </Box>
        </div>
    )
}
