import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Handbook from "../../../assets/specialty/chuyenkhoa.jpg"


class HandBook extends Component {

    render() {
        
        return (
            <div className='section-share section-handbook'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'> 
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cơ xương khớp2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' src={Handbook}/>
                                <div>Cơ xương khớp 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);