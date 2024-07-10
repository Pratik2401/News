import React from 'react'
import PropTypes from 'prop-types'
import './NewsItem.css'

function NewsItem(props) {
  return (
    <>
        <div className="card text-bg-dark ">

    <img src={props.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <div className="button">
    <a href={props.url} className="btn btn-light">Go to News</a>
    </div>
  </div>
</div>
    </>
  )
}

NewsItem.propTypes = {

}

export default NewsItem

