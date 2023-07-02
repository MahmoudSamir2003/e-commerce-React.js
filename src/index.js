import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Loader from './loader/loader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Perform tasks or fetch data here

    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Wait time in milliseconds
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (
        <Loader /> // Show Loader while isLoading is true
      ) : (
        <div>
          <App />
        </div>
      )}
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
