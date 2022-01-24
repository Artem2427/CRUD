declare interface DataProps {
  name: string;
  salary: number | string;
  id: number;
  increase: boolean;
  rise: boolean;
}

declare interface IconProps {
  color?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
