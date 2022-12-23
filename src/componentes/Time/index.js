import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        <section className='time'style={{backgroundColor: props.corSecundaria}}>
            <h3 className='time__titulo' style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>            
            {props.colaboradores.map( (colaborador) => {return <Colaborador 
                key={colaborador.nome}
                nome={colaborador.nome}   
                cargo={colaborador.cargo}
                imagemURL={colaborador.imagemURL | 'https:\\github.com\SamuraiSamuka.png'} 
            />})}
        </section>
    )
}

export default Time