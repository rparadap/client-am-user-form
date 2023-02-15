export type AppSidebarSection = {
  appId: number;
  title: string;
  icon: string;
  subcontent: AppSidebarSubcontent[];
};
export type AppSidebarSubcontent = {
  title: string;
  href: string;
};
export type AppModule = {
  id: number;
  title: string;
  content: AppSidebarSection[];
};
export type SidebarServiceResponse = {
  apps: AppModule[];
};
