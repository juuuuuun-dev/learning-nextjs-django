import { useRouter } from "next/dist/client/router";
import Cookie from "universal-cookie"
import { LogoutIcon } from '@heroicons/react/solid'
import { Layout } from "../components/Layout";

const cookie = new Cookie();

export default function Main() {
  const router = useRouter();

  const logout = () => {
    cookie.remove("access_token");
    router.push("/")
  }

  return (
    <>
      <Layout title="Main">
        <a href="#" onClick={logout}><LogoutIcon className="mt-20 w-6 h-6" />Logout</a>
      </Layout>
    </>
  );
}