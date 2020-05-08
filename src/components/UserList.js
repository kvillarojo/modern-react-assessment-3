import React from 'react'
import { connect } from 'react-redux'
import {fetchUserPost} from "../action";

const UserDetail = (props) => {
    const {data} = props;
    const loadUserPost = (userID, name) => {
        props.onSelectUser(userID,name);
        props.getPost(userID);
    }

    if(data) {
        if (data.length !== 0) {
            return data.map((x, i) => (
                <div key={i} className={'ui card'} style={{cursor: 'pointer'}}>
                    <div className="content" onClick={() => loadUserPost(x.id, x.name)}>
                        <div className={'ui two column grid container'}>
                            <div className={'twelve wide column'}>
                                <div className="header"> {x.name} </div>
                                <div className="meta">
                                    <span className="category">{x.company.name}</span>
                                </div>
                            </div>
                            <div className={'four wide column'}>
                                <div className="right floated author">
                                    <img className="ui circular large image"
                                         src="https://semantic-ui.com/images/avatar/small/matt.jpg" alt={''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return null
}

const mapStateToProps = ({ user }) =>  ({...user});

const mapDispatchToProps = {
    getPost: fetchUserPost
}

export default connect(mapStateToProps, mapDispatchToProps, null, )(UserDetail)

