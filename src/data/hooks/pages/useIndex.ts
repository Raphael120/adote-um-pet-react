import { useState } from 'react';
import { Pet } from '../../@types/Pet';


export function useIndex(){
    const [listaPets, setListaPets] = useState(
        [
          {
            id: 1,
            nome: 'Bidu',
            historia: 'aoskdasodksaodkasokdoasodkoaskd',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFagTiTpNY1gk2vXKKj6ZKPbPm8rJuHthJRw&usqp=CAU'
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'É um animal muito dócil.',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx95LKp11nXxOq-nFnUkuvVtUDxfnDnGdLQ&usqp=CAU'
          },
        ]
    ),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('teste');

    function adotar(){}

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}