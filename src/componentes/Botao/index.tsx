import './Botao.css'

interface BotaoProps {
    texto: String
}

const Botao = (props:BotaoProps) => {
    return <button className="botao">
        {props.texto}
    </button>
}

export default Botao