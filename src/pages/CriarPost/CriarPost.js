import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [hashtag, setHashtag] = useState('')

  const criarPostApi = async(e)=> {
    e.preventDefault()
    if(!title || !content){
      alert("Titulo e conteúdo são campos obrigatórios")
    }

    const hashtagarray = hashtag.split(",")

    await createPost(title, content, image, hashtag)
    .then((response)=>{
      console.log("Post criado com sucesso", response)
    })
    .catch((error)=>{
      console.error("Erro ao criar post", error)
    })
  }
  
  useVerificarToken()


  return (
   <>
   
   </>
  );
};

export default CriarPost;
