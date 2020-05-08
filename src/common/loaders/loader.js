import React from 'react'

const loaderStyle = {
    width: '100%',
    height: '500px',
    border: 'none'
}

export const Loader = () => (
    <div className="ui segment" style={loaderStyle}>
        <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
    </div>
)
