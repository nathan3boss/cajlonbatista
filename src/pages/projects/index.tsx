// Styles
import { ProjectsContainer } from './styles';

const projects = [
  {
    title: 'Tau UI',
    link: 'https://tauix.vercel.app/',
    description:
      'Web Components Library',
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <main>
        {projects.map((prj) => (
          <a href={prj.link} target="_blank">
            <section>
              <h1>{prj.title}</h1>

              <span>{prj.description}</span>
            </section>
          </a>
        ))}
      </main>
    </ProjectsContainer>
  );
};

export default Projects;
