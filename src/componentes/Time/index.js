import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 ?
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.3) }}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='time__input-cor'/>
            <h3 className='time__titulo' style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='time__colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (<Colaborador 
                                key={indice} 
                                colaborador={colaborador} 
                                corDeFundo={time.cor} 
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}/>)
                })}
            </div>
        </section>
        : ""        
    )
}

export default Time