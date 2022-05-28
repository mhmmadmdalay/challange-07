import Navbar from "../../component/navBar"
import Banner from "../../component/Banner"
import BannerDua from "../../component/BannerDua"
import ContainerWhyUs from "../../component/ContainerWhyUs"
import Testimonial from "../../component/Testimonial"
import BlueBanner from "../../component/BlueBanner"
import Accordion from "../../component/Accordion"
import Footer from "../../component/Footer"

import React from "react";


const Home = () => {
    return (
        <div> 
            <Navbar/>
            <Banner/>
            <BannerDua/>
            <ContainerWhyUs/>
            <Testimonial/>
            <BlueBanner/>
            <Accordion/>
            <Footer/>
        </div>
    )
}

export default Home ;