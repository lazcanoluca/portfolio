import React from 'react';

import { Wrapper, Title, Content, Grid, Thumb, Buttons } from './Projects.styles';
import Button from '../Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ projects }) => (
    <Wrapper>

        <>
        {/* <Content>
            {/* <Grid>
                {projects.map(project => (
                    <Thumb image = {project.image}>
                        <div>
                            <h3>{project.name}</h3>
                            <div className='descripcion'>
                                <p>{project.description}</p>
                            </div>
                            <Buttons>
                                <Button prompt = {'Open page'} link = { project.url }/>
                                <Button prompt = {'View on '} link = { project.github } logo = { faGithub }/>
                            </Buttons>
                        </div>
                    </Thumb>
                ))}
            </Grid> */}
        {/* </Content> */}
        </>
        <Content>
            HOLA
        </Content>
        <Title>
            <h1>my projects</h1>
        </Title>
    </Wrapper>
);

export default Projects;