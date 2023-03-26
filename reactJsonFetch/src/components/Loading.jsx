import { useRequest } from "../hooks/request";

export const Loading = ({ url, initialData }) => {
  const [ data, isLoading, hasError ] = useRequest(url, initialData);
  console.log(isLoading)

  return (
    <>
      {isLoading && <div>{isLoading}</div>}
    </>
  )
};
