import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Form from "../form/Form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../config";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/blog/${id}`);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to load blog for editing", error);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleEditSubmit = (updatedData) => {
    navigate(`/blog/${id}`, { state: { updatedBlog: updatedData } });
  };

  return (
    <Layout>
      <Form
        type="edit"
        initialData={data}
        blogId={id}
        onSubmit={handleEditSubmit}
      />
    </Layout>
  );
};

export default EditBlog;
