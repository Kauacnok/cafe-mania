import { useRef } from 'react'

import logo from '../assets/specialty3.png'
import { NavbarMenuSmallDevices } from './NavbarMenuSmallDevices'
import { NavbarMenuLargeDevices } from './NavbarMenuLargeDevices'

interface HeaderProps {
	mainPageRef: any,
	blogPageRef: any
}

export function Header({ mainPageRef, blogPageRef }: HeaderProps) {
	const homeTopPageRef = useRef(null)

	return (
		<>
			<header>
				<div>
					<img src={logo} alt="Imagem de um grão de café" />
					<h1>Café Mania</h1>
				</div>
				<NavbarMenuSmallDevices homeTopPageRef={homeTopPageRef} mainPageRef={mainPageRef} blogPageRef={blogPageRef} />
				<NavbarMenuLargeDevices homeTopPageRef={homeTopPageRef} mainPageRef={mainPageRef} blogPageRef={blogPageRef} />
			</header>
			<section ref={homeTopPageRef} className="headerContainer">
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