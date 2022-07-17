import React, { useRef,useState } from "react";
import { Container, Wrapper, Register, Img, Button, Xabar,Alert } from "./style";
import Registerimg from "../../assets/img/register.jpg";
import { useMutation } from "react-query";
import 'reactjs-popup/dist/index.css';


const Contact = ()=> {
	const nameRef = useRef("");
	const companyNameRef = useRef("");
	const phoneNumberRef = useRef("");
	const [atribut ,setatribut] =useState(true)
	const [text ,setText] =useState(false)
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
		setText(!false)
		nameRef.current.value = ''
		companyNameRef.current.value = ''
		phoneNumberRef.current.value = ''
	}
	
		return (
			<Container className="contact">
				<Wrapper>
					<Register>
						<input onChange={change} ref={nameRef} placeholder="Ism Familiya" type="text"/>
						<input onChange={change} ref={companyNameRef} placeholder="Kompaniya yoki firmangiz nomi" type="text"/>
						<input onChange={change} ref={phoneNumberRef} placeholder="Telefon raqamingiz" type="text"/>
						{/* <Alert trigger={<Button disabled={atribut}  onClick={onSubmit}>Send Request</Button>} position="right center">
							<Xabar>Xabaringiz muofaqiyatli yuborildi✔</Xabar>
						</Alert>						 */}
						<Button disabled={atribut}  onClick={onSubmit}>Send Request</Button>
						<p className="xabar">
							{
								text ? 'Xabaringiz muofaqiyatli yuborildi!✔' : null
							}
						</p>
					</Register>
					<Img src={Registerimg}></Img>
				</Wrapper>
			</Container>
		);
	
};
export default Contact;