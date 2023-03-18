import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import NaomiMardonCV from '../../utils/NaomiMardonCV.pdf';
import './navbar.css';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className='navbar' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to="/">
                            NM
                        </NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleOpenNavMenu }
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorElNav }
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={ Boolean(anchorElNav) }
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center">
                                    <NavLink
                                        to="/about"
                                        end
                                    >
                                        About Me
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center">
                                    <NavLink
                                        to="/projects"
                                        end
                                    >
                                        Projects
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center">
                                    <NavLink
                                        to="/contact"
                                        end
                                    >
                                        Get In Touch
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleCloseNavMenu }>
                                <Typography textAlign="center">
                                    <NavLink
                                        to={ NaomiMardonCV }
                                        target="_blank"
                                        end
                                    >
                                        Resume
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to="/">
                            NM
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink
                                to="/about"
                                end
                            >
                                About Me
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink
                                to="/projects"
                                end
                            >
                                Projects
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink
                                to="/contact"
                                end
                            >
                                Get In Touch
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink
                                to={ NaomiMardonCV }
                                target="_blank"
                                end
                            >
                                Resume
                            </NavLink>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;