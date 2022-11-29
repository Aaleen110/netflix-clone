import React from 'react'
import colors from '../../utils/colors'
import Text from '../text'

export default function ProfileTile({ title, asset }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
                className='profile-tile'
                src={asset} />
            <div className='display-name'>{title}</div>
        </div>
    )
}
