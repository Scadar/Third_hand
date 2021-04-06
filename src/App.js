import './App.scss';
import React from 'react';
import Header from "./components/header/Header";
import ThBreadcrumb from "./components/breadcrumb/ThBreadcrumb";
import ShopFilters from "./components/shopFilter/ShopFilters";
import ShopCard from "./components/shopCard/ShopCard";
import Footer from "./components/footer/Footer";


let App = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <ThBreadcrumb/>
                <ShopFilters/>
                <ShopCard/>
            </div>
            <Footer />
        </>
    );
}
export default App;
