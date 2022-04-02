import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Index = () => {
    return (
        <>
            <Nav>
                <Img src="assets/images/vinn_logo_black.png" />
                <div>search</div>
                <div>
                    <LinkStyled to="/">Home</LinkStyled>
                    <LinkStyled to="shop">Shop</LinkStyled>
                    <LinkStyled to="get-approved">Get Approved</LinkStyled>
                </div>
            </Nav>

            <Box sx={{ paddingLeft: '64px', height: '100vh' }}>
                <Outlet />
            </Box>
        </>
    );
};

export default Index;

const Nav = styled.nav`
    height: 62px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
`;

const Img = styled.img`
    height: 16px;
    width: 56px;
    margin: 22px;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #000000;
    text-transform: uppercase;
    margin: 0 25px;
    line-height: 62px;
`;
