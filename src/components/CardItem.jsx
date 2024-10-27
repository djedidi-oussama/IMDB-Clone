import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardItem({ movie }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title}
        className="w-full h-64 sm:h-72 lg:h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {movie.original_title || movie.title || movie.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">
          {movie.overview}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-500 text-lg font-bold">
            {movie.vote_average}
            <span className="text-gray-600 dark:text-gray-400">/10</span>
          </span>
          <Link
            href={`/movies/${movie.id}`}
            className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition duration-200 font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
