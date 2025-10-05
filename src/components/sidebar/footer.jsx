import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenu } from "@/components/ui/sidebar";
import { Icons } from "@/components/ui/icons";

const SidebarFooterDropdown = ({ code, validUntil }) => {

    return (
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu className="w-full shrink-0">
						<DropdownMenuTrigger asChild>
                        <SidebarMenuButton className="flex items-center justify-between shrink-0 h-fit">
                            <div className="flex items-center gap-2">

								<div className="text-sm font-medium bg-teal-700 text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0">
                                    RN
                                </div>
                                <div>
                                    <Icons.ArrowUp className="text-lg" />
                                </div>
                            </div>
								<div className='animate-in fade-in slide-in-from-bottom-2 duration-500 text-right'>
									<div className='text-xs font-medium text-gray-600'>
										{code}
									</div>
									<div className='text-xs text-gray-500'>
										Valid till {validUntil}
									</div>
								</div>
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							side='top'
							className='w-[--radix-popper-anchor-width]'
						>
							<DropdownMenuItem>
								<span>Account</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Billing</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Sign out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		);
}

export default SidebarFooterDropdown;