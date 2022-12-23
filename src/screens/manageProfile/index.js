import React from 'react'
import ProfileTile from '../../components/profileTile';
import profiles from '../../utils/commonJson';

export default function ManageProfile() {
    return (
        <div className='container-manage-profile'>
            <div style={{ height: '35%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <div className='profile-title'>{"Who's watching?"}</div>
            </div>
            <div className='profile-container'>
                {profiles.map((profile) => {
                    return <ProfileTile
                        title={profile.name}
                        asset={profile.resource}
                    />
                })}
            </div>

            <div style={{ height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <div className='btn-manage-profile'>
                    Manage Profiles
                </div>
            </div>
        </div>
    )
}
