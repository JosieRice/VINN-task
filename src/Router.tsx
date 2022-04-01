import { Route, Routes } from 'react-router-dom';
import Home from 'routes/home/Index';
import Signin from 'routes/signin/Index';
import NotFound from './NotFound';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Signin />} />

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
