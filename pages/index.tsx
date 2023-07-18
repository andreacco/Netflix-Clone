import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import useCurrentUser from "../hooks/useCurrentUser";

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
      <h1 className="text-4xl font-bold text-green-500">Netflix clone</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button>
    </>
  )
}

export default Home
