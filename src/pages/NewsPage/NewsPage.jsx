import { useEffect, useState } from "react";
import { getNews } from "../../api/api";
import { ItemNews } from "../../Components/ItemNews/ItemNews";
import styles from "./styles.module.css";
import { Pagination } from "../../Components/Pagination/Pagination";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 10;

  const fetchNews = async (currentPage) => {
    try {
      const resp = await getNews(currentPage);
      setNews(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <ul className={styles.newsList}>
        {news.map((item) => {
          return <ItemNews key={item.id} item={item} />;
        })}
      </ul>
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};
