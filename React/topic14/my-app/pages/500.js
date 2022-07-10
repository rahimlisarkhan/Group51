import { useRouter } from "next/router";

const Error500Page = () => {
  const route = useRouter();

  return (
    <div>
      <h1>500 server</h1>
      <button onClick={() => route.back()}> go back</button>
    </div>
  );
};


export default Error500Page