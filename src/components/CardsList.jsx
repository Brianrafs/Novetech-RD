import { useState } from 'react';
import Card from '../components/Card';
import {Link} from 'react-router-dom';
import useUnidades from '../hooks/useUnidades';

export default function CardsList(props) {

    const [flags, setFlags] = useState([]);
    const {listUnidades} = useUnidades();



    const filteredData = listUnidades.filter((state) => {
        // if we don't have an input, then return the original array
        if (props.input === '') {
            return state;
        }
        // return the item that contains the user input
        else {
            return state.UF.toLowerCase().includes(props.input)
        }

    });

    return (
        <>
            {filteredData.map((flag) => (
                <Link to={`/states/${flag.UF}`} >
                <Card 
                image={flag.BANDEIRA}
                stateName={flag.UF}
                />
                </Link>
            ))}
        </>
    )
}