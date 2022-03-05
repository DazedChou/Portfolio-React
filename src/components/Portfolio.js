import React, { useState } from 'react';
import About from './pages/About';
import Header from './Header';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Nav from './Nav';
import Footer from './Footer';
// import { findByLabelText } from '@testing-library/react';
// import Background from './images/background.jpg'

const styles = {
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "gray"
    }
}

function Portfolio() {
    // const [result, setResult] = useState([]);
    // const myRepos = async () => {
    // useEffect(() => {
    //     axios.get(`https://gh-pinned-repos.egoist.sh/?username=dazedchou`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setResult(res.data);
    //         });
    // }, []);

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project/>;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div style={{background:'#050f21', color:'#8bace8', height: '120vh'}} id='portfolio'>
            {/* <Header currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            <div style={styles.header} >
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            </div>
            {renderPage() }
            {/* {result.map((repo) => (
                <div key={Math.floor(Math.random() * 10000)}>{repo.repo}</div>
            ))} */}
            {!currentPage==='Resume' ? <Footer /> : <></>}
        </div>
    )
};
export default Portfolio;