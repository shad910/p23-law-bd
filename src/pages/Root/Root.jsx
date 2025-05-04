import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import NavBar from '../../components/Header/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    const location = useLocation();
    const noFooterPaths = ['/contact-us'];

    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <NavBar></NavBar>
                {isNavigating && (
                    <div className="flex justify-center">
                        <span className="loading loading-infinity loading-xl"></span>
                    </div>
                )}
                <Outlet></Outlet>
            </div>
            {!noFooterPaths.includes(location.pathname) && <Footer />}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Root;