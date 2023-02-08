// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// CSS
import '../css/index.css';
import '../css/waves.css';

// Components
import ButtonMain from '../components/ButtonMain';
import Waves from '../components/Waves'

// Assets
import isoTipo from '../assets/images/isotipo_novetech_branco.png';
import Esus from '../assets/images/ESUS.png';
import Server from '../assets/images/server.svg';
import Atend from '../assets/images/isotipo_novetech_red.svg';

export default function Index() {
    return (
        <>
            <main className='container d-flex justify-content-center flex-column pt-5 gap-2'>
                <div className='mb-3'>
                    <div className='d-flex justify-content-center'>
                        <img id='isotipoBranco' src={isoTipo} alt='Logotipo da empresa Novetech'></img>
                    </div>
                    <p className='pt-4 fw-light text-center justify-content-center fs-5'>
                        Selecione uma das opções abaixo:
                    </p>    
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <ButtonMain name='E-SUS PEC' sourceImage={Esus} idIcon='Esus' route='states' altText='Logo do serviço E-SUS PEC'/>
                    <ButtonMain name='ATEND INDICADORES' sourceImage={Atend} idIcon='Atend' altText='Logo da empresa Novetech em vermelho'/>
                    <ButtonMain name='SERVIDORES' sourceImage={Server} idIcon='Server' altText='Ícone de um servidor'/>
                </div>
            </main>
            <Waves />
        </>
    );
}
