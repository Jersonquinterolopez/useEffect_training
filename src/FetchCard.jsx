import React, { useState, useEffect, useCallback } from 'react';
import getPosts from './helpers/getPost';
import getUser from './helpers/getUser';

// const initialUser = {
//   name: 'Jerson',
//   email: 'correo@sample.com',
// };

// const initialPosts = [
//   { id: 1, title: 'Post 1' },
//   { id: 2,  title: 'Post 2' },
// ];

function FetchCard(props) {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  const updatePost = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      setPosts(newPosts);
    });
  }, [user.id]);

  // Esta es una de las funciones mas importantes de los efectos con el arreglo vacio, y es realizar una consulta a la api que sea necesaria en la primer carga de el componente.
  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    // con esta condicion if nos aseguramos que se haga la llamada a la api solo si tenemos un userId, tambien validaremos que dentro de user exista un id usando el signo de interrogacion ?, si por ejemplo tuviesemos mas niveles, pues hariamos lo mismo por ejemplo: data?.user?.id, asi evitamos un TypeError: Cannot read property 'id'
    if (user?.id) {
      updatePost();
    }
  }, [user, updatePost]);

  return (
    <div>
      <button onClick={updateUser}>Another User</button>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <br />

      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchCard;
