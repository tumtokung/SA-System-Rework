import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useSession, signOut } from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { logoSA } from 'public/assets';

function Navbar({ toggleLeftBar }) {
    // hook
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const { data: session } = useSession();
    const router = useRouter()

    //function
    const toggleProfileMenu = () => setIsOpenProfileMenu(prev => !prev);
    const logOut = () => {
        toggleProfileMenu()
        signOut()
    }

    const MenuProfile = () => {
        return (
            <Menu
                id="menu-appbar"
                anchorEl={isOpenProfileMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(isOpenProfileMenu)}
                onClose={toggleProfileMenu}
            >
                <MenuItem onClick={logOut}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="subtitle1"> ออกจากระบบ </Typography>
                </MenuItem>
                <MenuItem onClick={toggleProfileMenu}>
                    <ListItemIcon>
                        <PermIdentityIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="subtitle1"> ข้อมูลผู้ใช้ </Typography>
                </MenuItem>
            </Menu>
        );
    }

    return (
        // <AppBar position="static">
            <Stack sx={{py: 2, bgcolor: "secondary.main"}} flexDirection="row" alignItems="center">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={toggleLeftBar}
                >
                    <MenuIcon color="white" fontSize="large" />
                </IconButton>
                {/* <Box sx={{width: 50, ml: "auto"}}>
                    <Image src={logoSA} alt="logo" width={50} />
                </Box> */}
                <Typography variant="body2" component="div" color="text.white" sx={{ mx: "auto"}}>
                    ระบบคำร้องรับสมัครนิสิตช่วยปฎิบิติงาน
                </Typography>

                {session ?
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleProfileMenu}
                        >
                            <Avatar alt="Profile avater" src={session?.user?.image} />
                        </IconButton>
                        <MenuProfile />
                    </>
                    :
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => signOut()}
                    >
                        <LogoutIcon />
                    </IconButton>
                }

            </Stack>
        // </AppBar>
    )
}

export default Navbar;