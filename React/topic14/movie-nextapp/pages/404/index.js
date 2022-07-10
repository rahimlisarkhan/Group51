// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const Page404 = () => {
  const { back } = useRouter();

  const onBack = () => {
    back("/home");
  };

  return (
    <>
      <h1 className="text-white">Not Found 404 Page</h1>
      <button className="btn btn-warning" onClick={onBack}>
        Go Back
      </button>
    </>
  );
};

export default Page404;
