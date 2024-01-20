import { StaticImageData } from "next/image"
import { ReactElement, ReactNode } from "react"

export type SVGIconType = {
  className?: string
  fill?: string
  stroke?: string
  width?: string
  height?: string
}

export type NavMenuType = {
  className?: string
}

export type NavMenuBtnType = {
  className?: string
  isOpen: boolean
  onClick: Function
}

export type ContentBlockType = {
  id?: string,
  children?: string | ReactNode
  className?: string
  full?: boolean
  [prop: string]: any
}

export type SidebarBannerType = {
  children: ReactNode | string
  title: string
  delay?: number
}

export type SidebarBannerElementType = {
  children: string
}

export type TooltipComponentType = {
  children: ReactElement;
  title: string | ReactElement;
  placement?:
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";
};

export type Side = "top" | "right" | "bottom" | "left";

export type ShadTooltipProps = {
  delayDuration?: number;
  side?: Side;
  content: ReactNode;
  children: ReactNode;
};

export type variantType = 'big' | 'small' | 'medium'
export type productCategoryType = 'phone' | 'laptop' | 'headphone'
export type productColorType = {
  name: string
  value: string
}
export type productConfigurationType = {
  config: string
  price: string
}
export type productType = {
  id: string
  name: string
  img: string | StaticImageData
  description: string
  category: productCategoryType
  colors: productColorType[]
  configurations: productConfigurationType[]
}
export type ProductCardType = {
  product: productType
  variant: variantType
}