import React from 'react';
import Nav from '../../components/Nav/Nav'
import './Home.scss';
import SearchContainer from 'components/SearchContainer/SearchContainer';
import FeaturesContainer from 'components/FeaturesContainer/FeauteresContainer';
import Footer from 'components/Footer/Footer';
import CurrencyModal from 'components/CurrencyModal/CurrencyModal';

const Home = () => (
    <div className='home'>
        <Nav></Nav>
        <CurrencyModal></CurrencyModal>
        <SearchContainer></SearchContainer>
        <FeaturesContainer></FeaturesContainer>
        <Footer></Footer>
    </div>
)

export default Home

