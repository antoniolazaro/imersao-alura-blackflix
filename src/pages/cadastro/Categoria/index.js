import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const [categorias, setCategorias] = useState([]);
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#d6c017'
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value
    })
  }

  function onChangeHandler({target}){
    const {id, value} = target;
    setValue(id,value)
  }

  function onSubmitHandler(event){
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>        
        <form onSubmit={onSubmitHandler}>
          
          <FormField 
          id="nome"
          type="text"
          label="Nome"
          value={values.nome} 
          onChangeHandler={onChangeHandler}
          />

          <FormField 
          id="descricao"
          type="textarea"
          label="Descrição"
          value={values.descricao} 
          onChangeHandler={onChangeHandler}
          />

         <FormField 
          id="cor"
          type="color"
          label="Cor"
          value={values.cor} 
          onChangeHandler={onChangeHandler}
          />
          
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria,indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
          })}
        </ul>

      <Link to="/">
        Ir pra home
      </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;