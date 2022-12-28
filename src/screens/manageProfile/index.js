import React from 'react'
import ProfileTile from '../../components/profileTile';
import profiles from '../../utils/commonJson';
import { useNavigate } from "react-router-dom";
import routes from '../../utils/routes';

export default function ManageProfile() {
    const navigate = useNavigate();

    function onPressTile(payload){
        //Setting selected profile in local storage
        localStorage.setItem('selectedProfile', JSON.stringify(payload));
        navigate(routes.browse)
    }
    return (
        <div className='container-manage-profile'>
            <div className='who-is-watching-container'>
                <div className='profile-title'>{"Who's watching?"}</div>
            </div>
            <div className='profile-container'>
                {profiles.map((profile) => {
                    return <ProfileTile
                        title={profile.name}
                        asset={profile.resource}
                        onPressTile={onPressTile}
                    />
                })}
            </div>

            <div className='btn-manage-profile-container'>
                <div className='btn-manage-profile'>
                    Manage Profiles
                </div>
            </div>
        </div>
    )
}
