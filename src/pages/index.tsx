import type { NextPage } from 'next'
import Titulo from '../ui/components/titulo/titulo';

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
    </div>
  )
}

export default Home
