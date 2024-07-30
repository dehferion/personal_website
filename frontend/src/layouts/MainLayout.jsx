import Menu from '../components/Menu';

const { Outlet } = require('react-router-dom');

const MainLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default MainLayout;
