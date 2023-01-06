import { Lock } from 'phosphor-react'

import { AlertUserComponent } from '../components/AlertUserComponent'
import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'
import coffee3 from '../assets/coffee3.png'
import coffee4 from '../assets/coffee4.png'

interface CoffeeCardProps {
	title: string,
	price: string,
	indexImage: number,
}

export function CoffeeCard({ title, price, indexImage }: CoffeeCardProps) {

	const images = [coffee1, coffee2, coffee3, coffee4]

	return (
		<>
			<div className="container-card-product">
				<div className="content-card-image">
					<img src={images[indexImage]} alt={title} />
				</div>
				<div>
					<div className="content-card">
						<h3 className="price">R$ {price}</h3>
						<p className="title">{title}</p>
					</div>
					
				</div>
				<div className="lock-container">
					<Lock size={25} color="white" id="lock" />
				</div>
				<AlertUserComponent title="Comprar" classNameStyleButton="button-buy" />
			</div>
		</>
	)
}