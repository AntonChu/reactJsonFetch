import { useRequest } from "../hooks/request";

export const Succsess = ({ url, initialData }) => {
  const test = useRequest(url, initialData);
  console.log(test);
  const [ data, isLoading, hasError ] = useRequest(url, initialData);

  return (
      <div>{data.status}</div>
  );
};
