import React from 'react'
import TilesRow from '../../components/tilesRow'
import requests from '../../services/requests'

export default function MainPage() {
  return (
    <div className='container'>

      {/* navbar */}
      <div style={{ height: '8%', backgroundColor: 'grey' }}></div>

      {/* cover */}
      <div style={{ height: '72%', backgroundColor: 'red' }}></div>

      {/* resuable component */}
      <div style={{ height: '20%', backgroundColor: 'olive' }}>

        <TilesRow title="Trending" requestUrl={requests.fetchTrending} />
        <TilesRow title="Top Rated" requestUrl={requests.fetchTopRated} />
      </div>
    </div>
  )
}
