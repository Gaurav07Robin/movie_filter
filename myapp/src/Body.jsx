import React, { useState } from "react";
import Sdata from "./Array";
import { Select } from "antd";

import Cards from "./Cards";
const { Option } = Select;
const Body = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(Sdata);

    const handleGenreChange = (selectedGenres) => {
        setSelectedGenres(selectedGenres)
    };

    const handleLanguageChange = (selectedLanguages) => {
        setSelectedLanguages(selectedLanguages)
    };

    const handleCountriesChange = (selectedCountries) => {
        setSelectedCountries(selectedCountries)
    };
    //console.log("Selected genres donwside handleGenreChange" , selectedGenres);
    //console.log("filtered Movies donwisde handleGenreChange", filteredMovies);


    const filtered = [];

    const firstFilter = [];

    const secondFilter = [];

    const thirdFilter = [];

   
    
    // Filter movies based on selected genres
    React.useEffect(() => {
        //console.log("Selected Genres:", selectedGenres);
    
        if (selectedCountries.length === 0 && selectedGenres.length === 0 && selectedLanguages.length === 0) {
            // If no genres selected, show all movies
            setFilteredMovies(Sdata);
            //console.log("filtered after removing first:", firstFilter);
        } else {

            Sdata.forEach(movie => {
            //    console.log("movie in Sdata: ", movie);
                // Check if the movie passes the filter
                const passesFilter = selectedGenres.every(genre => {
                            const normalizedGenre = genre.toLowerCase();
                            const includesGenre = movie.moviegenres.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                            // console.log("includesGenre:  ", includesGenre);
                            return includesGenre;
                        });
                // If the movie passes the filter, add it to the filtered array
            //    console.log("passesFilter :: ", passesFilter);
                if (passesFilter) {
                    firstFilter.push(movie);
                    filtered.push(movie);

                    //console.log("firstFilter", firstFilter);
                }
            });
            // console.log("Filtered Movies:", filtered);
            setFilteredMovies(filtered);


            if(selectedLanguages.length !== 0 && selectedCountries.length === 0){
                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter = selectedLanguages.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.movielanguages.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                    //console.log("passesFilter :: ", passesFilter);
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }

            else if(selectedLanguages.length === 0 && selectedCountries.length !== 0){
                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter = selectedCountries.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviecountries.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                               // console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                    console.log("passesFilter :: ", passesFilter);
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }


            else if(selectedLanguages.length !== 0 && selectedCountries.length !== 0){

                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter1 = selectedCountries.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviecountries.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });

                            const passesFilter2 = selectedLanguages.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.movielanguages.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                    // console.log("passesFilter :: ", passesFilter);
                    if (passesFilter1 && passesFilter2) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }     
                });

                    setFilteredMovies(secondFilter);

            }

            //firstFilter.splice(0, firstFilter.length);

            
        }
    }, [selectedGenres]);


    React.useEffect(() => {
        
        if (selectedCountries.length === 0 && selectedGenres.length === 0 && selectedLanguages.length === 0) {
            // If no genres selected, show all movies
            setFilteredMovies(Sdata);
        } else {

            Sdata.forEach(movie => {
            //    console.log("movie in Sdata: ", movie);
                // Check if the movie passes the filter
                const passesFilter = selectedCountries.every(country => {
                            const normalizedGenre = country.toLowerCase();
                            const includesGenre = movie.moviecountries.some(movieCountry => movieCountry.toLowerCase() === normalizedGenre);
                            //console.log("includesGenre:  ", includesGenre);
                            return includesGenre;
                        });
                // If the movie passes the filter, add it to the filtered array
               // console.log("passesFilter :: ", passesFilter);
                if (passesFilter) {
                    firstFilter.push(movie);
                    filtered.push(movie);
                }
            });
           // console.log("Filtered Movies:", filtered);
            setFilteredMovies(filtered);


            if(selectedLanguages.length !== 0 && selectedGenres.length === 0){
                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter = selectedLanguages.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.movielanguages.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                   // console.log("passesFilter :: ", passesFilter);
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }

            else if(selectedLanguages.length === 0 && selectedGenres.length !== 0){
                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter = selectedGenres.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviegenres.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                               // console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                   // console.log("passesFilter :: ", passesFilter);
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }


            else if(selectedLanguages.length !== 0 && selectedGenres.length !== 0){

                firstFilter.forEach(movie => {
                    //console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter1 = selectedGenres.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviegenres.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });

                            const passesFilter2 = selectedLanguages.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.movielanguages.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    // If the movie passes the filter, add it to the filtered array
                    //console.log("passesFilter :: ", passesFilter);
                    if (passesFilter1 && passesFilter2) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                        
                });

                    setFilteredMovies(secondFilter);

            }
        }
    }, [selectedCountries]);


    React.useEffect(() => {
    
        if (selectedCountries.length === 0 && selectedGenres.length === 0 && selectedLanguages.length === 0) {
            // If no genres selected, show all movies
            setFilteredMovies(Sdata);
        } else {
                
            Sdata.forEach(movie => {
              
                const passesFilter = selectedLanguages.every(language => {
                            const normalizedGenre = language.toLowerCase();
                            const includesGenre = movie.movielanguages.some(movieLanguage => movieLanguage.toLowerCase() === normalizedGenre);
                          //  console.log("includesGenre:  ", includesGenre);
                            return includesGenre;
                        });
                
                if (passesFilter) {
                    firstFilter.push(movie);
                    filtered.push(movie);
                }
            });
           // console.log("Filtered Movies:", filtered);
            setFilteredMovies(filtered);

            if(selectedGenres.length !== 0 && selectedCountries.length === 0){
                firstFilter.forEach(movie => {
                  //  console.log("movie in Sdata: ", movie);
                    // Check if the movie passes the filter
                    const passesFilter = selectedGenres.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviegenres.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
            
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }

            else if(selectedGenres.length === 0 && selectedCountries.length !== 0){
                firstFilter.forEach(movie => {
                   
                    const passesFilter = selectedCountries.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviecountries.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                                //console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                
                    if (passesFilter) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }
                });

                    setFilteredMovies(secondFilter);
            }


            else if(selectedGenres.length !== 0 && selectedCountries.length !== 0){
                //console.log("redirecting true");
                firstFilter.forEach(movie => {
                    const passesFilter1 = selectedCountries.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviecountries.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                              //  console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });

                            const passesFilter2 = selectedGenres.every(genre => {
                                const normalizedGenre = genre.toLowerCase();
                                const includesGenre = movie.moviegenres.some(movieGenre => movieGenre.toLowerCase() === normalizedGenre);
                             //   console.log("includesGenre:  ", includesGenre);
                                return includesGenre;
                            });
                    
                    if (passesFilter1 && passesFilter2) {
                        secondFilter.push(movie);
                        //filtered.push(movie);
                    }        
                });

                    setFilteredMovies(secondFilter);

            }
        }
    }, [selectedLanguages]);
    
    

    return (
        <>
        <div className="row">

        
             <div className="col-4">
                <label>Select Genre(s):</label>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '30%' }}
                    placeholder="Please select genres"
                    onChange={handleGenreChange}
                >
                    <Option value="action">Action</Option>
                    <Option value="adventure">Adventure</Option>
                    <Option value="fantasy">Fantasy</Option>
                    <Option value="documentary">Documentary</Option>
                    <Option value="crime">Crime</Option>
                    <Option value="romance">Romance</Option>
                    <Option value="thriller">Thriller</Option>
                    <Option value="biography">Biography</Option>
                    <Option value="sport">Sport</Option>
                    <Option value="comedy">Comedy</Option>
                    <Option value="drama">Drama</Option>
                    <Option value="horror">Horror</Option>
                    <Option value="mystery">Mystery</Option>
                    <Option value="animation">Animation</Option>
                    
                    <Option value="scifi">Scifi</Option>
                    <Option value="family">Family</Option>
                    {/* Add more genres as needed */}
                </Select>
            </div>

            <div className="col-4">
                <label>Select Country(s):</label>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '30%' }}
                    placeholder="Please select genres"
                    onChange={handleCountriesChange}
                >
                  
                 
  <Option value="Afghanistan">Afghanistan</Option>
  <Option value="Albania">Albania</Option>
  <Option value="Algeria">Algeria</Option>
  <Option value="Andorra">Andorra</Option>
  <Option value="Angola">Angola</Option>
  <Option value="Antigua and Barbuda">Antigua and Barbuda</Option>
  <Option value="Argentina">Argentina</Option>
  <Option value="Armenia">Armenia</Option>
  <Option value="Australia">Australia</Option>
  <Option value="Austria">Austria</Option>
  <Option value="Azerbaijan">Azerbaijan</Option>
  <Option value="Bahamas">Bahamas</Option>
  <Option value="Bahrain">Bahrain</Option>
  <Option value="Bangladesh">Bangladesh</Option>
  <Option value="Barbados">Barbados</Option>
  <Option value="Belarus">Belarus</Option>
  <Option value="Belgium">Belgium</Option>
  <Option value="Belize">Belize</Option>
  <Option value="Benin">Benin</Option>
  <Option value="Bhutan">Bhutan</Option>
  <Option value="Bolivia">Bolivia</Option>
  <Option value="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
  <Option value="Botswana">Botswana</Option>
  <Option value="Brazil">Brazil</Option>
  <Option value="Brunei">Brunei</Option>
  <Option value="Bulgaria">Bulgaria</Option>
  <Option value="Burkina Faso">Burkina Faso</Option>
  <Option value="Burundi">Burundi</Option>
  <Option value="Cabo Verde">Cabo Verde</Option>
  <Option value="Cambodia">Cambodia</Option>
  <Option value="Cameroon">Cameroon</Option>
  <Option value="Canada">Canada</Option>
  <Option value="Central African Republic">Central African Republic</Option>
  <Option value="Chad">Chad</Option>
  <Option value="Chile">Chile</Option>
  <Option value="China">China</Option>
  <Option value="Colombia">Colombia</Option>
  <Option value="Comoros">Comoros</Option>
  <Option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</Option>
  <Option value="Costa Rica">Costa Rica</Option>
  <Option value="Croatia">Croatia</Option>
  <Option value="Cuba">Cuba</Option>
  <Option value="Cyprus">Cyprus</Option>
  <Option value="Czechia (Czech Republic)">Czechia (Czech Republic)</Option>
  <Option value="Democratic Republic of the Congo">Democratic Republic of the Congo</Option>
  <Option value="Denmark">Denmark</Option>
  <Option value="Djibouti">Djibouti</Option>
  <Option value="Dominica">Dominica</Option>
  <Option value="Dominican Republic">Dominican Republic</Option>
  <Option value="Ecuador">Ecuador</Option>
  <Option value="Egypt">Egypt</Option>
  <Option value="El Salvador">El Salvador</Option>
  <Option value="Equatorial Guinea">Equatorial Guinea</Option>
  <Option value="Eritrea">Eritrea</Option>
  <Option value="Estonia">Estonia</Option>
  <Option value="Eswatini (fmr. 'Swaziland')">Eswatini (fmr. 'Swaziland')</Option>
  <Option value="Ethiopia">Ethiopia</Option>
  <Option value="Fiji">Fiji</Option>
  <Option value="Finland">Finland</Option>
  <Option value="France">France</Option>
  <Option value="Gabon">Gabon</Option>
  <Option value="Gambia">Gambia</Option>
  <Option value="Georgia">Georgia</Option>
  <Option value="Germany">Germany</Option>
  <Option value="Ghana">Ghana</Option>
  <Option value="Greece">Greece</Option>
  <Option value="Grenada">Grenada</Option>
  <Option value="Guatemala">Guatemala</Option>
  <Option value="Guinea">Guinea</Option>
  <Option value="Guinea-Bissau">Guinea-Bissau</Option>
  <Option value="Guyana">Guyana</Option>
  <Option value="Haiti">Haiti</Option>
  <Option value="Holy See">Holy See</Option>
  <Option value="Honduras">Honduras</Option>
  <Option value="Hungary">Hungary</Option>
  <Option value="Iceland">Iceland</Option>
  <Option value="India">India</Option>
  <Option value="Indonesia">Indonesia</Option>
  <Option value="Iran">Iran</Option>
  <Option value="Iraq">Iraq</Option>
  <Option value="Ireland">Ireland</Option>
  <Option value="Israel">Israel</Option>
  <Option value="Italy">Italy</Option>
  <Option value="Jamaica">Jamaica</Option>
  <Option value="Japan">Japan</Option>
  <Option value="Jordan">Jordan</Option>
  <Option value="Kazakhstan">Kazakhstan</Option>
  <Option value="Kenya">Kenya</Option>
  <Option value="Kiribati">Kiribati</Option>
  <Option value="Kuwait">Kuwait</Option>
  <Option value="Kyrgyzstan">Kyrgyzstan</Option>
  <Option value="Laos">Laos</Option>
  <Option value="Latvia">Latvia</Option>
  <Option value="Lebanon">Lebanon</Option>
  <Option value="Lesotho">Lesotho</Option>
  <Option value="Liberia">Liberia</Option>
  <Option value="Libya">Libya</Option>
  <Option value="Liechtenstein">Liechtenstein</Option>
  <Option value="Lithuania">Lithuania</Option>
  <Option value="Luxembourg">Luxembourg</Option>
  <Option value="Madagascar">Madagascar</Option>
  <Option value="Malawi">Malawi</Option>
  <Option value="Malaysia">Malaysia</Option>
  <Option value="Maldives">Maldives</Option>
  <Option value="Mali">Mali</Option>
  <Option value="Malta">Malta</Option>
  <Option value="Marshall Islands">Marshall Islands</Option>
  <Option value="Mauritania">Mauritania</Option>
  <Option value="Mauritius">Mauritius</Option>
  <Option value="Mexico">Mexico</Option>
  <Option value="Micronesia">Micronesia</Option>
  <Option value="Moldova">Moldova</Option>
  <Option value="Monaco">Monaco</Option>
  <Option value="Mongolia">Mongolia</Option>
  <Option value="Montenegro">Montenegro</Option>
  <Option value="Morocco">Morocco</Option>
  <Option value="Mozambique">Mozambique</Option>
  <Option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</Option>
  <Option value="Namibia">Namibia</Option>
  <Option value="Nauru">Nauru</Option>
  <Option value="Nepal">Nepal</Option>
  <Option value="Netherlands">Netherlands</Option>
  <Option value="New Zealand">New Zealand</Option>
  <Option value="Nicaragua">Nicaragua</Option>
  <Option value="Niger">Niger</Option>
  <Option value="Nigeria">Nigeria</Option>
  <Option value="North Korea">North Korea</Option>
  <Option value="North Macedonia">North Macedonia</Option>
  <Option value="Norway">Norway</Option>
  <Option value="Oman">Oman</Option>
  <Option value="Pakistan">Pakistan</Option>
  <Option value="Palau">Palau</Option>
  <Option value="Palestine State">Palestine State</Option>
  <Option value="Panama">Panama</Option>
  <Option value="Papua New Guinea">Papua New Guinea</Option>
  <Option value="Paraguay">Paraguay</Option>
  <Option value="Peru">Peru</Option>
  <Option value="Philippines">Philippines</Option>
  <Option value="Poland">Poland</Option>
  <Option value="Portugal">Portugal</Option>
  <Option value="Qatar">Qatar</Option>
  <Option value="Romania">Romania</Option>
  <Option value="Russia">Russia</Option>
  <Option value="Rwanda">Rwanda</Option>
  <Option value="Saint Kitts and Nevis">Saint Kitts and Nevis</Option>
  <Option value="Saint Lucia">Saint Lucia</Option>
  <Option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</Option>
  <Option value="Samoa">Samoa</Option>
  <Option value="San Marino">San Marino</Option>
  <Option value="Sao Tome and Principe">Sao Tome and Principe</Option>
  <Option value="Saudi Arabia">Saudi Arabia</Option>
  <Option value="Senegal">Senegal</Option>
  <Option value="Serbia">Serbia</Option>
  <Option value="Seychelles">Seychelles</Option>
  <Option value="Sierra Leone">Sierra Leone</Option>
  <Option value="Singapore">Singapore</Option>
  <Option value="Slovakia">Slovakia</Option>
  <Option value="Slovenia">Slovenia</Option>
  <Option value="Solomon Islands">Solomon Islands</Option>
  <Option value="Somalia">Somalia</Option>
  <Option value="South Africa">South Africa</Option>
  <Option value="South Korea">South Korea</Option>
  <Option value="South Sudan">South Sudan</Option>
  <Option value="Spain">Spain</Option>
  <Option value="Sri Lanka">Sri Lanka</Option>
  <Option value="Sudan">Sudan</Option>
  <Option value="Suriname">Suriname</Option>
  <Option value="Sweden">Sweden</Option>
  <Option value="Switzerland">Switzerland</Option>
  <Option value="Syria">Syria</Option>
  <Option value="Tajikistan">Tajikistan</Option>
  <Option value="Tanzania">Tanzania</Option>
  <Option value="Thailand">Thailand</Option>
  <Option value="Timor-Leste">Timor-Leste</Option>
  <Option value="Togo">Togo</Option>
  <Option value="Tonga">Tonga</Option>
  <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
  <Option value="Tunisia">Tunisia</Option>
  <Option value="Turkey">Turkey</Option>
  <Option value="Turkmenistan">Turkmenistan</Option>
  <Option value="Tuvalu">Tuvalu</Option>
  <Option value="Uganda">Uganda</Option>
  <Option value="Ukraine">Ukraine</Option>
  <Option value="United Arab Emirates">United Arab Emirates</Option>
  <Option value="United Kingdom">United Kingdom</Option>
  <Option value="United States">United States of America</Option>
  <Option value="Uruguay">Uruguay</Option>
  <Option value="Uzbekistan">Uzbekistan</Option>
  <Option value="Vanuatu">Vanuatu</Option>
  <Option value="Venezuela">Venezuela</Option>
  <Option value="Vietnam">Vietnam</Option>
  <Option value="Yemen">Yemen</Option>
  <Option value="Zambia">Zambia</Option>
  <Option value="Zimbabwe">Zimbabwe</Option>

                    {/* Add more genres as needed */}
                </Select>
            </div>

            <div className="col-4">
                <label>Select Language(s):</label>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '30%' }}
                    placeholder="Please select genres"
                    onChange={handleLanguageChange}
                >
                    <Option value="hindi">Hindi</Option>
                    <Option value="malayalam">Malayalam</Option>
                    <Option value="kannada">Kannada</Option>
                    <Option value="tamil">Tamil</Option>
                    <Option value="english">English</Option>
                    <Option value="japanese">Japanese</Option>
                    <Option value="chinese">Chinese</Option>
                    <Option value="spanish">Spanish</Option>
                    <Option value="korean">Korean</Option>
                    <Option value="telugu">Telugu</Option>
                    <Option value="sinhala">Sinhala</Option>
                    <Option value="bengali">Bengali</Option>
                    <Option value="oriya">Oriya</Option>
                    <Option value="assamese">Assamese</Option>
                    <Option value="urdu">Urdu</Option>
                    <Option value="kashmiri">Kashmiri</Option>
                    <Option value="bhojpuri">Bhojpuri</Option>
                    <Option value="gujrati">Gujrati</Option>
                    <Option value="marathi">Marathi</Option>
                    <Option value="portuguese">Portuguese</Option>
                    <Option value="korean">Korean</Option>
                    <Option value="turkish">Turkish</Option>
                    <Option value="spanish">Spanish</Option>
                    {/* Add more genres as needed */}
                </Select>
            </div>

            </div>


            <div className="row">
                {filteredMovies.map((movie, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                        <Cards
                            movPhot={movie.moviemainphotos}
                            movtitle={movie.movietitle}
                            imdbmov={movie.imdbmovieid}
                            movLang={movie.movielanguages}
                            movCount={movie.moviecountries}
                            movGen={movie.moviegenres}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Body;
