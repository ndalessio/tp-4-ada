import React from 'react';
import FeatureContainer from 'components/FeatureContainer/FeatureContainer';
import './FeaturesContainer.scss';

const FeaturesContainer = () =>(
    <div className='features-container'>
        <FeatureContainer
        title='Explore the World'
        description='Start to discrover. We will help you to visit any place you can imagine'
        >
        </FeatureContainer>
        <FeatureContainer
        title='Gifts & Rewards'
        description='Get even more from our service. Spend less and travel more'
        >
        </FeatureContainer>
        <FeatureContainer
        title='Best Prices'
        description='We are comparing hundreds travel websites to find best price for you'
        >
        </FeatureContainer>
        <FeatureContainer
        title='27/7 Support'
        description='Contact us anytime, anywhere. We will resolve any issues ASAP'
        >
        </FeatureContainer>
    </div>
)

export default FeaturesContainer