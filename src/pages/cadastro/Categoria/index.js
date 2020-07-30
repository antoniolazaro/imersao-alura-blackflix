import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import EmojiLoading from '../../../components/EmojiLoading';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:4000/categorias'
    : 'https://imersao-react-blackflix.herokuapp.com/categorias'; 

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#d6c017',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function onChangeHandler({ target }) {
    const { id, value } = target;
    setValue(id, value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then(() => setValues(valoresIniciais));
  }

  useEffect(() => {

    fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([...resposta]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={onSubmitHandler}>

        <FormField
          id="nome"
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

        <Button>
          Cadastrar
        </Button>

        {/* {categorias.length === 0 && ( */}
        <EmojiLoading />
        {/* )} */}
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
