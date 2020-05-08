import React from 'react'
import { connect } from 'react-redux'
import {removeUserPost} from "../action";
import {Link} from "react-router-dom";
import {Loader} from "../common/loaders/loader";

const PostPreviewList = (props) => {
    const handleRemove = (id) => {
        props.remove(id);
    }

    const onRemovePost = ({removePost}) => {
        if(removePost.removeRequest){
            return 'delete...'
        }
        return 'delete'
    }

    if(props.userPost.isFetching){
        return  <Loader/>
    }

    if(props.userPost.data !== 0){
        return props.userPost.data.map((x, i) => (
            <div className="ui fluid card" id={`postNO_`+x.id} key={i}>
                <div className="content">
                    <div className="header">
                        {x.title}
                    </div>
                    <div className="description">
                        {x.body}
                    </div>
                </div>
                <div className="content">
                    <div className="container fright floated ">
                        <button
                            className="ui button"
                            onClick={(e) => handleRemove(x.id) }>
                            { onRemovePost(props) }
                        </button>
                        <Link to={{
                            pathname:'post',
                            state:{
                                title: x.title,
                                body: x.body
                            }
                        }} >
                            <button className="ui button"> view </button>
                        </Link>
                    </div>
                </div>
            </div>
        ))
    }
}

const filterDeleted = (list) => {
    if(list.data.length !== 0){
        const deleted_items = JSON.parse(localStorage.getItem('deleted_items'));
        if(deleted_items){
            const newlist = list.data.filter(value => {
                return deleted_items.indexOf(value.id) === -1
            });
            return {...list, data: newlist};
        }
    }
    return list;
}


const mapStateToProps = ({removePost,  userPost}) => ({
    removePost,
    userPost: filterDeleted(userPost)
})

const mapDispatchToProps = {
    remove: removeUserPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPreviewList)
