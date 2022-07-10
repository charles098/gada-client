import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Style
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global-style';
import GlobalFont from 'styles/global-font';

// Store
import { store } from 'store/config';

// Pages
import Home from 'routes/Home';
import Plan from 'routes/Plan';
import Main from 'routes/Main';

const App: FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <GlobalFont />
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
