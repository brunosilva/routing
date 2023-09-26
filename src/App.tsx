import './App.css'
import Button from './components/Button'
import { GridSC } from './components/Grid/styles'
import Title from './components/Title'

import { Outlet } from 'react-router-dom'
import Logo from './components/Logo'
import { ContainerAppSC, ContainerBodySC, ContainerHeaderSC } from './style/app'

function App() {
  return (
    <ContainerAppSC>
      <Logo />
      <ContainerHeaderSC>
        <Title border={true} label="Projeto para aprendizado de novo conceito: `createBrowserRouter`" />
        <GridSC>
          <Button path="/profile" label="Profile" />
          <Button path="/projects" label="Repositories" />
        </GridSC>
      </ContainerHeaderSC>
      <ContainerBodySC border={true} >
        <Outlet />
      </ContainerBodySC>
    </ContainerAppSC>
  )
}

export default App
