import React, { useEffect, useState } from 'react';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/js.svg';
import react from '../../images/react.svg';
import python from '../../images/python.svg';
import haskell from '../../images/haskell.svg';
import c from '../../images/c.svg';
// import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

import { Wrapper, Title, Content } from './Stack.styles';

const Social = () => {

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
        <Title>
            <div className='sentinel sentinel-0' ref={ref0}></div>
            <div className='sentinel sentinel-1' ref={ref1}></div>
            <div className='sentinel sentinel-2' ref={ref2}></div>
            <div className='sentinel sentinel-3' ref={ref3}></div>
            <div className='relleno'></div> 
            <div className={`title-wrapper ${position}`}>
                <div className='wrapper-wrapper'>
                  <h1 >what i know</h1>
                </div>
            </div>
        </Title>
        <Content>
            <div className='tech html'>
                <img src={html} />
                <div className='description'>
                    <h2>HTML 5</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech css'>
                <img src={css} />
                <div className='description'>
                    <h2>CSS 3</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech js'>
                <img src={js} />
                <div className='description'>
                    <h2>JavaScript</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech react'>
                <img src={react} />
                <div className='description'>
                    <h2>React</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech c'>
                <img src={c} />
                <div className='description'>
                    <h2>C</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech python'>
                <img src={python} />
                <div className='description'>
                    <h2>Python</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
            <div className='tech haskell'>
                <img src={haskell} />
                <div className='description'>
                    <h2>Haskell</h2>
                    <div>
                        <p>lol</p>
                        <p>lol 2</p>
                    </div>
                </div>
            </div>
        </Content>
    </Wrapper>
    )
};

export default Social;