import { AppRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/globalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <ToastContainer />
         <AppRoutes />
         <GlobalStyles />
      </ThemeProvider>
   );
}

export default App;
