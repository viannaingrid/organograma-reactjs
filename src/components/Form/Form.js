import "./Form.css";
import TextField from "./../TextField/TextField.js";

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu Nome" />
                <TextField label="Cargo" placeholder="Digite seu Cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
            <button>Criar Card</button>
        </section>
    );
};

export default Form;
