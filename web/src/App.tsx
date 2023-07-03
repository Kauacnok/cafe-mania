import { useRef } from 'react'

import './styles/main.scss'
import { Header } from './components/Header'
import { CoffeeCard } from './components/CoffeeCard'
import { BlogCard } from './components/BlogCard'
import { AlertUserComponent } from './components/AlertUserComponent'
import { Footer } from './components/Footer'

export function App() {
    const mainPageRef = useRef(null)
    const blogPageRef = useRef(null)

    return (
    	<>
    		<Header mainPageRef={mainPageRef} blogPageRef={blogPageRef} />
    		<main ref={mainPageRef}>
    			<h2>Conheça alguns de nossos produtos</h2>
    			<p>Selecionamos os nossos melhores café para você avaliar</p>

    			<div id="products">
					<h2>Ficou interessado?</h2>
					<p>
						Acesse nossa catálogo de produtos
						<AlertUserComponent title="Saiba mais" classNameStyleButton="button-about" />
					</p>
				</div>

    			<article className="container-card-products">
    				<CoffeeCard title="Café preto" price="7" indexImage={0} />
    				<CoffeeCard title="Café puro" price="12" indexImage={1} />
    				<CoffeeCard title="Café com leite" price="9" indexImage={2} />
    				<CoffeeCard title="Café Moka" price="9" indexImage={3} />
    			</article>

				<aside ref={blogPageRef} id="blog">
	    			<h2>Conheça nosso blog de notícias sobre o café</h2>
	    			<p>Leia enquanto toma seu café</p>
	    			<div className="container-blogs">
	    				<BlogCard title="10 recomendações de café" description="Os blogs sobre café vão te ajudar muito sobre como é preparado, seu tempo de espera, para uma boa café de qualidade." imageIndex={0} />
						<BlogCard title="12 benefícios de beber café" description="Os blogs sobre café vão te ajudar muito sobre como é preparado, seu tempo de espera, para uma boa café de qualidade." imageIndex={1} />
	    			</div>
	    			<Footer />
	    		</aside>

    		</main>
    	</>
    )
}
