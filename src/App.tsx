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
import LoginHeader from 'components/LoginHeader';
import Home from 'routes/Home';
import Login from 'routes/Login';
import LoginForm from 'routes/LoginForm';
import Register from 'routes/Register';
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
                        <Route element={<LoginHeader />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/login-form" element={<LoginForm />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route path="/plan" element={<Plan />} />
                        <Route path="/main" element={<Main />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
