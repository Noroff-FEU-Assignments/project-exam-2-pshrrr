import Head from "next/head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/ui/LoginForm";


export default function login() {
	return (
		<Layout>
			<Head />

            <div className="login-box">
                <h1>Login Admin</h1>
            </div>

		
            <LoginForm />
		</Layout>
	);
}

