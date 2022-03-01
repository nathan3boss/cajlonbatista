// Dependencies

// Styles
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContainer } from './styles';

const projects = [
  {
    title: 'Tau UI',
    link: '',
    description:
      'Web Components Library. Compatible with Vue, React, and Angular',
  },
];

const Projects = () => {  
  return (
    <ProjectsContainer>
      <main>
        {projects.map((prj) => (
          <Link to={prj.link} hrefLang="_blank">
            <section>
              <h1>{prj.title}</h1>

              <span>{prj.description}</span>
            </section>
          </Link>
        ))}
      </main>
    </ProjectsContainer>
  );
};

export default Projects;
