import './App.css';
import { Header } from './components/Header';
import { FilterLayout } from './components/FilterLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='p-4'>
        <div className=''>
          <FilterLayout />
        </div>
      </main>
    </div>
  );
}

export default App;
