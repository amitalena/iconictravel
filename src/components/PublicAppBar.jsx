import { useEffect, useState } from 'react';
import {
    AppBar, Box, Button, Divider, IconButton, Stack, Toolbar, Typography, useTheme, Avatar, Menu, MenuItem, Chip
} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { Close as CloseIcon, MenuRounded as MenuIcon, LogoutOutlined, Email } from '@mui/icons-material';
import { menuData } from '../common/menuData';
import DropdownMenu from '../common/DropDownMenu';
import CallIcon from '@mui/icons-material/Call';

const PublicAppBar = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isLoggedIn = Boolean(localStorage.getItem('token'));

    useEffect(() => {
        const handleScroll = () => setScrolling(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => setOpen((prev) => !prev);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar elevation={0} position="sticky" sx={{ backdropFilter: scrolling ? '#FFFFFF' : 'none', background: 'transparent' }}>
            {/* Top Toolbar */}
            <Box
                sx={{
                    px: { md: theme.spacing(1), lg: theme.spacing(17), xs: theme.spacing(2) },
                    py: 1,
                    background: '#00314C'
                }}
                disablegutters="true"
            >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Stack direction={'row'} spacing={1} alignItems={'center'}><CallIcon fontSize='30px' /> <Typography variant='body2' >+91-8130883907</Typography></Stack>
                        <Stack direction={'row'} spacing={1} alignItems={'center'}><Email fontSize='30px' /><Typography variant='body2'>info@iconictravel.in</Typography></Stack>
                    </Box>
                    <Typography component={Link} to='/employeelogin' variant='body2' style={{ textDecoration: 'none', color: theme.palette.info.light }}>Pay Now</Typography>
                </Stack>
            </Box>
            <Toolbar disableGutters>
                <IconButton aria-label="menu" onClick={handleMenuToggle} sx={{ display: { md: 'none', xs: 'block' } }} >
                    {open ? <CloseIcon /> : <MenuIcon sx={{ color: theme.palette.info.dark }} />}
                </IconButton>

                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', px: { md: 2, lg: 17, xs: 2 } }}>
                    <Typography variant='h5' sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            Iconic<Typography component={'span'} sx={{ color: '#FF0343' }}>Travel</Typography>
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuData?.map((menuItem, index) => (
                            <DropdownMenu
                                key={index}
                                data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500"
                                items={[menuItem]}
                            />
                        ))}
                    </Box>
                    <Stack direction='row' gap={2}>
                        {isLoggedIn ? (
                            <Chip avatar={<Avatar />} label="Profile" variant="outlined" onClick={handleMenuOpen} sx={{ cursor: 'pointer' }} />
                        ) : (
                            <Stack direction='row' spacing={1}>
                                <Button variant='contained' size='small' sx={{ fontSize: '10px', backgroundColor: '#FF0343' }} onClick={() => navigate('/register')}>
                                    Register
                                </Button>
                                <Button variant='outlined' size='small' sx={{ fontSize: '10px', border: '1px solid #FF0343', color: '#FF0343' }} onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </Stack>
                        )}
                    </Stack>
                </Box>
            </Toolbar>
            {/* <Divider /> */}
            {/* Mobile Menu */}
            <Box>
                {open && (
                    <Menu elevation={1} open={open} sx={{ mt: -1, }} onClose={handleMenuToggle}>
                        <Stack sx={{ px: 2, width: 250, height: '85vh' }}>
                            <Box sx={{ display: { xs: "flex", md: "block" }, gap: 2 }}>
                                {menuData?.map((menuItem, index) => (
                                    <DropdownMenu
                                        key={index}
                                        data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500"
                                        items={[menuItem]}
                                    />
                                ))}
                            </Box>
                            {isLoggedIn && (
                                <MenuItem onClick={handleLogout}>
                                    <LogoutOutlined sx={{ fontSize: '18px', color: '#717DA4', mr: 1 }} />
                                    Logout
                                </MenuItem>
                            )}
                        </Stack>
                    </Menu>
                )}
            </Box>

            {/* Profile Menu */}
            <Menu elevation={1} sx={{ mt: 2 }} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <Stack spacing={1} sx={{ p: 2, width: 250 }}>
                    <Typography variant='h6' fontWeight='bold' textAlign='center'>Amit Kumar</Typography>
                    <Typography variant='body2' textAlign='center'>Full Stack Web Developer</Typography>
                    <Typography variant='body2' textAlign='center'>amitk221003@gmail.com</Typography>
                    <Divider />
                    <MenuItem onClick={handleClose} component={Link} to="/profile" sx={{ color: '#304ffe' }}>
                        View & Update Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <LogoutOutlined sx={{ fontSize: '18px', color: '#717DA4' }} /> Logout
                    </MenuItem>
                </Stack>
            </Menu>
        </AppBar>
    );
};

export default PublicAppBar;
