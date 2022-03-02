import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
    const [result, setResult] = useState([]);
    // const myRepos = async () => {
    useEffect(() => {
        axios.get(`https://api.github.com/users/dazedchou/repos`)
            .then((res) => {
                console.log(res.data);
                setResult(res.data);
            });
    }, []);

    // };
    // myRepos();

    return (
        <div>
            {result.map((repo) => (
                <div key={repo.id}>{repo.name}</div>
            ))}
        </div>
    )
};
export default Portfolio;