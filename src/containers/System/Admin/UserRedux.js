import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from '../../../services/userService';
import {LANGUAGES}  from '../../../utils/constant';
import * as action from '../../../store/actions';
class UserRedux extends Component {
    constructor(props){
        super(props);
        this.state = {
            genderArr: [],
        }
    }
    async componentDidMount() {

        this.props.getGenderStart();
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //        this.setState({
        //             genderArr:res.data
        //        })
        //     }
        //     console.log("con sô respone",res)
        // } catch (error) {
        //     console.log(error)
        // }
    }


    render() {
        console.log("hoi 2 lần",this.state)
        let genders = this.state.genderArr;
        let language = this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title'>Quản lý người dùng Healthy Check</div>
                <div className="user-redux-body" >
                    <div className='container'>
                            <form>
                                {/* Email & Password */}
                                <div class="row">
                                    <div class="col-12 my-3"><FormattedMessage id="manage-user.add"/></div>
                                    <div class="form-group col-md-6">
                                    <label for="inputEmail4"><FormattedMessage id="manage-user.email"/></label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="inputPassword4"><FormattedMessage id="manage-user.password"/></label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                    </div>
                                </div>
                                {/* First Name & Last Name */}
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="inputEmail4"><FormattedMessage id="manage-user.firstname"/></label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="FirstName"/>
                                        </div>
                                        <div class="col-md-6">
                                        <label for="inputPassword4"><FormattedMessage id="manage-user.lastname"/></label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="LastName"/>
                                    </div>
                                </div>
                                {/* Address */}
                                <div class="form-group">
                                    <label for="inputAddress2"><FormattedMessage id="manage-user.address"/></label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                {/* Gender & Position */}
                                <div class="row">
                                    <div class="form-group col-3">
                                    <label for="inputCity"><FormattedMessage id="manage-user.gender"/></label>
                                    <select id="inputState" class="form-control">
                                    {genders && genders.length > 0 && genders.map((item,index)=>{
                                        return(
                                            <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        );
                                    })}
                                        
                                    </select>
                                    </div>
                                    <div class="form-group col-3">
                                    <label for="inputState"><FormattedMessage id="manage-user.position"/></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                    {/* Role & Image */}
                                    <div class="form-group col-3">
                                    <label for="inputZip"><FormattedMessage id="manage-user.role"/></label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                    </div>
                                    <div class="form-group col-3">
                                    <label for="inputState"><FormattedMessage id="manage-user.image"/></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3"><FormattedMessage id="manage-user.save"/></button>
                            </form>
                        </div>
                    </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart:()=>dispatch(action.fetchGenderStart)
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux:(language)=>{dispatch(actions.changeLanguageApp(language))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
