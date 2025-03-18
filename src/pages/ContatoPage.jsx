import React from 'react'
import { AreaMsg, BtnContact, ContainerContatoPage, FormContact, InptContact, SubcontainerNameSbr, TitlePageContato } from '../styles/ContatoPageStyles'

function ContatoPage() {
  return (
    <ContainerContatoPage>
      <TitlePageContato>Contato</TitlePageContato>

      <FormContact action="mailto:guilherme7hs@gmail.com" method="post" enctype="text/plain">
        <SubcontainerNameSbr>
          <InptContact type="text" placeholder='Nome' required style={{width: '50%'}}/>
          <InptContact type="text" placeholder='Sobrenome' style={{width: '50%'}}/>
        </SubcontainerNameSbr>

        <InptContact type="email" placeholder='E-mail' required style={{width: '100%'}}/>

        <InptContact type="text" placeholder='Assunto' style={{width: '100%'}}/>

        <AreaMsg name="Mensagem" id="msg" placeholder='Mensagem' rows='10' cols='50' required style={{width: '100%'}}></AreaMsg>

        <BtnContact type='submit'>Enviar</BtnContact>
      </FormContact>
    </ContainerContatoPage>
  )
}

export default ContatoPage