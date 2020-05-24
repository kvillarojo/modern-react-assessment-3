import React from 'react';
import { connect } from 'react-redux'
import {addUserPost} from "../action";
import {PostModal} from "../common/Modals/PostModal";
import PostForm from "../common/Forms/postForm";

const AddPost = props => {
    let hasUser = !props.userID;
    let userId = props.userID

    if(hasUser){
        if(props.data.length !== 0){
            userId = props.data[0].userId
        }
    }

    const onSubmit = (data) => {
        props.newPost({...data, userId})
    }

    return (
        <PostModal
            isActive={false}
            modalTitle={"Add New Post..."}
            buttonName={'create new post'}
            buttonClassName={'fluid'}

        >
            {props.sendingRequest && <div className="ui blue message"> Adding new post...  </div> }
            {props.error &&  <div className="ui red message"> Failed to add post! </div>}
            {props.isAdded && <div className="ui green message"> Post added! </div> }

            <PostForm formDetails={onSubmit} />
        </PostModal>
    );
};

const mapStateToProps = ({userPost}) => ({
  ...userPost
})

const mapDispatchToProps = {
    newPost: addUserPost
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
