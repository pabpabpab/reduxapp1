import './App.sass';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';

import MessengerPage from './pages/MessengerPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

    return (
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<MessengerPage />} />
                    <Route path="/messenger/*" element={<MessengerPage />} />
                    <Route path="/profile/:userId" element={<ProfilePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ThemeProvider>
    );
}

export default App;
