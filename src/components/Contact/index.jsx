import React, { useRef } from "react";
import { Container, Wrapper, Register, Img } from "./style";
import Registerimg from "../../assets/img/register.jpg";
import Button from "../../Generic/Button";
import { useQuery, useMutation } from "react-query";

const Contact = () => {
	const nameRef = useRef("");
	const companyNameRef = useRef("");
	const phoneNumberRef = useRef("");

	const { mutate } = useMutation(
		() => {
			return fetch(``, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: nameRef.current.value,
					componyName: companyNameRef.current.value,
					phoneNumber: phoneNumberRef.current.value,
				}),
			}).then((res) => res.json);
		},
		{
			onSuccess: (res) => {},
			onError: (err) => {},
		}
	);
	const onSubmit = () => {
		mutate();
		console.log(nameRef.current.value);
		console.log(companyNameRef.current.value);
		console.log(phoneNumberRef.current.value);
	};
	return (
		<Container className="contact">
			<Wrapper>
				<Register>
					<input ref={nameRef} placeholder="Ism" type="text" />
					<input
						ref={companyNameRef}
						placeholder="Familiya"
						type="text"
					/>
					<input
						ref={phoneNumberRef}
						placeholder="Kompaniya yoki firmangiz nomi"
						type="text"
					/>
					<input placeholder="Telefon raqamingiz" type="text" />
					{/* <textarea placeholder='Comments/Message' name="" id="" cols="30" rows="10" ></textarea> */}
					<Button onClick={onSubmit} type={"primary"}>
						Send Request
					</Button>
				</Register>
				<Img src={Registerimg}></Img>
			</Wrapper>
		</Container>
	);
};
export default Contact;
