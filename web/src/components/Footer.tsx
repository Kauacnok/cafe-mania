import { ArrowUp } from 'phosphor-react'

export function Footer() {
	return (
		<footer>
			<h1>Café mania</h1>
			<div className="footer-container">
				<div className="footer-content">
					<h4>Endereço:</h4>
					<p>Rua avenida do teste</p>
					<p>Numero 1234</p>
				</div>
				<div className="footer-content">
					<h4>Contato:</h4>
					<p>00 0000-0000</p>
					<p>testinho@gmail.com</p>
				</div>
				<div className="footer-content">
					<h4>Horário de atendimento</h4>
					<p>De segunda a sexta</p>
					<p>Das 13h as 19h</p>
				</div>
			</div>
			<a href="#" className="scrollGoUp" aria-label="Go up to the page">
				<ArrowUp size={30} color="black" />
			</a>
		</footer>
	)
}