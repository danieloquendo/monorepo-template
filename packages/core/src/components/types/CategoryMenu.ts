export interface ICategoryMenu {
  id: string;
  href: string;
  name: string;
  parent?: string | null;
  slug?: string | null;
  icon?: string | null;
  styles?: string | null;
  showIconLeft: boolean;
}
