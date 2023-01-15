import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className='header'>
        <IconButton>
        <PersonIcon fontSize='Large' className='header__icon'/>
        </IconButton>

        <img
        className='header_logo'
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="h" />
        
        <IconButton>
        <ForumIcon fontSize='Large' className='header__icon'/>
        </IconButton>
        </div>
    )
}

export default Header;
