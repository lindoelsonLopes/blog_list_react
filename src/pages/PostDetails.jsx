import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.data;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    getPostDetails();
  }, [postId]);

  return (
    <Container>
      {post ? (
        <Card sx={{ marginTop: '6rem' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              sx={{ marginTop: '1rem' }}
            >
              Voltar para a lista
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Carregando...</Typography>
      )}
    </Container>
  );
};

export default PostDetails;
