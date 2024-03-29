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

import { link_cv_sp, link_cv_en } from '../../links';

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
            <div>
                <h2>Markup and programming languages</h2>
                <div className='languages'>
                    <div className='tech html'>
                        <img src={html} />
                        <div className='description'>
                            <h2>HTML 5</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>{'>'}Ut enim ad minim veniam,</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='tech css'>
                        <img src={css} />
                        <div className='description'>
                            <h2>CSS 3</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>{'>'}Ut enim ad minim veniam,</p>
                                <p>{'>'}quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='tech js'>
                        <img src={js} />
                        <div className='description'>
                            <h2>JavaScript</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='tech c'>
                        <img src={c} />
                        <div className='description'>
                            <h2>C</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>{'>'}Ut enim ad minim veniam,</p>
                                <p>{'>'}quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='tech python'>
                        <img src={python} />
                        <div className='description'>
                            <h2>Python</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>{'>'}Ut enim ad minim veniam,</p>
                                <p>{'>'}quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='tech haskell'>
                        <img src={haskell} />
                        <div className='description'>
                            <h2>Haskell</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>{'>'}sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Technologies and frameworks</h2>
                <div className='techs'>
                    <div className='tech react'>
                        <img src={react} />
                        <div className='description'>
                            <h2>React</h2>
                            {/* <div>
                                <p>{'>'}Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>You can access my resume in <a href={link_cv_en} target="_blank">English</a>, o en <a href={link_cv_sp} target="_blank">Español</a></h2>
            </div>
            
        </Content>
    </Wrapper>
    )
};

export default Social;