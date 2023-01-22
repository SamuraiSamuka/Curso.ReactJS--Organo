import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo }) => {
    return (
        <div className="colaborador">
            <div className="colaborador__cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img className='colaborador__img' src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{colaborador.nome}</h4>
                <h5 className='colaborador__cargo'>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador