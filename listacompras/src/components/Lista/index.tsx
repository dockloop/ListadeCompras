import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Itens </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={index}
                        {...item}
                    />


                ))}
            </ul>
        </aside>
    )
}

export default Lista;