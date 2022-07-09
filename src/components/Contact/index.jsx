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
	}
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
				console.log(res=> res.JSON.stringify());

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
						<Button disabled={atribut}  onClick={onSubmit}  type={'primary'}>
							Send Request
						</Button>
						{/* <button  className="btn" >get</button> */}
					</Register>
					<Img src={Registerimg}></Img>
				</Wrapper>
			</Container>
		);
	
};
export default Contact;
