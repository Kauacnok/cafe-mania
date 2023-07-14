import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List, X } from 'phosphor-react'

interface NavbarMenuSmallDevicesProps {
	homeTopPageRef: any,
	mainPageRef: any,
	blogPageRef: any
}

export function NavbarMenuSmallDevices({ homeTopPageRef, mainPageRef, blogPageRef }: NavbarMenuSmallDevicesProps) {

	function scrollThePageTo(refContent: any) {
		setTimeout(() => {
			if (refContent.current) {
				refContent.current.scrollIntoView({ behavior: 'smooth' })
			}
		}, 1500);
	}

	return (
		<>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<button className="IconButton" aria-label="Customise options">
						<List size={40} />
					</button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
						<span onClick={() => {scrollThePageTo(homeTopPageRef)}} className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Inicio
							</DropdownMenu.Item>
						</span>
						<span onClick={() => {scrollThePageTo(mainPageRef)}} className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Produtos
							</DropdownMenu.Item>
						</span>
						<span onClick={() => {scrollThePageTo(blogPageRef)}} className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Blog
							</DropdownMenu.Item>
						</span>
						<span className="iconX">
							<DropdownMenu.Item className="DropdownMenuItem">
									<X size={40} className="" />
							</DropdownMenu.Item>
						</span>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</>
	)
}