import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <div>nav bar</div>

            <Box sx={{ paddingLeft: '64px', height: '100vh' }}>
                <Outlet />
            </Box>
        </>
    );
};

export default Index;
