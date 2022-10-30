import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { logo } from '../utils/contants'
const Navbar = () => (
  <Stack
  direction="row"
  alignItems="center"
  p={2}
  sx={{ position: "sticky" , background :"black",top: 0, justifyContent : "space-between"}}
  margin="0"
  >
<Link to="/" style={{ display : "flex"}}>
  <img src={logo} alt="logo" height={45} />
</Link>
  </Stack>
)

export default Navbar