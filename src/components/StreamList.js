import React, { useState } from "react";

const StreamList = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [newMovie, setNewMovie] = useState("");
  const [newTvShow, setNewTvShow] = useState("");
  const [editMode, setEditMode] = useState({ type: null, index: null });
  const [editTitle, setEditTitle] = useState("");

  const addMovie = () => {
    if (newMovie) {
      setMovies([...movies, { title: newMovie, watched: false }]);
      setNewMovie(""); // Reset input field
    }
  };

  const addTvShow = () => {
    if (newTvShow) {
      setTvShows([...tvShows, { title: newTvShow, watched: false }]);
      setNewTvShow(""); // Reset input field
    }
  };

  const removeItem = (id, type) => {
    if (type === "movie") {
      setMovies(movies.filter((_, index) => index !== id));
    } else if (type === "tvShow") {
      setTvShows(tvShows.filter((_, index) => index !== id));
    }
  };

  const markAsWatched = (id, type) => {
    if (type === "movie") {
      const updatedMovies = [...movies];
      updatedMovies[id].watched = true;
      setMovies(updatedMovies);
    } else if (type === "tvShow") {
      const updatedTvShows = [...tvShows];
      updatedTvShows[id].watched = true;
      setTvShows(updatedTvShows);
    }
  };

  const startEdit = (type, index, currentTitle) => {
    setEditMode({ type, index });
    setEditTitle(currentTitle);
  };

  const saveEdit = () => {
    if (editMode.type === "movie") {
      const updatedMovies = [...movies];
      updatedMovies[editMode.index].title = editTitle;
      setMovies(updatedMovies);
    } else if (editMode.type === "tvShow") {
      const updatedTvShows = [...tvShows];
      updatedTvShows[editMode.index].title = editTitle;
      setTvShows(updatedTvShows);
    }
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditMode({ type: null, index: null });
    setEditTitle("");
  };

  return (
    <div>
      <h1>StreamList</h1>
      <p>Manage your favorite Movies and TV Shows!</p>

      <h2>Add a Movie</h2>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={addMovie}>Add Movie</button>

      <h2>Add a TV Show</h2>
      <input
        type="text"
        value={newTvShow}
        onChange={(e) => setNewTvShow(e.target.value)}
        placeholder="Enter TV show title"
      />
      <button onClick={addTvShow}>Add TV Show</button>

      <h2>Movies</h2>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {editMode.type === "movie" && editMode.index === index ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: movie.watched ? "line-through" : "none",
                    }}
                  >
                    {movie.title}
                  </span>
                  <button onClick={() => markAsWatched(index, "movie")}>
                    {movie.watched ? "Watched" : "Mark as Watched"}
                  </button>
                  <button onClick={() => startEdit("movie", index, movie.title)}>
                    Edit
                  </button>
                  <button onClick={() => removeItem(index, "movie")}>
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      <h2>TV Shows</h2>
      {tvShows.length === 0 ? (
        <p>No TV shows added yet.</p>
      ) : (
        <ul>
          {tvShows.map((show, index) => (
            <li key={index}>
              {editMode.type === "tvShow" && editMode.index === index ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: show.watched ? "line-through" : "none",
                    }}
                  >
                    {show.title}
                  </span>
                  <button onClick={() => markAsWatched(index, "tvShow")}>
                    {show.watched ? "Watched" : "Mark as Watched"}
                  </button>
                  <button
                    onClick={() => startEdit("tvShow", index, show.title)}
                  >
                    Edit
                  </button>
                  <button onClick={() => removeItem(index, "tvShow")}>
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StreamList;