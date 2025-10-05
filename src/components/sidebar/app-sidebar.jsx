
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarFooter
} from "@/components/ui/sidebar";
import { NAV_ITEMS } from "@/constants/nav-items";
import Logo from "@/components/logo/logo";
import SidebarFooterDropdown from "@/components/sidebar/footer";

const AppSidebar = () => {
	return (
		<Sidebar>
			<SidebarContent className='flex-1 flex flex-col justify-between overflow-hidden bg-white'>
				<SidebarGroup className='flex flex-col gap-5 py-5'>
					<SidebarGroupLabel>
						<Logo />
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{NAV_ITEMS.map((item, idx) => (
								<SidebarMenuItem key={idx}>
									<SidebarMenuButton asChild>
										<a
											href={`${item.id}`}
											className='flex items-center gap-2'
										>
											{item.icon ? (
												<item.icon className='text-lg shrink-0' />
											) : null}
											<span>{item.label}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarFooter>
					<SidebarFooterDropdown code="CMP1Y" validUntil="April 19, 2025" />
				</SidebarFooter>
			</SidebarContent>
		</Sidebar>
	);
}

export default AppSidebar;
