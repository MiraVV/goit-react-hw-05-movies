import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'servisec/Api';

export default function Home() {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(films => setfilms(films.results));
  }, []);

  return (
    <div>
      <h1> Trending movies</h1>
      <ul>
        {films.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
              }}
            >
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
