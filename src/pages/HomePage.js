import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { movieApi } from "../constants/axios";
import { movieRequests } from "../constants/requests";
import useAppStateContext from "../hooks/useAppStateContext";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  selectAllMovies,
  selectMoviesStatus,
} from "../slices/movieSlice";

import useAppDispatch from '../hooks/useAppStateContext'

import MovieSkeleton from "../components/MovieSkeleton";


const HomePage = () => {

  const { isDarkMode } = useAppDispatch()
  const dispatch = useDispatch();
  const status = useSelector(selectMoviesStatus);
  const movies = useSelector(selectAllMovies);

  


  

  useEffect(() => {
    if (status === "idle") {
      dispatch(getMovies());
    }
  });

  return (
    <div
      className="page"
      style={{ backgroundColor: !isDarkMode? "#111" : "#fafafa", overflow: "hidden" }}
    > 
      
      <Navbar />
      <Banner />
      {Object.keys(movies).map((title) => (
        <div key={title}>
          {
            status == 'loading' ? <MovieSkeleton />
            :
            <Row title={title} movies={movies[title]} />
          }
        </div>
      ))}

    </div>
  );
};

export default HomePage;
