import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate()

  const onBack = () => {
    navigate("/home")
  };

  return (
    <>
      <h1 className="text-white">Not Found 404 Page</h1>
      <button className="btn btn-warning" onClick={onBack}>Go Back</button>
    </>
  );
};

export default Page404;
