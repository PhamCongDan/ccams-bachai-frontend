import './App.css';
import { Header } from './components/Header';
import { store } from "./store";
import { Provider } from 'react-redux';
import { MainLayout } from './components/MainLayout';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainLayout />
      </div>
    </Provider>
  );
}

export default App;
