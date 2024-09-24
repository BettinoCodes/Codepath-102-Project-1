import './index.css';

function Card(props) { 
    const title = props.title;
    const description = props.description;
    const imgSrc = props.imgSrc;
    const pagelink = props.pagelink;

    return(
        <div className="card">
            <img className="card-image" src={imgSrc}></img>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}
            </p>
            <a href={pagelink}>
            <button className='card-button'>BUY NOW</button>
            </a>
        </div>
    )
}


export default Card