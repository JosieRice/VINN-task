import { Route, Routes } from 'react-router-dom';
import NotFound from 'routes/404/Index';
import Home from 'routes/home/Index';
import Shop from 'routes/shop/Index';
import GetApproved from 'routes/get-approved/Index';
import NavBar from 'ui-library/NavBar';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="get-approved" element={<GetApproved />} />
                {/* Route Not Found -> show 404 page */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Index;
