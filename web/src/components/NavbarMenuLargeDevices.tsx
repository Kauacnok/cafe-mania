import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export function NavbarMenuLargeDevices() {
	return (
		<>
			<NavigationMenu.Root>
				<NavigationMenu.List className="NavigationMenuList">
					<NavigationMenu.Item>
						<a href="#" className="NavigationMenuTriggerTagA">
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Inicio
							</NavigationMenu.Trigger>
						</a>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<a href="#products" className="NavigationMenuTriggerTagA">
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Produtos
							</NavigationMenu.Trigger>
						</a>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<a href="#blog" className="NavigationMenuTriggerTagA">
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Blog
							</NavigationMenu.Trigger>
						</a>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</>
	)
}