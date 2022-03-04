import React from 'react';

function About() {
    return (
        <div className=" mx-3 my-3 " id="about-me" style={{paddingBottom:'2.5rem'}}>
            <h1 className="display-3 font-weight-bold">About Me</h1>
            {/* ADD PADDING TO TEXT */}
            <p className="lead " >Hello, my name is David Chou and I am a full stack web developer with
                knowledge in coding and electronics.
                Certificate from UC Berkeley Extension in full stack web technologies including HTML,
                CSS, Javascript, MongoDB, Express.js, React.js,
                Node.js, and responsive web design. Known as an innovative problem solver passionate
                about developing apps, with a focus on mobile-first
                design and development.
                With each project, my aim is to best engage my audience for an impactful user
                experience.</p>
            <hr className="my-4" />
        </div>
    )
};

export default About;