import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Pages
import Home from './routes/Home';
import Plan from './routes/Plan';
import Main from './routes/Main';

// Style
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';

// Store
import { store } from './store/config';

const App: FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/plan" element={<Plan />} />
                        <Route path="/main" element={<Main />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
