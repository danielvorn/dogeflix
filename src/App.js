import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
    return (
        <div className="App">
            <Row title="Dogeflix ORIGINALS"
                 fetchUrl={requests.getNetflixOriginals}
                 isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.getTrending}/>
            <Row title="Top Rated" fetchUrl={requests.getTopRated}/>
            <Row title="Action" fetchUrl={requests.getActionMovies}/>
            <Row title="Comedy" fetchUrl={requests.getComedyMovies}/>
            <Row title="Horror" fetchUrl={requests.getHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.getRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.getDocumentaries}/>
        </div>
    );
}

export default App;
