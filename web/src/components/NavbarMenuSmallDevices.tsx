import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List, X } from 'phosphor-react'

export function NavbarMenuSmallDevices() {
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
						<a href="#" className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Inicio
							</DropdownMenu.Item>
						</a>
						<a href="#products" className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Produtos
							</DropdownMenu.Item>
						</a>
						<a href="#blog" className="DropdownMenuItemTagA">
							<DropdownMenu.Item className="DropdownMenuItem">
								Blog
							</DropdownMenu.Item>
						</a>
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