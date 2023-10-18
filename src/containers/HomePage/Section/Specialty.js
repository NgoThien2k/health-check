import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import SpecialtyImg from "../../../assets/specialty/chuyenkhoa.jpg";
import {LANGUAGES} from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import {changeLanguageApp} from '../../../store/actions';

class Specialty extends Component {
    changeLanguage = (language)=>{
        this.props.changeLanguageAppRedux(language)
        //fire redux event: actions

    }
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'><FormattedMessage id="specialty.baner"/></span>
                        <button className='btn-section'><FormattedMessage id="specialty.more"/></button>
                    </div>
                    <div className='specialty-body'> 
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image'/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' src={SpecialtyImg}/>
                                <div><FormattedMessage id="specialty.musculoskeletal"/></div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux:(language)=>{dispatch(changeLanguageApp(language))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
