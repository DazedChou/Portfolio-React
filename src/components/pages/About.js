import React from 'react';

function About() {
    return (
        <div className=" mx-3 my-3 " id="about-me" style={{ paddingBottom: '2.5rem' }}>
            <h1 className="display-3 font-weight-bold d-flex justify-content-center">About Me</h1>
            {/* ADD PADDING TO TEXT */}
            <div className="row d-flex justify-content-center flex-wrap">
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img src="./David.jpg" alt="portrait" height='500' />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <p className="lead" id="aboutme">Hello, my name is David Chou and I am a full stack web developer with
                        knowledge in coding and electronics.
                        Certificate from UC Berkeley Extension in full stack web technologies including HTML,
                        CSS, Javascript, MongoDB, Express.js, React.js,
                        Node.js, and responsive web design. Known as an innovative problem solver passionate
                        about developing apps, with a focus on mobile-first
                        design and development.
                        With each project, my aim is to best engage my audience for an impactful user
                        experience.
                    </p>
                </div>

            </div>

            <hr className="my-4" />
        </div>
    )
};

export default About;