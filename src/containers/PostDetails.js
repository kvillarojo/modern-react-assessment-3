import React from 'react'

export const PostDetails = ({location }) => {
    const prevUrl = () => {
        window.history.back()
    }
    return (
        <div className="ui raised very padded text container segment" style={{marginTop: '25px'}}>
            <h2 className="ui header">{location.state.title}</h2>
            <p>
                {location.state.body}
            </p>
            <div className={'container'}>
                <button className="ui button" onClick={prevUrl}> Back </button>
            </div>
        </div>
    )
}
