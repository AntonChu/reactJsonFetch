import { useRequest } from "../hooks/request";

export const Loading = ({ url, initialData }) => {
  const [{ data, isLoading, hasError }] = useRequest(url, initialData);

  return (
    <>
      <div>{isLoading}</div>
    </>
  )
};
