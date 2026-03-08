import { NavLink } from '@/components/NavLink';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  Users, 
  Briefcase, 
  FileText, 
  Cloud, 
  Mail, 
  MessageSquare,
  LogOut,
  Home,
  LayoutDashboard,
  UserCog,
  FolderKanban,
  Contact,
  DollarSign,
  Package,
  BookOpen,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const managementItems = [
  { title: 'Dashboard', url: '/owner/dashboard', icon: LayoutDashboard },
  { title: 'Team', url: '/owner/team', icon: UserCog },
  { title: 'Projects', url: '/owner/projects', icon: FolderKanban },
  { title: 'Clients (CRM)', url: '/owner/clients', icon: Contact },
  { title: 'Finance', url: '/owner/finance', icon: DollarSign },
];

const contentItems = [
  { title: 'Partners', url: '/owner/partners', icon: Users },
  { title: 'Services', url: '/owner/services', icon: Briefcase },
  { title: 'About Page', url: '/owner/about', icon: FileText },
  { title: 'SaaS Products', url: '/owner/saas', icon: Cloud },
  { title: 'Contact Info', url: '/owner/contact-info', icon: Mail },
  { title: 'Consultations', url: '/owner/consultations', icon: MessageSquare },
];

const productItems = [
  { title: 'Product Dev', url: '/owner/product-dev', icon: Package },
  { title: 'Documents', url: '/owner/documents', icon: BookOpen },
  { title: 'Analytics', url: '/owner/analytics', icon: BarChart3 },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isOwnerLoggedIn');
    navigate('/login');
  };

  const renderMenuItems = (items: typeof managementItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={location.pathname === item.url}>
            <NavLink to={item.url}>
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar collapsible="icon" className="border-r">
      <div className="flex h-14 items-center border-b px-4">
        <SidebarTrigger />
        {!collapsed && <span className="ml-2 font-semibold">Owner Panel</span>}
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>{renderMenuItems(managementItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>{renderMenuItems(contentItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Product & Insights</SidebarGroupLabel>
          <SidebarGroupContent>{renderMenuItems(productItems)}</SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/">
                    <Home className="h-4 w-4" />
                    <span>Back to Site</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="text-destructive hover:text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
