import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class Header extends Component {
    render() {
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
                            <div className='languege-vi'>VN</div>
                            <div className='languege-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>NỀN TẢNG Y TẾ</div>
                        <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm kiếm'></input>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-child'>
                                    Khám Chuyên Khoa
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-child'>
                                    Khám Tổng Quát
                                </div>
                                
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-procedures"></i>
                                </div>
                                <div className='text-child'>
                                    Xét Nghiệm Y Học
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-syringe"></i>
                                </div>
                                <div className='text-child'>
                                    Sức khỏe tinh thần
                                </div>
                                
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-flask"></i>
                                </div>
                                <div className='text-child'>
                                    Khám Nha Khoa
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
