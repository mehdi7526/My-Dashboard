"use client";

import { useQuery } from "@tanstack/react-query";
import ListTable from "../../../components/ListTable";
import axios from "axios";

// fetch list data with axios
const fetchListData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data; 
};

export default function ListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchListData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return <ListTable data={data} />;
}
