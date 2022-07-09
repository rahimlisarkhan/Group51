import { useRouter } from "next/router";


const ContactPageUserPost = () => {

    const route = useRouter()

    return <h1>Contact page user: {route.query.user_id} post:{route.query.post_id} </h1>;
  };
  
  export default ContactPageUserPost;
  