import React, { useEffect, useState } from 'react'
import "./navbar.css"
import NetflixLogo from '../../assets/svgs/netflix-icon.svg'
import ProfileIcon from '../../assets/svgs/profile-icon-4.svg'
function Navbar() {
    let arrOptions = [{ id: 1, title: "Home" }, { id: 2, title: "TV Shows" }, { id: 3, title: "Movies" }, { id: 4, title: "News & Popular" }, { id: 5, title: "My List" }, { id: 6, title: "Browse by Language" }];

    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    console.log('Offset', offset)
    return (
        <div className={`container-navbar ${offset > 30 && `after-scroll`}`}>
            <div className='inner-container'>
                <img width={120} style={{ objectFit: 'contain' }} src={NetflixLogo} />
                {arrOptions.map((element, index) => <h5 style={{ paddingLeft: 16, color: index == 0 ? 'white' : '#B6B5B6' }}>{element.title}</h5>)}
            </div>

            <div className='inner-container'>
                <div style={{ color: '#fff', fontSize: 20 }} ><i className="fa fa-search" ></i></div>
                <h5 style={{ paddingLeft: 16, color: '#fff' }}>{'Children'}</h5>
                <div style={{ color: '#fff', fontSize: 20, paddingLeft: 16 }} ><i className="fa fa-bell" ></i></div>
                <img width={40} style={{ objectFit: 'contain', borderRadius: 6, marginLeft: 16 }} src={ProfileIcon} />
                <div style={{ color: '#fff', fontSize: 20, paddingLeft: 16 }} ><i className="fa fa-caret-down" ></i></div>
            </div>

        </div>
    )
}

export default Navbar