export interface RouteModel{
  title: string;
  children: RouteChildrenModel[];
}

export interface RouteChildrenModel{
  title: string;
  url: string;
  icon: string;
}
