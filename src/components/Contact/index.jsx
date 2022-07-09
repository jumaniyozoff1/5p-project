// import React,{useRef, useState} from 'react'
// import {Container,Wrapper,Register,Img,} from './style'
// import Registerimg from '../../assets/img/register.jpg'
// import Button from '../../Generic/Button'
// import { useQuery,useMutation } from 'react-query'


// const Contact = () => {
//   const [name, setName] = useState('')
//   const [companyName, setcompanyName] = useState('')
//   const [phoneNumber, setphoneNumber] = useState('')
//   const [disable, setDisable] = useState(true)

//   const {mutate} = useMutation(async ()=>{
//     const res = await fetch(``, {
//     method: 'POST', headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify({ name: name.current.value, componyName: companyName.current.value, phoneNumber: phoneNumber.current.value })
//     });
//     return res.json; 
//   },
//   {
//     onSuccess:(res)=>{

//     },
//     onError: (err)=>{
//       console.log(err)
//     }
//   })

//   const func =()=>{
//     if(name.length >= 1  ){
//       setDisable(false)
//     }
//     else{
//       setDisable(true)
//     }
//   }
//   return (
//     <Container>
//       <Wrapper>
//         <Register>
//           <input onChange={(e)=>{setName(e.target.value)}}  placeholder='Ism' type="text" />
//           <input  placeholder='Familiya' type="text" />
//           <input  placeholder='Kompaniya yoki firmangiz nomi' type="text" />
//           <input placeholder='Telefon raqamingiz' type="text" />
//           {/* <textarea placeholder='Comments/Message' name="" id="" cols="30" rows="10" ></textarea> */}
//           <Button type={'primary'}>Send Request</Button>
//           <button disabled={disable} onClick={func}>get</button>
//         </Register>
//         <Img src={Registerimg}></Img>
//       </Wrapper>
//     </Container>
//   )
// }
// export default Contact

















import React, { useRef,useState } from "react";
import { Container, Wrapper, Register, Img } from "./style";
import Registerimg from "../../assets/img/register.jpg";
import Button from "../../Generic/Button";
import { useQuery, useMutation } from "react-query";


const Contact = ()=> {
	const nameRef = useRef("");
	const companyNameRef = useRef("");
	const phoneNumberRef = useRef("");
	const [atribut ,setatribut] =useState(true)
	const change = ()=>{
		if(nameRef.current.value.length >= 1 && companyNameRef.current.value.length >=1 && phoneNumberRef.current.value.length >=1){
			setatribut(!true) 
		}
		else{
			setatribut(true)
		}
	}
	setInterval(change, 1000);
	const { mutate } = useMutation(
		async () => {
			const res = await fetch(`http://app.5p-agency.uz/message/`, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: nameRef.current.value,
					companyName: companyNameRef.current.value,
					phoneNumber: phoneNumberRef.current.value,
				}),
			});
			return res.json;
		},
		{
			onSuccess: (res) => {
				// console.log(res=> res.JSON.stringify());

			},
			onError: (err) => {},
		}
	);
	const onSubmit = () => {
		mutate();
	}
	
		return (
			<Container className="contact">
				<Wrapper>
					<Register>
						<input onChange={change} ref={nameRef} placeholder="Ism Familiya" type="text"/>
						<input onChange={change} ref={companyNameRef} placeholder="Kompaniya yoki firmangiz nomi" type="text"/>
						<input onChange={change} ref={phoneNumberRef} placeholder="Telefon raqamingiz" type="text" />
						<button disabled={atribut}  onClick={onSubmit}  type={'primary'}>
							Send Request
						</button>
					</Register>
					<Img src={Registerimg}></Img>
				</Wrapper>
			</Container>
		);
	
};
export default Contact;