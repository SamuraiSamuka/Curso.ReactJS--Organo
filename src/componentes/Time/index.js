import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 ?
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input type='color' className='time__input-cor'/>
            <h3 className='time__titulo' style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='time__colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
        : ""        
    )
}

export default Time