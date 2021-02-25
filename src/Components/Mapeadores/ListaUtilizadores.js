import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../Styles/Mapeadores.css';
import Placeholder from '../../Images/Placeholder.jpg';
import AdicionarAmigo from '../../Images/AdicionarAmigo.svg';
import {ProgressBar} from 'react-bootstrap';
import {storage} from '../../Firebase/FbConfig';

const ProfilePicture = styled.div`
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    min-height: 70px;
    width: 70px;
`;

const UserCard = styled.div`
margin: 20px 0 0 0;
`

const Self = styled.span`
font-size:0.65rem;
color: #555`



function ListaUtilizadores(props) {

    const [imagem, setImagem] = useState(null);

    useEffect(() => {
        if(props.user.imagemUser){
            storage.ref('imagensUtilizadores').child(`${props.user.imagemUser}`).getDownloadURL().then((url) => {
                if (imagem === null) {
                    setImagem(url)
                }
            })
        }
    }, [])

    const FriendCard=()=> {
        return (
            <span className="row col-12 m-0 mt-3 p-0 divUtilizador">
            <div className="col-3 p-0">
                <ProfilePicture style={{backgroundImage: `url(${imagem !== null ? imagem : Placeholder})`}}/>
            </div>
            <div className="col-9 pr-0">
                <span>
                        <p className="nomeUtilizador mb-0 pb-0">{props.user.nomeUtilizador}</p>
                </span>
                <span className="col-12 row m-0 p-0 divUtilizador">
                    <span className="col-9 m-0 pr-1 pl-0">
                        <ProgressBar now={60} variant="custom"/>
                    </span>
                    <span className="col-3 m-0 p-0">
                        <p className="nivelUtilizador mb-0 pb-0">niv. 14</p>
                    </span>
                </span>
            </div>
        </span>
        )
    }
    
    const AllCard = () => {
        console.log(props.user)
        return (
            <span className="row col-12 m-0 mt-3 p-0 divUtilizador">
            <div className="col-3 p-0">
                <ProfilePicture style={{backgroundImage: `url(${imagem !== null ? imagem : Placeholder})`}}/>
            </div>
            <div className="col-9 pr-0">
                <span>
                    <p className="nomeUtilizador mb-0 pb-0">{props.user.nomeUtilizador}</p>
                </span>
                <span className="col-12 row m-0 p-0 divUtilizador">
                    <span className="col-7 m-0 pr-1 pl-0">
                        <ProgressBar now={60} variant="custom"/>
                    </span>
                    <span className="col-3 m-0 p-0">
                        <p className="nivelUtilizador mb-0 pb-0">niv. 14</p>
                    </span>
                    <span className="col-2 m-0 p-0 text-center">
                        <img src={AdicionarAmigo} className="m-0"/>
                    </span>
                </span>
            </div>
        </span>
        )
    }
    
    const OwnCard = () => {
        return (
            <span className="row col-12 m-0 mt-3 p-0 divUtilizador">
            <div className="col-3 p-0">
                <ProfilePicture style={{backgroundImage: `url(${imagem !== null ? imagem : Placeholder})`}}/>
            </div>
            <div className="col-9 pr-0">
                <span>
                    <p className="nomeUtilizador mb-0 pb-0">{props.user.nomeUtilizador} <Self>Eu!</Self></p>
                </span>
                <span className="col-12 row m-0 p-0 divUtilizador">
                    <span className="col-9 m-0 pr-1 pl-0">
                        <ProgressBar now={60} variant="custom"/>
                    </span>
                    <span className="col-3 m-0 p-0">
                        <p className="nivelUtilizador mb-0 pb-0">niv. 14</p>
                    </span>
                    
                </span>
            </div>
        </span>
        )
    }
    
    const getCard = () => {
        switch(props.tipo) {
            case "own":
                return <OwnCard />;
            case "Amigos":
                return <FriendCard/>;
            default:
                return <AllCard />
        }
    }

    return(
        <UserCard className="p-0 mb-5">
            {getCard()}
        </UserCard>
    )
}

export default ListaUtilizadores