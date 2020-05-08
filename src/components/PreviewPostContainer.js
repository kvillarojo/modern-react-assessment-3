import React from 'react';
import { connect } from 'react-redux'
import AddPost from "./AddPost";
import PostPreview from "./PostPreviewList";

const PreviewPostContainer = (props) => {
    const {userID, name} = props.userProps
    let saveName = name;

    if(!name){
        saveName = localStorage.getItem('user_name')
    }

    if(userID || props.data.length !== 0){
        return (
            <div>
                <h1> { saveName } Post </h1>
                <div className={'container'}>
                    <AddPost
                        userID={userID}
                    />
                    <br />
                    <div className={"ui cards"}>
                        <PostPreview />
                    </div>
                </div>
            </div>
        )
    }

    return null
}

const mapStateToProps = ({userPost}) => ({...userPost})

export default connect(mapStateToProps)(PreviewPostContainer)
