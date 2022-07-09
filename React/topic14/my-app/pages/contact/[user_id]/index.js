import { useRouter } from "next/router";

const ContactPageUser = () => {
  const route = useRouter();

  return (
    <>
      <h1>Contact page user {route.query.user_id}</h1>;
      <button onClick={() => route.push(`/contact/${route.query.user_id}/209`)}>
        {" "}
        209 post{" "}
      </button>
      <button onClick={() => route.push(`/contact/${route.query.user_id}/239`)}>
        239{" "}
      </button>
    </>
  );
};

export default ContactPageUser;
