import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Index = () => {
    return (
        <>
            <Nav>
                <div>logo</div>
                <div>search</div>
                <div>links</div>
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
