import React from 'react';
import { Container } from './style';

const Button = ({ disabled,width, height, type, mt, mb, mr, ml, onClick, children }) => {
	return (
		<Container
			width={width}
			height={height}
			type={type}
			mt={mt}
			mb={mb}
			mr={mr}
			ml={ml}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Container>
	);
};

export default Button;