import { IColaborador } from '../../shared/interfaces/IColaborador'
import { ITime } from '../../shared/interfaces/ITime'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    colaboradores: IColaborador[]
    time: ITime
    mudarCor: (cor:string, id:string) => void
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
    return (
        colaboradores.length > 0 ?
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.cor.concat('77') }}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='time__input-cor'/>
            <h3 className='time__titulo' style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='time__colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (<Colaborador 
                                key={colaborador.id} 
                                colaborador={colaborador} 
                                corDeFundo={time.cor} 
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}/>)
                })}
            </div>
        </section>
        : <></>        
    )
}

export default Time