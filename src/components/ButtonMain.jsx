import '../css/buttonMain.css';
import { Link } from 'react-router-dom';



export default function ButtonMain({name, sourceImage, idIcon, route, altText}) {
    return (
        <Link to={route} className="text-decoration-none">
            <button className="buttonMain" type='button'>
                <img className='logoButton' src={sourceImage} id={idIcon} alt={altText}/>
                <span className="label text-dark">{name}</span>
            </button>
        </Link>
    );
}
