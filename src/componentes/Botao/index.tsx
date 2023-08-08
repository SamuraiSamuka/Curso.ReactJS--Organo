import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement,
    texto: String
}

const Botao = (props:BotaoProps) => {
    return <button className="botao">
        {props.texto}
    </button>
}

export default Botao