import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Icon, IconButton } from '@mui/material'
import icon from "../assets/icon.png"




function Navbar() {
  return (
    <Box >
        <Box>
<Icon fontSize='medium'>menu</Icon>
<img src={icon} alt="" />
        </Box>

    </Box>
  )
}

export default Navbar