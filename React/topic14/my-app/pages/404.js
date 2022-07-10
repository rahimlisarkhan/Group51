import { useRouter } from "next/router";

const Error404Page = () => {
  const route = useRouter();

  return (
    <div>
      <h1>404 error</h1>
      <button onClick={() => route.back()}> go back</button>
    </div>
  );
};


export default Error404Page