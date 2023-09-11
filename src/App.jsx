import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (term) => {
    console.log('searchTerm:', term); // Verifique o valor de term
    setSearchTerm(term);
    navigate(`/${term}`); // Navegue para a URL com o searchTerm    
    
  };

  return (
    <ThemeProvider theme={darkTheme}>  
      <CssBaseline />
      <Navbar onSearch={handleSearch} searchTerm={searchTerm} />
      
      <Container>        
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
