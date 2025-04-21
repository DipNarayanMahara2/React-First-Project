import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Cards from "./components/Cards";
import axios from "axios";
import { baseUrl } from "../../config";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data.reverse());
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-8">
        {blogs.length > 0 &&
          blogs.map((blogs) => {
            return <Cards blog={blogs} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
