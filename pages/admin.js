import Auth from "../components/admin/auth";
import Head from "next/head";
import Form from "../components/admin/addForm";
import Messages from "../components/admin/messages";
import RefreshButton from "../components/ui/RefreshButton";
import LogoutButton from "../components/ui/LogoutButton";

const Projects = ({ projects }) => {
  return (
    <>
      <Head />

      <h1 className="adminh1">welcome admin</h1>

      <div className="form-box">
        <h2>Add PROJECT</h2>
        <div className="kortstrek"></div>

        <Form></Form>
      </div>

      <div className="form-box">
        <h2>Messages</h2>
        <div className="kortstrek"></div>
      </div>
      <div className="msg-box">
        <Messages></Messages>
      </div>
      <RefreshButton></RefreshButton>
      <LogoutButton></LogoutButton>
    </>
  );
};

export default Projects;
