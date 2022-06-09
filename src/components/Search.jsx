import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setFoundPlayers } from '../redux/slices/playerSlice';
import { fetchSearchPlayers } from '../redux/slices/playerSlice/fetching';

import useDebounce from './../hooks/useDebounce';
import splitId from '../helpers/splitId';

import { Loader } from '../components';

import searchIcon from '../common/assets/loupe.png';

function Search() {
  const dispatch = useDispatch();
  const { foundPlayers } = useSelector(({ player }) => player);

  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const searchRef = React.useRef();

  const debouncedSearchValue = useDebounce(search, 500);

  React.useEffect(() => {
    if (!search) {
      setIsLoading(false);
      foundPlayers && dispatch(setFoundPlayers(null));
    } else {
      setIsLoading(true);
    }

    setError(false);
  }, [search]);

  React.useEffect(() => {
    debouncedSearchValue && searchPlayers();
  }, [debouncedSearchValue]);

  const searchPlayers = async () => {
    try {
      await dispatch(fetchSearchPlayers(search)).unwrap();
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const onClearClick = () => {
    setSearch('');
    searchRef.current.focus();
  };

  return (
    <div className="flex center">
      <div className="input-wrapper">
        <div className="search-player">
          {isLoading ? (
            <Loader type={'search'} />
          ) : (
            <img
              className="search-icon"
              src={searchIcon}
              alt="search-icon"
              width="24"
              height="24"
            />
          )}
          <input
            type="text"
            ref={searchRef}
            value={search}
            onChange={onSearchChange}
            placeholder="Search player ..."
          />
          {search && (
            <svg
              className="clear-icon"
              onClick={onClearClick}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          )}
        </div>
        {foundPlayers && (
          <div className="list-wrapper">
            <ul className="list animate__animated animate__fadeInDown">
              {foundPlayers.map((player) => (
                <Link
                  key={player.id}
                  className="search-player-link"
                  to={`/team/${splitId(player.team.sr_id)}/player/${splitId(
                    player.sr_id
                  )}`}
                >
                  <li>{player.full_name}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        {error && <p className="not-found">No matches found</p>}
      </div>
    </div>
  );
}

export default Search;
