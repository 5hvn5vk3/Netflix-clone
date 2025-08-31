import { Row } from './components/Row';
import { requests } from './request';

function App() {
  return (
    <div className='App'>
      <p className='bg-red-500'>TailWindCSS テスト</p>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} /> {/* title プロパティが必要なようなので追加 */}
    </div>
  )
}

export default App
