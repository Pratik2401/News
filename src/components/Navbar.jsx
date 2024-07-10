import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar(props) {
  const { updateStatus } = props;
  const countries = [
    { country: 'United Arab Emirates', code: 'ae' },
    { country: 'Argentina', code: 'ar' },
    { country: 'Austria', code: 'at' },
    { country: 'Australia', code: 'au' },
    { country: 'Belgium', code: 'be' },
    { country: 'Bulgaria', code: 'bg' },
    { country: 'Brazil', code: 'br' },
    { country: 'Canada', code: 'ca' },
    { country: 'Switzerland', code: 'ch' },
    { country: 'China', code: 'cn' },
    { country: 'Colombia', code: 'co' },
    { country: 'Cuba', code: 'cu' },
    { country: 'Czech Republic', code: 'cz' },
    { country: 'Germany', code: 'de' },
    { country: 'Egypt', code: 'eg' },
    { country: 'France', code: 'fr' },
    { country: 'United Kingdom', code: 'gb' },
    { country: 'Greece', code: 'gr' },
    { country: 'Hong Kong', code: 'hk' },
    { country: 'Hungary', code: 'hu' },
    { country: 'Indonesia', code: 'id' },
    { country: 'Ireland', code: 'ie' },
    { country: 'Israel', code: 'il' },
    { country: 'India', code: 'in' },
    { country: 'Italy', code: 'it' },
    { country: 'Japan', code: 'jp' },
    { country: 'South Korea', code: 'kr' },
    { country: 'Lithuania', code: 'lt' },
    { country: 'Latvia', code: 'lv' },
    { country: 'Morocco', code: 'ma' },
    { country: 'Mexico', code: 'mx' },
    { country: 'Malaysia', code: 'my' },
    { country: 'Nigeria', code: 'ng' },
    { country: 'Netherlands', code: 'nl' },
    { country: 'Norway', code: 'no' },
    { country: 'New Zealand', code: 'nz' },
    { country: 'Philippines', code: 'ph' },
    { country: 'Poland', code: 'pl' },
    { country: 'Portugal', code: 'pt' },
    { country: 'Romania', code: 'ro' },
    { country: 'Serbia', code: 'rs' },
    { country: 'Russia', code: 'ru' },
    { country: 'Saudi Arabia', code: 'sa' },
    { country: 'Sweden', code: 'se' },
    { country: 'Singapore', code: 'sg' },
    { country: 'Slovenia', code: 'si' },
    { country: 'Slovakia', code: 'sk' },
    { country: 'Thailand', code: 'th' },
    { country: 'Turkey', code: 'tr' },
    { country: 'Taiwan', code: 'tw' },
    { country: 'Ukraine', code: 'ua' },
    { country: 'United States', code: 'us' },
    { country: 'Venezuela', code: 've' },
    { country: 'South Africa', code: 'za' }
  ];

  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Newsify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                  <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="#"
                  onClick={() => updateStatus({category:"general",country:props.country})}
                >
                  Home
                </a>
              </li>
                  <li className="dropup-center">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu bg-dark">
                  <li className={`dropdown-item  ${props.category === 'bunsiness' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() => updateStatus({ category: "business",country:props.country})}
                      
                    >
                      Business
                    </a>
                  </li>
                  <li className={`dropdown-item  ${props.category === 'entertainment' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() =>
                        updateStatus({ category: "entertainment" ,country:props.country})
                      }
                    >
                      Entertainment
                    </a>
                  </li>
                  <li className={`dropdown-item  ${props.category === 'health' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() => updateStatus({ category: "health",country:props.country })}
                    >
                      Health
                    </a>
                  </li>
                  <li className={`dropdown-item  ${props.category === 'science' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() => updateStatus({ category: "science",country:props.country })}
                    >
                      Science
                    </a>
                  </li>
                  <li className={`dropdown-item  ${props.category === 'sports' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() => updateStatus({ category: "sports",country:props.country })}
                    >
                      Sports
                    </a>
                  </li>
                  <li className={`dropdown-item  ${props.category === 'technology' ? 'active' : ''}`}>
                    <a
                      className="nav-link text-light"
                      href="#"
                      onClick={() => updateStatus({ category: "technology",country:props.country })}
                    >
                      Technology
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </button>
                <ul className="dropdown-menu bg-dark ">
                  
                  {
                    countries.map(element=>{
                      return(
                        
<li className={`dropdown-item  ${props.country === element.code ? 'active' : ''}`} key={element.code}>    

                    <a
                    className="nav-link text-light"
                      key={element.code}
                      href="#"
                      onClick={() => updateStatus({category:props.category,country:element.code})}
                    >
                      {element.country}
                    </a>
                  </li>
  
              )
                    })
                  }

                </ul>
                
              </li>
            </ul>
         
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  updateStatus: PropTypes.func.isRequired,
};

export default Navbar;
