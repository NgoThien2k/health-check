import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStanding from './Section/OutStanding';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';


class HomePage extends Component {

    render() {
        let settings={
            dot: false,
            infinite: true,
            speed: 500,
            slidesToShow:4,
            slidesToScroll:1,
        };
        return (
            <div>
                <HomeHeader/>
                <Specialty settings={settings}/>
                <MedicalFacility settings={settings}/>
                <OutStanding settings={settings}/>
                <HandBook settings={settings}/>
                <About/>
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
