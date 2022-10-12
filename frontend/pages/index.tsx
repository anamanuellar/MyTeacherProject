import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Cabecalho/Lista/Lista'



const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1, 
      nome: 'Professor1',
      foto: 'https://github.com/anamanuellar.png',
      descricao: 'Descrição do professor 1',
      valor_hora: 100
    },
    {
      id: 2, 
      nome: 'Professor2',
      foto: 'https://github.com/anamanuellar.png',
      descricao: 'Descrição do professor 2',
      valor_hora: 200
    },
    {
      id: 3, 
      nome: 'Professor3',
      foto: 'https://github.com/anamanuellar.png',
      descricao: 'Descrição do professor 3',
      valor_hora: 300
    },
    {
      id: 4, 
      nome: 'Professor4',
      foto: 'https://github.com/anamanuellar.png',
      descricao: 'Descrição do professor 4',
      valor_hora: 400
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
   
  )
}

export default Home
