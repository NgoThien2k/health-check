import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import {LANGUAGES} from '../../utils/constant';
import {changeLanguageApp} from '../../store/actions'
class HomeHeader extends Component {

    changeLanguage = (language)=>{
        this.props.changeLanguageAppRedux(language)
        //fire redux event: actions

    }
    render() {
        let language = this.props.language;
        
        return (
            <React.Fragment>
                <div className='home-header-container'> 
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"homeheader.specialty"}></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id={"homeheader.searchdoctor"}></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"homeheader.heal-facility"}></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id={"homeheader.choose-room"}></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"homeheader.doctor"}></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id={"homeheader.select-doctor"}></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id={"homeheader.fee"}></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id={"homeheader.check-heal"}></FormattedMessage></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i>
                                <FormattedMessage id={"homeheader.support"}></FormattedMessage>
                            </div>
                            <div className={language===LANGUAGES.VI? 'language-vi active' :'language-vi'}><span onClick={()=>{this.changeLanguage(LANGUAGES.VI)}}>VN </span></div>
                            <div className={language===LANGUAGES.EN? 'language-en active' :'language-en'}><span onClick={()=>{this.changeLanguage(LANGUAGES.EN)}}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id={"banner.title1"}></FormattedMessage>
                        </div>
                        <div className='title2'>
                            <FormattedMessage id={"banner.title2"}></FormattedMessage>
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder="Tìm kiếm"></input>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id={"banner.child1"}></FormattedMessage>
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id={"banner.child2"}></FormattedMessage>
                                </div>
                                
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-procedures"></i>
                                </div>
                                <div className='text-child'>
                                <FormattedMessage id={"banner.child3"}></FormattedMessage>
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-syringe"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id={"banner.child4"}></FormattedMessage>
                                </div>
                                
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-flask"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id={"banner.child5"}></FormattedMessage>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
