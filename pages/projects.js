import Head from "next/head";
import Layout from "../components/layout/Layout";
import api from "../api";

export default function projects() {
    useEffect(() => {
        function getProducts() {
          const data =  api.get ("projects")
        }
     getProducts()
     
    }, [])
	return (
		<Layout>
			<Head />

			<h1 className="regh1">Projects</h1>


		</Layout>
	);
}