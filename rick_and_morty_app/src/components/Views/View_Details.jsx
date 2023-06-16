import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

const DetailContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
const DataPanel = styled.div`
background-color: #3b2555;
color: white;
`

const CharContainer = styled.div`

`
const ImgChar = styled.img`
width: 400px;
height: 400px;
border-radius: 50px;

`



export default function Details(){
    const {id} = useParams()  // <----- Si el id se pasara por props seria asi: id={props.match.params.id}
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const {name,gender,species,origin,image,status} = character

    return(
        <DetailContainer>
            <DataPanel>
                <h1>{name}</h1>
                <h1>{gender}</h1>
                <h1>{species}</h1>
                <h1>{origin?.name}</h1>
                <h1>{status}</h1>
            </DataPanel>
            <CharContainer>
                <ImgChar src={image} alt={name} />
            </CharContainer>
            
        </DetailContainer>
    )
}