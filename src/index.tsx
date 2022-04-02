import { CssBaseline, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router/Index';
import theme from './theme';

/** global react entry point for wrappers that affect the whole app */
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ThemeProvider>
);
