import React from "react";
import CardItem from "./CardItem";

function Results({ results }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {results.map((movie, index) => (
          <CardItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Results;
