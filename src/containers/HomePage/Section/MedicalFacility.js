import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFaculity.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalImg from "../../../assets/medical/kham-tim-mach.jpg"

class MedicalFacility extends Component {

    render() {
        let settings={
            dot: false,
            infinite: true,
            speed: 500,
            slidesToShow:4,
            slidesToScroll:1,
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Bác sĩ từ xa qua Video</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'> 
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='specialty-img'/>
                                <div>Hệ thống bệnh viện 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-img'/>
                                <div>Hệ thống bệnh viện 2</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-img'/>
                                <div>Hệ thống bệnh viện 3</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-img'/>
                                <div>Hệ thống bệnh viện 4</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-img'/>
                                <div>Hệ thống bệnh viện 5</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='specialty-img' src={MedicalImg}/>
                                <div>Hệ thống bệnh viện 6</div>
                            </div>
                        </Slider>
                    </div>
                    
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
