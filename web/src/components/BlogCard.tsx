import Balancer from 'react-wrap-balancer'

import { AlertUserComponent } from './AlertUserComponent'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

interface BlogCardProps {
	title: string,
	description: string,
	imageIndex: number,

}

export function BlogCard({ title, description, imageIndex }: BlogCardProps) {

	const blogImages = [blog1, blog2]
	const altImages = ["Imagem de um moedor de grãos de café e abaixo desfocado, uma xícara de café com leite marrom bege", "imagem de uma mesa com uma pessoa servindo o café na xícara e tem alguns grãos de café espalhados na mesa"]

	return (
		<>
			<div className="content-blogs">
				<img src={blogImages[imageIndex]} alt={altImages[imageIndex]} className="blog-image" />
				<div className="blog-description">
					<h3><Balancer>{title}</Balancer></h3>
					<p>{description}</p>
					<AlertUserComponent title="Visitar página" classNameStyleButton="button-visit" />
				</div>
			</div>
		</>
	)
}