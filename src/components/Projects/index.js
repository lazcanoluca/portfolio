import React, { useEffect, useState } from 'react';

import { Wrapper, Title, Content, Grid, Thumb, Buttons } from './Projects.styles';
import Button from '../Button';

import { faGithub, faHtml5, faCss3, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/js.svg';
import react from '../../images/react.svg';
import python from '../../images/python.svg';
import haskell from '../../images/haskell.svg';
import c from '../../images/c.svg';

const Projects = ({ projects }) => {

    const [ref0, inView0] = useInView({
        threshold: 0,
    });

    const [ref1, inView1] = useInView({
        threshold: 0,
    });

    const [ref2, inView2] = useInView({
        threshold: 0,
    });

    const [ref3, inView3] = useInView({
        threshold: 0,
    });

    const [position, setPosition] = useState('top');

    useEffect(() => {
        if (position === 'stick' && inView0) setPosition('top');
    }, [inView0])
    
    useEffect(() => {
        if (position === 'top' && inView1) setPosition('stick');
    }, [inView1])

    //sentinel bottom
    useEffect(() => {
        if (position === 'stick' && inView2) setPosition('bottom');
    }, [inView2])

    useEffect(() => {
        if (position === 'bottom' && inView3) setPosition('stick');
    }, [inView3])


    return (
    <Wrapper>
        <Content>
            <Grid>
                {projects.map(project => (
                    <Thumb image = {project.image} key = {project.name} className = {`project_${projects.indexOf(project)}`}>
                        <div className='stack'>
                            <ul>
                                {project.stack.includes('html') && <img className='icon' src={html} />}
                                {project.stack.includes('css') && <img className='icon' src={css} />}
                                {project.stack.includes('js') && <img className='icon' src={js} />}
                                {project.stack.includes('react') && <img className='icon' src={react} />}
                                {project.stack.includes('c') && <img className='icon' src={c} />}
                                {project.stack.includes('python') && <img className='icon' src={python} />}
                            </ul>
                            <div className='relleno'></div>
                        </div>
                        <div className='relleno'></div>
                        <div className='bottom'>
                            <h3>{project.name}</h3>
                            <div className='descripcion'>
                                <p>{project.description}</p>
                            </div>
                            <Buttons className='buttons'>
                                <Button type={'primary'} prompt = {'Open page'} link = { project.url }/>
                                <Button type={'secondary'} prompt = {'View on '} link = { project.github } logo = { faGithub }/>
                            </Buttons>
                        </div>
                    </Thumb>
                ))}
            </Grid>
        </Content>
        <Title>
            <div className='sentinel sentinel-0' ref={ref0}></div>
            <div className='sentinel sentinel-1' ref={ref1}></div>
            <div className='sentinel sentinel-2' ref={ref2}></div>
            <div className='sentinel sentinel-3' ref={ref3}></div>
            <div className='relleno'></div> 
            <div className={`title-wrapper ${position}`}>
                <div className='wrapper-wrapper'>
                  <h1 >my projects</h1>
                </div>
            </div>
        </Title>
    </Wrapper>
    )
};

export default Projects;