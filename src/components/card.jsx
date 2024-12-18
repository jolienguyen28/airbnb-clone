import React from 'react';


export default function Card(props){
    return(
        <section>
            <img src={`/images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="/images/star.jpg" className="card--star" />
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) </span>
                <span className='gray'> {props.country} </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'>From ${props.price}</span> /person</p>
        </section>
    )
}