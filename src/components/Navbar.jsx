import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';  

const Navbar = ({ onSearch, searchTerm }) => { 

  const handleSearch = () => {
    onSearch(searchTerm);
  };  

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#17191f' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', opacity: 1 }}>
            Blog
          </Link>
        </Typography>
        <InputBase
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          sx={{
            borderRadius: '5px', 
            paddingLeft: '10px', 
            paddingRight: '10px',
            backgroundColor: 'gray',
            width: '400px', 
            marginLeft: '1rem',    
          }}

          endAdornment={
            <SearchIcon
              style={{ cursor: 'pointer' }}
              onClick={handleSearch}
            />
          }
          
        />
        
        <Button component={Link} to="/" color="inherit" sx={{ marginLeft: '2rem' }}>
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  searchTerm: PropTypes.string, // Defina a validação de tipo para searchTerm
  onSearch: PropTypes.func, // Defina a validação de tipo para onSearch 
};

export default Navbar;