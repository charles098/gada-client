import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Pages
import Home from './routes/Home';
import Main from './routes/Main';

// Store
import { store } from './store/config';

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
