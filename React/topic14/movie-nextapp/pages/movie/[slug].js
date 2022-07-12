import { useRouter } from "next/router"
import { movieAPI } from "../../api/detailed"
import { Content as DetaliedContainer} from "../../feature/Detailed/DetaliedContainer"
import Layout  from "../../shared/components/Layout"
import Head from "next/head"


 const DetailedPage = (props)=>{


    const route = useRouter()

    // console.log("params",route.query);

    return(
        <Layout>
            <Head>

            <title>
            {props.movie.Title} | Filmalisa
            </title>
            </Head>
            <DetaliedContainer {...props.movie} />
        </Layout>
    )
}

export const getServerSideProps = async (context)=>{
    const slug  = context.query.slug

    console.log(context);

    let response = await movieAPI(slug)

    console.log("detailed",response.data);


    return {
        props:{
            movie:response.data
        }
    }
}

export default DetailedPage

