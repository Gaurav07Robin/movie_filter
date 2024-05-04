import React from "react";
import { ReactDOM } from "react";
import Sdata from "./Array";


const formatLanguageList = (languages) => {
  let formattedList = '';
  for (let i = 0; i < languages.length; i++) {
    formattedList += languages[i];
    if (i !== languages.length - 1) {
      formattedList += ' ';
    }
  }
  

  return formattedList;
};

const formatMovie = (Movie) => {
  let formattedList = '';
  for (let i = 0; i < Movie.length; i++) {
    formattedList += Movie[i];
    if (i !== Movie.length - 1) {
      formattedList += ' ';
    }
  }
  

  return formattedList;
};


const Cards = (props) => {

let movPhot = props.movPhot;
let movtitle = props.movtitle;
let imdbmov = props.imdbmov;
let movlang = props.movLang;
let movCount = props.movCount;
let movGen = props.movGen;

//console.log("movLang", movlang);

  let movieLanguageList = [];
  let count = movlang.length;
  for(let i=0;i<count;i++){
    movieLanguageList.push(movlang[i]);
    //(i < count-1) ? movieLanguageList.push(","): console.log("hh");
  }


  let movieCountries = [];
  let countriesCount = movCount.length;
  for(let i=0;i<countriesCount;i++){
    movieCountries.push(movCount[i]);
    //(i < countriesCount-1) ? movieCountries.push(","): movieCountries.push("");
  }

  let movieGenres = [];
  let movieGenresCount = movGen.length;
  for(let i=0;i<movieGenresCount;i++){
    movieGenres.push(movGen[i]);
    // (i < movieGenresCount-1) ? movieGenres.push(","): console.log("hh");
  }

  return (
<>
<div className="card" style={{}}>
  <img className="card-img-top" src={movPhot} alt="Card image cap"/>
  <div className="card-body" style={{width: "120px", paddingRight:"50px", marginLeft:"25px", textAlign: 'center'}}>
    <h2 className="card-title-1" style={{color: '#CFF541', marginTop:'1px', background:'#29BBD2', borderRadius:'20px'}}><strong>{movtitle}</strong></h2>
    <h6 className="card-title-2"  style={{ whiteSpace: 'nowrap' }}>{`IMDB Movie ID: ${imdbmov}`}</h6>
    <h4 className="card-title-3"  style={{ whiteSpace: 'nowrap' }}>Genre: {movieGenres}</h4>
    <h3 className="card-title-4"  style={{ whiteSpace: 'nowrap', marginLeft:'50px' }}>Available in </h3>
    <h6 className="card-title-5" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>{formatLanguageList(movieLanguageList)}</h6>
    <h3 className="card-title-6"  style={{ whiteSpace: 'nowrap', marginLeft:'50px' }}>Released </h3>
    <h6 className="card-title-7" style={{ }}>{formatMovie(movieCountries)}</h6>

  </div>  
</div>
</>
  )

}

export default Cards;
