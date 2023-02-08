import '../css/card.css';

export default function GlassCard({stateName, image, abbreviation, altText}) {
    return (
        <div className="card mt-2 mb-4 card-container px-4 align-self-center" >
            <div className='card-image pt-4 d-flex justify-content-center'>
                <img src={image} alt={altText} className='flag-image align-self-start'/>
            </div>
            <div className='card-description text-center my-4'>
                <h4>{stateName}</h4>
            </div>
        </div>
    );
}
