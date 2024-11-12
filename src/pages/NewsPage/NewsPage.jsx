import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../../Components/Pagination/Pagination";
import { getNews } from "../../api/api";
import { ItemNews } from "../../Components/ItemNews/ItemNews";
import styles from "./styles.module.css";
import Loading from "../../Components/Loading/Loading";

export const NewsPage = () => {
  const TOTAL_PAGES = 10;
  const INITIAL_PAGE = 1;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentPage, handleNextPage, handlePreviousPage, handlePageClick } =
    usePagination(INITIAL_PAGE, TOTAL_PAGES);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const resp = await getNews(currentPage);
        setNews(resp);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [currentPage]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className={styles.newsList}>
            {news.map((item) => {
              return <ItemNews key={item.id} item={item} />;
            })}
          </ul>
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
