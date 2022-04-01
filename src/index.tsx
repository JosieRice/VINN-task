import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router/Index';
import init from './init';
import theme from './theme';

/** everything that should be initialized globally on load goes here */
init();

/** global react entry point for wrappers that affect the whole app */
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
