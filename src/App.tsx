import { Row } from './components/Row';
import { requests } from './request';

function App() {
  return (
    <div className='App'>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} /> {/* title プロパティが必要なようなので追加 */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  )
}

export default App
