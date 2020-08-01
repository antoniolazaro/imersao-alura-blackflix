import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import EmojiLoading from '../../../components/EmojiLoading';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#d6c017',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function onSubmitHandler(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);

    categoriasRepository.insert(values)
      .then((resposta) => {
        console.log(resposta);
        clearForm(valoresIniciais);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasComVideos) => {
      setCategorias(categoriasComVideos);
    })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.titulo}
      </h1>
      <form onSubmit={onSubmitHandler}>

        <FormField
          id="titulo"
          label="Título"
          value={values.titulo}
          onChangeHandler={handleChange}
        />

        <FormField
          id="descricao"
          type="textarea"
          label="Descrição"
          value={values.descricao}
          onChangeHandler={handleChange}
        />

        <FormField
          id="cor"
          type="color"
          label="Cor"
          value={values.cor}
          onChangeHandler={handleChange}
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
          <li key={categoria.id}>
            {categoria.titulo}
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
