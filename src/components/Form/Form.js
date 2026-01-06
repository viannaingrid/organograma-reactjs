import "./Form.css";
import TextField from "./../TextField/TextField.js";
import DropDownList from "../DropDownList/DropDownList.js";
import Button from "../Button/Button.js";


const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu Nome" />
                <TextField label="Cargo" placeholder="Digite seu Cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropDownList label="Time" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
