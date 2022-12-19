import React from 'react'
import { useNavigate } from "react-router-dom";
import routes from '../../utils/routes';

export default function ProfileTile({ title, asset }) {


    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate(routes.browse)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img
                onClick={navigateToMain}
                className='profile-tile'
                src={asset} />
            <div className='display-name'>{title}</div>
        </div>
    )
}
