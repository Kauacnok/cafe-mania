import logo from '../assets/specialty3.png'
import { NavbarMenuSmallDevices } from './NavbarMenuSmallDevices'
import { NavbarMenuLargeDevices } from './NavbarMenuLargeDevices'

export function Header() {
	return (
		<>
			<header>
				<div>
					<img src={logo} alt="Imagem de um grão de café" />
					<h1>Café Mania</h1>
				</div>
				<NavbarMenuSmallDevices />
				<NavbarMenuLargeDevices />
			</header>
			<section className="headerContainer">
				<article className="headerContent">
					<h1>Compre o melhor café e curta o momento<span>.</span></h1>
					<p className="subtitle"><span>+340</span> Produtos disponiveis</p>
					<p className="description">Temos uma ampla variedades de produtos para todo e qualquer tipo de cliente</p>
				</article>
				<article className="headerImage">
				</article>
				<article className="scrollDown"></article>
			</section>
		</>
	)
}