import type { NextPage } from 'next'
import Titulo from '../ui/components/titulo/titulo';
import Lista from '../ui/components/lista/lista';

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
          <span>
            Com um pegueno valor mensal, você <br/>
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }/>

      <Lista 
        pets={[
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
        ]}
      />
    </div>
  )
}

export default Home
