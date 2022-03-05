import React from "react";
const data = require('../assets/json/projects.json');
console.log(data.projects);
const styles = {
  display: "flex",
  flexDirection: "row",

}
// min-100-vh
function Project() {
  return (
    <div style={styles} className="mx-auto d-inline-flex flex-row justify-content-around flex-wrap , paddingBottom:'2.5rem'">
      {data.projects.map((res, i) => (
        <div className="card m-2 flex-wrap " style={{width: '25rem', background:'#bfd6ff', color:'#000000', textAlign:'center'}} key={i}>
          <img className="card-img-top" src={res.imagePath} alt="Card cap" />
            <div className="card-body d-flex flex-column align-content-center">
              <h5 className="card-title">{res.project}</h5>
              <p className="card-text">{res.description}</p>
              <a href={res.repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-2x fa-github"></i></a>
              {res.site ? 
              <a href={res.site} target="_blank" rel="noreferrer"> Deployed Site </a> : 
              <a href={res.video} target="_blank" rel="noreferrer"> Video </a>}
            </div>
        </div>
      ))}

    </div>
  );
}

export default Project;
