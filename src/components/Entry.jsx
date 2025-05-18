import './Entry.css';
import locationIcon from '../assets/adobe-location.png';

function Entry(props) {
    return (
        <article className='enrty-container'>
            <section className='entry'>
                <div className='img-container'>
                    <img src={props.img.imgUrl} alt={props.img.imgAlt}></img>
                </div>
                <div className='details'>
                    <div className='location'>
                        <img src={locationIcon} alt='location icon'></img>
                        <p>{props.location}</p>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className='date'>{props.date}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </section>
            <hr />
        </article>
    )
}

export default Entry;