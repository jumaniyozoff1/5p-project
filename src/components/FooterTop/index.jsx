import React from 'react'
import {Container,Wrapper,Title,Icon,Img} from './style'
import Desingn from '../../assets/img/desingn.jpg'


const FooterTop = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={Desingn}/>
        <Title>
          <div className='ruler'>
            <Icon.Phone className='icon'/>
          </div>
          <h1 className='title'>For Excellent Performance Focus on Critical.</h1>
          <Title.email>
            <Icon.Phone/>
            <a className='small-description' href="#">(+01) 300176513 (21)</a>
            <div className='hr'></div>
            <Icon.Email/>
            <a className='small-description' href="#">info@Example.com</a>
          </Title.email>
        </Title>
      </Wrapper>
    </Container>
  )
}

export default FooterTop
