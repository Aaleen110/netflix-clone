import React from 'react'
import './profiletile.css'
export default function ProfileTile({ title, asset, onPressTile }) {
    return (
        <div className='profile-main'>
            <img
                onClick={()=>onPressTile({title, asset})}
                className='profile-tile'
                src={asset} />
            <div className='display-name'>{title}</div>
        </div>
    )
}
