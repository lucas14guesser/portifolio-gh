import React from 'react'
import { AreaMsg, BtnContact, ContainerContatoPage, FormContact, InptContact, SubcontainerNameSbr, TitlePageContato } from '../styles/ContatoPageStyles'

function ContatoPage() {
  return (
    <ContainerContatoPage>
      <TitlePageContato>Contato</TitlePageContato>

      <FormContact action="mailto:guilherme7hs@gmail.com" method="post" enctype="text/plain">
        <SubcontainerNameSbr>
          <InptContact type="text" placeholder='NOME' required style={{width: '50%'}}/>
          <InptContact type="text" placeholder='SOBRENOME' style={{width: '50%'}}/>
        </SubcontainerNameSbr>

        <InptContact type="email" placeholder='E-MAIL' required style={{width: '100%'}}/>

        <InptContact type="text" placeholder='ASSUNTO' style={{width: '100%'}}/>

        <AreaMsg name="Mensagem" id="msg" placeholder='MENSAGEM' rows='10' cols='50' required style={{width: '100%'}}></AreaMsg>

        <BtnContact type='submit'>Enviar</BtnContact>
      </FormContact>
    </ContainerContatoPage>
  )
}

export default ContatoPage