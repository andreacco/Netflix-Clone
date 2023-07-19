import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import useCurrentUser from "../hooks/useCurrentUser";
import Navbar from "../Components/Navbar";
import Billboard from "../Components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return{
    props: {}
  }
}

const Home = () => {

  const { data: user } = useCurrentUser()

  return (
    <>
      <Navbar/>
      <Billboard/>
    </>
  )
}

export default Home
