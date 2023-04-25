import React from "react";
import { useQuery } from "@tanstack/react-query";
import { storeapi } from "../endpoints";
const QueryExample = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
    fetch(storeapi + "products")
      .then((res) => res.json())
      .then((data) => data)
  );
  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
};
export default QueryExample;
