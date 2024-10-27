// pages/movies/[id].jsx
import React from "react";
import Image from "next/image";

export default async function Page({ params }) {
  const movieId = (await params).id;

  // Validate that movieId exists
  if (!movieId) {
    return <div>Movie ID not provided.</div>;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=credits,videos`
  );
  const movie = await res.json();
  console.log(movie);

  if (!movie) {
    return <div className="text-center mt-10">Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt=""
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="flex-grow md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4">
            {movie.title || movie.name || movie.original_title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {movie.release_date || movie.first_air_date} • {movie.runtime} mins
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {movie.overview}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-amber-500 font-bold text-2xl">
              {movie.vote_average}
              <span className="text-gray-600 dark:text-gray-400">/10</span>
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {movie.vote_count} votes
            </span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
          </div>

          {/* Cast */}
          <h2 className="text-2xl font-semibold mb-4">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movie.credits?.cast?.slice(0, 10).map((actor) => (
              <div key={actor.id} className="text-center">
                {actor.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                    width={100}
                    height={150}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-24 h-36 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      No Image
                    </span>
                  </div>
                )}
                <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                  {actor.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {actor.character}
                </p>
              </div>
            ))}
          </div>

          {/* Watch Trailer Button */}
          {movie.videos?.results?.length > 0 && (
            <div className="mt-8">
              <a
                href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-200"
              >
                Watch Trailer
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
