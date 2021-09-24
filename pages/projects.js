import Meta from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "../components/constants/api";

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Meta title="OUR PROJECTS" description="Showcasing our projects" />
      <h1 className="regh1">PROJECTS</h1>

      <div className="strek-2"></div>

      <div className="flex-2">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-text">
              <h4>{project.name}</h4>
              <p>{project.work}</p>
              <img
                src={project.img_url}
                alt="Company Picture"
                width="150px"
              ></img>
            </div>

            <Link href="/details/[id]" as={`/details/${project.id}`}>
              <button className="btn">Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return {
    props: { projects: data },
  };
};

export default Projects;
