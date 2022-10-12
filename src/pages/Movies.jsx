import { useState, useEffect } from 'react';
import { Link, useSearchParams, Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchQuery } from 'servisec/Api';

export default function Movies() {
  const [films, setfilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      fetchQuery(query).then(films => {
        setfilms(films.results);
      });
    }
  }, [query]);

  const onSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {films.length > 0 && (
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
      )}
      <Outlet />
    </div>
  );
}
