import React from 'react';

import { Wrapper, Title, Content, Grid, Thumb } from './Projects.styles';
import Button from '../Button';

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
                            <p>{project.description}</p>
                            <Button prompt = {'View page'} link = { project.url }/>
                            <Button prompt = {'View on GitHub'} link = { project.github }/>
                        </div>
                    </Thumb>
                ))}
            </Grid>
        </Content>
    </Wrapper>
);

export default Projects;