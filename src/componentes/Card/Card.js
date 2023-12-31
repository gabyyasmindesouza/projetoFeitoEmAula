import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

  const [loading, setLoading] = useState(true)
  const [forumTopics, setForumTopics] = useState([])

  const {selectPostId} = useState(GlobalStateContect)

  useEffect(()=>{
    getPostAll(setForumTopics)
  },[])
 
  return (
    <>
  {
    loading ?(
      <ContainerCard>
        {forumTopics && forumTopics.map(dado =>{
          return(
            <CardStyle key={dado.post.id}>
              <PerfilUsuario>
                <ImgCard src={'https://i.pinimg.com/736x/29/82/ef/2982ef69a008160cb67ef0a0e8af43de.jpg'}/>
                <ContainerPerfil>
                  <NomeCard>{dado.creator_username}</NomeCard>
                  <MensagemCard>{dado.post_created_at}</MensagemCard>
                </ContainerPerfil>
              </PerfilUsuario>
              <TituloCard>{dado.post_title}</TituloCard>
              <CardPost>
                <ImgPost src={dado.post_image} alt='foto post'/>
                <ConteudoCard>{dado.post_content}</ConteudoCard>
              </CardPost>
              <EditPost>
                <Comentar
                  postId={dado.post_id}
                  comments={dado.comments}
                  autorId={dado.created_id}
                />
              </EditPost>
            </CardStyle>
          )
        })}
      </ContainerCard>
    ):(<p>Loading</p>)
  }
    </>
  )
}

export default Card