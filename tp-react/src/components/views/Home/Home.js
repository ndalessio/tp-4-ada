import React from 'react';
import Nav from '../../Nav/Nav'
import './Home.scss';
import SearchContainer from 'components/SearchContainer/SearchContainer';
import FeaturesContainer from 'components/FeaturesContainer/FeauteresContainer';
import Footer from 'components/Footer/Footer';

const Home = () => (
    <div className='home'>
        <Nav></Nav>
        <SearchContainer></SearchContainer>
        <FeaturesContainer></FeaturesContainer>
        <Footer></Footer>
    </div>
)

export default Home

