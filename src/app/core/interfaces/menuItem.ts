interface SubItem {
  label: string;
  url: string;
}

interface MenuItem {
  label: string;
  url: string;
  subItems?: SubItem[];
}
