import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class Outstanding extends Component {

    render() {
        
        return (
            <div className='section-share section-outstanding'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'> 
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding'/>
                                    <div className='position text-center'>
                                        <div>Bác sĩ A</div>
                                        <div>Răng hàm mặt</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding'/>
                                    <div className='position text-center'>
                                        <div>Bác sĩ L</div>
                                        <div>Răng hàm mặt</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding'/>
                                    <div className='position text-center'>
                                        <div>Bác sĩ B</div>
                                        <div>Răng hàm mặt</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding'/>
                                    <div className='position text-center'>
                                        <div>Bác sĩ C</div>
                                        <div>Răng hàm mặt</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding'/>
                                    <div className='position text-center'>
                                        <div>Bác sĩ D</div>
                                        <div>Răng hàm mặt</div>
                                    </div>
                                </div>
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Outstanding);
