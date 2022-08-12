import React from "react";
import Layout from "../../components/Layout/Layout";
import { loadNews } from "../../lib/apiCallls";

import NewsItem from "../../components/NewsItem/NewsItem";
export default function News({ news: { news } }) {
  const newsElements = news.map((newsObject) => (
    <NewsItem newsObject={newsObject} />
  ));
  return (
    <Layout>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 w-full mx-auto">
        {newsElements}
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const news = await loadNews();
  return {
    props: {
      news,
    },
  };
};
