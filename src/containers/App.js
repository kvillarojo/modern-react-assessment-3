import React from 'react';
import UserDetail from "../components/UserList";

import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {loadUser} from "../action";
import PreviewPostContainer from "../components/PreviewPostContainer";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            userID: null,
            name: ''
        }
    }

    componentDidMount(){
       this.props.loadUser();
    }

    handleProps = (userID, name) => {
        localStorage.setItem('user_name', name);
        this.setState({ userID, name })
    }

    render() {
        return (
            <div className={"ui container"} style={{marginTop: '25px'}}>
                <div className="ui two column grid container">
                    <div className="column">
                        <h1> Members </h1>
                        <div className={'container'}>
                            <div className={'ui cards'}>
                                <UserDetail onSelectUser={this.handleProps}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <PreviewPostContainer userProps={this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {
    loadUser
})(App))
