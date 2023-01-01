import './Colaborador.css'

const Colaborador = ({nome, cargo, imagemURL, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='colaborador__cabecalho' style={{backgroundColor: corDeFundo}}>
                <img className='colaborador__img' src={imagemURL} alt={nome} />
            </div> 
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{nome}</h4>
                <h5 className='colaborador__cargo'>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador