import './App.css';
import requests from './component/request';
import Row from './component/row';
import Navbar from './component/Navbar';
import Header from './component/Header';
function App() {
  return (
    <>
       <Navbar></Navbar>
       <Header></Header>
      <div className='rows_div'>
       
          <Row title="Netflix Originals" isBigPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
          <Row title="Trending videos" isBigPoster={false} fetchUrl={requests.fetchTrending}/>
          <Row title="Top Rated" isBigPoster={false} fetchUrl={requests.fetchTopRated}/>
          <Row title="Romantic Movies" isBigPoster={false} fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Action Movies" isBigPoster={false} fetchUrl={requests.fetchActionMovies}/>
          <Row title="Horror Movies" isBigPoster={false} fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Comedy Movies" isBigPoster={false} fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Documentaries" isBigPoster={false} fetchUrl={requests.fetchDocumentaries}/>
      </div>
    </>
  );
}

export default App;
