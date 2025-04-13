import React from "react";
import Layout from "../../components/Layout/Layout";
import Form from "./form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <Form type="create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
