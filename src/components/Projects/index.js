import React from 'react';

import { Wrapper, Title, Content, Grid, Thumb, Buttons } from './Projects.styles';
import Button from '../Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ projects }) => (
    <Wrapper>
        <Title>
            <h2>Projects</h2>
        </Title>
        <Content>
            <Grid>
                {projects.map(project => (
                    <Thumb image = {project.image}>
                        <div>
                            <h3>{project.name}</h3>
                            <div className='descripcion'>
                                <p>{project.description}</p>
                            </div>
                            <Buttons>
                                <Button prompt = {'View page'} link = { project.url }/>
                                <Button prompt = {'View on '} link = { project.github } logo = { faGithub }/>
                            </Buttons>
                        </div>
                    </Thumb>
                ))}
            </Grid>
        </Content>
    </Wrapper>
);

export default Projects;