import './rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape__container'>
            <div className='rodape'>
                <div className='rodape__redes-sociais'>
                    <img className='rodape__icones-redes' src='/imagens/ig.png' alt={''}/>
                    <img className='rodape__icones-redes' src='/imagens/tw.png' alt={''}/>
                    <img className='rodape__icones-redes' src='/imagens/fb.png' alt={''}/>
                </div>
                <img className='rodape__logo' src='/imagens/logo.png' alt=''/>
                <p className='rodape__dev'>Desenvolvido por Samuel</p>
            </div>
        </footer>
    )
}

export default Rodape