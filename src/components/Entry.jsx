import './Entry.css';

function Entry() {
    return(
        <section className='entry'>
            <div className='img-container'>
                <img src='../../public/japan.png' alt='japan image'></img>
            </div> 
            <div className='details'>
                <div className='location'>
                    <img src='../../public/adobe-location.png' alt='location icon'></img>
                    <p>JAPAN</p>
                    <a href='https://www.google.com'>View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}

export default Entry;