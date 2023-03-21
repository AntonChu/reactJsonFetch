import { useRequest } from "../hooks/request";

export const Error = ({ url, initialData }) => {
    const [{ data, isLoading, hasError }] = useRequest(url, initialData);

  return (
    <>
      <div>{hasError}</div>
    </>
  )
};
