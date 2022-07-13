import styled from 'styled-components';

const getType = (type) => {
	switch (type) {
		case 'primary':
		return { userSelect:'none', background: '#FF4A17',  color: '#ffffff', border: 'none' };
		default:
			return {
				border: '1px solid #E6E9EC',
				color: '#ffffff',
				background: 'transparent',
			};
	}
};

const Container = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-style: normal;
	font-weight: 600;
	border-radius: 2px;
	font-size: 14px;
	line-height: 20px;
	width: ${({ width }) => (width ? width : 'auto')};
	height: ${({ height }) => height || '44px'};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	${({ type }) => getType(type)}
    transition-duration: 0.5s;
    &:focus{
        background-color: #212529;
    }
`;

export { Container };