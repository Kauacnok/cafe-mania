import * as NavigationMenu from '@radix-ui/react-navigation-menu';

interface NavbarMenuLargeDevicesProps {
	homeTopPageRef: any,
	mainPageRef: any,
	blogPageRef: any
}

export function NavbarMenuLargeDevices({ homeTopPageRef, mainPageRef, blogPageRef }: NavbarMenuLargeDevicesProps) {

	function scrollThePageTo(refContent: any) {
		if (refContent.current) {
			refContent.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			<NavigationMenu.Root>
				<NavigationMenu.List className="NavigationMenuList">
					<NavigationMenu.Item>
						<span onClick={() => {scrollThePageTo(homeTopPageRef)}}>
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Inicio
							</NavigationMenu.Trigger>
						</span>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<span onClick={() => {scrollThePageTo(mainPageRef)}}>
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Produtos
							</NavigationMenu.Trigger>
						</span>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<span onClick={() => {scrollThePageTo(blogPageRef)}}>
							<NavigationMenu.Trigger className="NavigationMenuTrigger">
								Blog
							</NavigationMenu.Trigger>
						</span>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</>
	)
}