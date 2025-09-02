import { Row } from './components/Row';
import { requests } from './request';
import { Banner } from './components/Banner'; // /index は省略できるが /Banner まで省略することはできないようだ。なぜだろう
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header /> {/* ←条件なしで常にここにいる */}

      <Banner />

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
