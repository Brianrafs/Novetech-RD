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
import infra from '../assets/images/infra.svg';
import support from '../assets/images/support.svg';


export default function Index() {
    return (
        <>
            <main className='container d-flex justify-content-center flex-column pt-5 gap-2'>
                <div className='mb-3'>
                    <div className='d-flex justify-content-center'>
                        <img id='isotipoBranco' src={isoTipo} alt='Logotipo da empresa Novetech'></img>
                    </div>
                    <p className='pt-4 fw-light text-center justify-content-center fs-5'>
                        Selecione o tipo de serviço:
                    </p>    
                </div>
                <div className='d-flex justify-content-center align-items-center gap-5'>
                    <ButtonMain name='SUPORTE PEC' sourceImage={support} idIcon='support' route='states' altText='Logo do serviço E-SUS PEC'/>
                    <ButtonMain name='INFRAESTRUTURA' sourceImage={infra} idIcon='Server' altText='Ícone de um servidor'/>
                </div>
            </main>
            <Waves />
        </>
    );
}
