import { useState } from "react";


const API_URL = "https://api.github.com";

async  fetchResults() {
  try {
    const response = fetch(`${API}/search/users?q=${query}`);
    const json = response.json();
    return j.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export default  App() {
  const [query, setQuery] = use("");
  const [results, setResults] = use([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className="app">
      <main className="main">
        <h2>React: GitHub User Search</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {result.map(() => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function User({ }) {
  return (
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
}

function Form({ }) {
  return (
    <for className="search-form" onSubmit={onSubmi}>
      <input
        id="search"
        type="text"
        placeholder=""
        onChang={onChange}
        valu={value}
      />
      <button type="submit"></button>
    </for>
  );
}
