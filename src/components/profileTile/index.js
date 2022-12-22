import React from 'react'
import { useNavigate } from "react-router-dom";
import routes from '../../utils/routes';
import './profiletile.css'

export default function ProfileTile({ title, asset }) {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate(routes.browse)
    }

    return (
        <div className='profile-main'>
            <img
                onClick={navigateToMain}
                className='profile-tile'
                src={asset} />
            <div className='display-name'>{title}</div>
        </div>
    )
}
