import React from 'react';
import './Hello.css';

export interface IHelloProps {
	message: String;
}

export const Hello = (props: IHelloProps) => {
	const { message } = props;
	return (
		<div className="hello-component">
			<p>{message}</p>
			<p>Hola prueba 2</p>
		</div>
	);
};

export default Hello;
