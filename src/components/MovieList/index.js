import React, { useState, useEffect } from "react";
import apiClient from "../../services/axios";
import Modal from "../Modal";
import MovieItem from "./MovieItem";
import styles from "./style.module.css";

const MovieList = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecentMovies = async () => {
      setLoading(true);
      const response = await apiClient.get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setData(response.data.results);
      setLoading(false);
    };
    const searchMovie = async () => {
      setLoading(true);
      const response = await apiClient.get(
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`
      );
      setData(response.data.results);
      setLoading(false);
    };

    if (searchQuery) searchMovie();
    else fetchRecentMovies();
  }, [searchQuery]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const onClickItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <>
      <h3 className={styles.sectionTitle}>Most recent movies</h3>
      <div className="grid-row">
        {data.map((item) => (
          <MovieItem key={item.id} data={item} onClickItem={onClickItem} />
        ))}
        {loading && <div>Loading...</div>}
      </div>

      <Modal
        visible={modalVisible}
        data={selectedItem}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default MovieList;
