import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import { capitalizedFirstLetter } from '../utils/capitalizedFirstLetter';
import { paginate } from '../utils/paginationArray';

import { fetchPosts } from '../services/ApiService';

const Home = () => {
  const { searchTerm } = useParams(); // Obtenha o searchTerm da URL
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // Estado para postagens filtradas  
  const [page, setPage] = useState(1); // Estado para acompanhar a página atual
  const postsPerPage = 10; // Número de postagens por página

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts(); // Use o serviço para buscar as postagens
        setPosts(data);
        setFilteredPosts(data);         
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    console.log('searchTerm:', searchTerm); // Verifique o valor de searchTerm
    const filterPosts = () => {
      
        const filtered = searchTerm
        ? posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : posts;

        console.log('filteredPosts:', filtered); // Verifique as postagens filtradas
        setFilteredPosts(filtered);
        setPage(1); // Volte para a primeira página quando a pesquisa é aplicada
      
    };

    filterPosts();
  }, [searchTerm, posts]);


  const postsToDisplay = paginate(filteredPosts, page, postsPerPage);

  // Função para manipular a mudança de página
  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  return (    

        <Container sx={{ marginTop: '64px' }}>
            <Typography sx={{ py: 3 }} variant="h4" gutterBottom>
                Últimos posts
                    
            </Typography>
            {postsToDisplay.map((post) => (
                <Card key={post.id} sx={{ marginBottom: '1rem' }}>
                <CardContent>
                    <Typography variant="h6">{capitalizedFirstLetter(post.title)}</Typography>
                    <Typography variant="body2">{capitalizedFirstLetter(post.body)}</Typography>
                    <Button
                    component={Link}
                    to={`/post/${post.id}`}
                    color="primary"
                    variant="contained"
                    sx={{ marginTop: '1rem' }}
                    >
                    Ver mais
                    </Button>
                </CardContent>
                
                </Card>                
            ))}
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination
                    variant="outlined" shape="rounded" color="secondary"
                    sx={{ margin: '2rem 0', justifyContent: 'center' }}
                    count={Math.ceil(filteredPosts.length / postsPerPage)} // Calcula o número total de páginas
                    page={page} // Página atual
                    onChange={handlePageChange}
                            
                />
            </div>    
            
        </Container>
  );
};

Home.propTypes = {
  searchTerm: PropTypes.string, // Defina a validação de tipo para searchTerm
};

export default Home;
  