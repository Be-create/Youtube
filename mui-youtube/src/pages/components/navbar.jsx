import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Icon, IconButton } from '@mui/material'
import icon from "../../assets/icon.png"
import Styles from "../Styles/styles.module.css"



function Navbar() {
  return (
    <Box className={Styles.navbar}>
        <Box className={Styles.iconbox1}>
<Icon fontSize='medium'>menu</Icon>
<img src={icon} alt="" />
        </Box>

    </Box>
  )
}

export default Navbar