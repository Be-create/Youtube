import { IconButton, Paper } from '@mui/material'
import React from 'react'
import {Search} from "@mui/icons-material"
const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={()=>{}}

    sx={{
      borderRadius:"20",
      border:"1px solid red",
      pl:2,
      boxShadow:"none",
      mr:{ sm: 5}

    }}
    >
      <input 
      className='search-bar'
      placeholder='Search....'
      value=""
      onChange={()=>{}}
      >
        </input>
      <IconButton type='submit' sx={{ p:"10px", color:"red"}}>
        <Search />
      </IconButton>
      
    

    </Paper>
  )
}

export default SearchBar