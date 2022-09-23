import React from 'react';
import styles from "./UserPhotoPost.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import {PHOTO_POST} from "../../api";
import Error from "../Help/Error";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({

  });
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(data) navigate("/conta");
  },[data, navigate])


  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("idade", idade.value);
    formData.append("peso", peso.value);

    const token = window.localStorage.getItem("token");
    const {url, options} = PHOTO_POST(formData, token);
    request(url, options);
  }
  const handleChangeImg = ({target})=>{
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    })
  }
  return (
    <section className={`${styles.photoPost} animelft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome}/>
        <Input label="Peso" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <input className={styles.files} type="file" onChange={handleChangeImg}/>
        {loading ?(
          <Button disabled>Enviando...</Button>
        ): (
          <Button>Enviar</Button>
        )}
        <Error error={error}/>
      </form>
      {img.preview && <div className={styles.preview} style={{backgroundImage: `url(${img.preview})`}}></div>}
    </section>
  )
}

export default UserPhotoPost
