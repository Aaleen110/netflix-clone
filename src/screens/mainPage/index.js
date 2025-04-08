import React, { useEffect, useState, lazy } from 'react'
import Cover from '../../components/cover'
import Navbar from '../../components/navbar'
import { useProfile } from '../../utils/hooks/useProfile'
import requests from '../../services/requests'
import { MOVIE_CATEGORIES } from '../../utils/constants'

const TilesRow = lazy(() => import('../../components/tilesRow'))

export default function MainPage() {

  const { profile, loading } = useProfile()

  return (
    <div className='container-main-page'>

      {/* navbar */}
      <Navbar selectedProfile={profile} />

      {/* cover */}
      <Cover />

      {/* resuable component tile */}
      <div style={{ paddingTop: 16, }}>
        {/* passing special prop topRow for as top row is rendered differently in terms of size and design */}
        <TilesRow title={MOVIE_CATEGORIES.NETFLIX_ORIGINALS} requestUrl={requests.fetchTrending} topRow />

        {/* Rest of the tiles */}
        <TilesRow title={MOVIE_CATEGORIES.TOP_RATED} requestUrl={requests.fetchTopRated} />
        <TilesRow title={MOVIE_CATEGORIES.POPULAR} requestUrl={requests.fetchPopular} />
        <TilesRow title={MOVIE_CATEGORIES.TV_SHOWS} requestUrl={requests.fetchTVShows} />
        <TilesRow title={MOVIE_CATEGORIES.COMEDIES} requestUrl={requests.fetchComedy} />
        <TilesRow title={MOVIE_CATEGORIES.ACTION} requestUrl={requests.fetchAction} />
        <TilesRow title={MOVIE_CATEGORIES.DOCUMENTARIES} requestUrl={requests.fetchDocumentaries} />
        <TilesRow title={MOVIE_CATEGORIES.HORROR} requestUrl={requests.fetchHorror} />
      </div>
    </div>
  )
}
