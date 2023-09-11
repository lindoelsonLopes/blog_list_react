import axios from 'axios';

export const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar a postagem: ', error);
      throw error;
    }
  };


  export const fetchPostById = async (postId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar a postagem com ID ${postId}: `, error);
      throw error;
    }
  };