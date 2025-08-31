import { Row } from './components/Row';
import { requests } from './request';

function App() {
  return (
    <div className='App'>
      <Row fetchURL= {requests.fetchNetflixOriginals} />
    </div>
  )
}

export default App
