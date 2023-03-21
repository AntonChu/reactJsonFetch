import { useRequest } from "../hooks/request";

export const Succsess = ({ url, initialData }) => {
  const [{ data, isLoading, hasError }] = useRequest(url, initialData);

  return (
    <>
      {data.map((el) => <div key={el.status}>{el.status}</div>)}
    </>
  );
};
