import * as React from 'react';
import { AppBar, Dialog, Card, BoX, Toolbar, IconButton, Typography, Container, Avatar, Button, Tooltip, MenuItem, Box, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import ExploreIcon from '@mui/icons-material/Explore'
import HomeIcon from '@mui/icons-material/Home'
// import Image from 'next/image';
import insta from '../Assets/Instagram.JPG';
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom';
import Comment from "./Comment";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = (props) => {
    const { logout } = React.useContext(AuthContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (id) => {
        setAnchorElUser(id);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    const handleLogout = async () => {
        await logout();
    }


    return (
        <AppBar position='static' className='navbar'>
            <Container maxWidth='x1'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                    >
                        {/* <Image src={insta} height={55} width={200} /> */}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                    </Box>

                    <Box>
                        <Link to="/feed" style={{ color:'white' }}>
                            <HomeIcon style={{ backgroundColor: 'grey', height: '2.2rem', width: '3rem', borderRadius: '1rem', marginTop: '0.2rem' }} />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0 }} className='nav-icons-container'>
                        <Toolbar title='Open Profile'>
                            <IconButton sx={{ p: 0 }}>
                                <Link to="/profile" style={{ textDecoration: "red" }}>
                                    <Avatar alt='Remy Sharp' src='/static/image/avatar/2.jpg' sx={{ margin: '0.5rem' }} />
                                </Link>
                            </IconButton>
                        </Toolbar>
                        {/* <Menu sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            optn={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography >Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => {
                                handleLogout()
                                handleCloseUserMenu()
                            }}>
                                <Typography >
                                    <Link to="/login" style={{ textDecoration: "none" }}>
                                        Logout
                                    </Link>
                                </Typography>
                            </MenuItem>
                        </Menu> */}
                    </Box>
                    <Box>
                        <Button sx={{ backgroundColor: 'red' }}>
                            <Link to="/login" style={{ textDecoration: "red" }}>
                                Logout
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;