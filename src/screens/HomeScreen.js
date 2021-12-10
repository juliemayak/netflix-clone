import React, { useState } from 'react';
//Components
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';

//API requests
import requests from '../requests';

//Styling
import './HomeScreen.css';

function HomeScreen() {
  const [activeRow, setActiveRow] = useState('');
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      {/* Rows */}
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'NETFLIX ORIGINALS'}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Top Rated'}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Trending Now'}
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Action Movies'}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Comedy Movies'}
        title="Comedy Movies"
        fetchUrl={requests.fecthComedyMovies}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Horror Movies'}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Romance Movies'}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        setActiveRow={setActiveRow}
        activeRow={activeRow === 'Documentaries'}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentationMovies}
      />
    </div>
  );
}

export default HomeScreen;
