import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Về chúng tôi
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="300px" 
                            src="https://www.youtube.com/embed/SNES5Y-tYxM?list=PLrA0qruVVdrgTU-jajrUTAwIcyM1aj4DE" 
                            title="BINZ - OK (Official Music Video)" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Mlem mlem</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
