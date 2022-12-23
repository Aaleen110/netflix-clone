import React from 'react'
import { useNavigate } from "react-router-dom";
import routes from '../../utils/routes';
import './profiletile.css'

export default function ProfileTile({ title, asset }) {
    const navigate = useNavigate();
    const navigateToMain = (payload) => {
        localStorage.setItem('selectedProfile', JSON.stringify(payload));
        navigate(routes.browse)
    }

    return (
        <div className='profile-main'>
            <img
                onClick={()=>navigateToMain({title, asset})}
                className='profile-tile'
                src={asset} />
            <div className='display-name'>{title}</div>
        </div>
    )
}
