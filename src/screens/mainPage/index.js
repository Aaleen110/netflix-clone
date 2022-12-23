import React, { useEffect, useState } from 'react'
import Cover from '../../components/cover'
import Navbar from '../../components/navbar'
import TilesRow from '../../components/tilesRow'
import requests from '../../services/requests'

export default function MainPage() {

  const [selectedProfile, setSelectedProfile] = useState({})

  useEffect(() => {

    async function getSelectedProfile() {
      const selectedProfile = await localStorage.getItem('selectedProfile');
      setSelectedProfile(JSON.parse(selectedProfile));
    };
    getSelectedProfile();

  }, [])
  return (
    <div className='container-main-page'>

      {/* navbar */}
      <Navbar selectedProfile={selectedProfile} />

      {/* cover */}
      <Cover />

      {/* resuable component */}
      <div style={{ paddingTop: 16, }}>
        <TilesRow title="Netflix Originals" requestUrl={requests.fetchTrending} topRow />
        <TilesRow title="Top Rated" requestUrl={requests.fetchTopRated} />
        <TilesRow title="Popular Now" requestUrl={requests.fetchPopular} />
        <TilesRow title="TV Shows" requestUrl={requests.fetchTVShows} />
        <TilesRow title="Comedies" requestUrl={requests.fetchComedy} />
        <TilesRow title="Action Movies" requestUrl={requests.fetchAction} />
        <TilesRow title="Documentaries" requestUrl={requests.fetchDocumentaries} />
        <TilesRow title="Horror Movies" requestUrl={requests.fetchHorror} />
      </div>
    </div>
  )
}
