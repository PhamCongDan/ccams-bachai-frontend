import { Header } from './components/Header';
import { store } from "./store";
import { Provider } from 'react-redux';
import { Routes } from './routes';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
