import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Button, Divider, TextField, Typography } from '@material-ui/core'
import Login from './screens/Login'
import Signup from './screens/Signup'
import FunctionEvent from './screens/FunctionEvent'
import ClassEvent from './screens/ClassEvent'

export default class App extends Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        
        <Signup />
      </div >
    )
  }
}
