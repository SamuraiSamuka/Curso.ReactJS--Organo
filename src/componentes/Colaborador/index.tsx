import { IColaborador } from '../../shared/interfaces/IColaborador'
import './Colaborador.css'

interface ColaboradorProps {
    colaborador: IColaborador
    corDeFundo: string
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {
    
    function favoritar() {
        aoFavoritar(colaborador.id)
    }
   
    return (
        <div className="colaborador">
            <div className='colaborador__deletar'>
                <span 
                    onClick={() => { aoDeletar(colaborador.id) }}
                    className="material-symbols-outlined">delete</span>
            </div>
            <div className="colaborador__cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img className='colaborador__img' src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{colaborador.nome}</h4>
                <h5 className='colaborador__cargo'>{colaborador.cargo}</h5>
                <div className='colaborador__favoritar'>
                    {colaborador.favorito
                        ? <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", color: "red"}} onClick={favoritar}>favorite</span>
                        : <span className="material-symbols-outlined" onClick={favoritar}>favorite</span>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador