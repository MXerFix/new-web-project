import { productType } from "@/types";
import iphone_15 from '../../public/Iphone_15_pro.webp'

export const mock_devices: productType[] = [
  {
    id: 'phone-15-pro',
    name: "Phone 15 Pro",
    description: "New Phone 15 Pro",
    img: iphone_15,
    category: "phone",
    colors: [
      {name: 'Black', value: '#252525'},
      {name: 'White', value: '#fff'},
      {name: 'Blue', value: '#234'},
  ],
    configurations: [
      {
        config: '256gb',
        price: '149990'
      },
      {
        config: '512gb',
        price: '169990'
      },
      {
        config: '1024gb',
        price: '199990'
      },
    ]
  },
  {
    id: 'phone-14-pro',
    name: "Phone 14 Pro",
    description: "New Phone 14 Pro",
    img: iphone_15,
    category: "phone",
    colors: [
      {name: 'Black', value: '#252525'},
      {name: 'White', value: '#fff'},
      {name: 'Blue', value: '#234'},
  ],
    configurations: [
      {
        config: '256gb',
        price: '129990'
      },
      {
        config: '512gb',
        price: '139990'
      },
      {
        config: '1024gb',
        price: '159990'
      },
    ]
  },
  {
    id: 'phone-13-pro',
    name: "Phone 13 Pro",
    description: "New Phone 13 Pro",
    img: iphone_15,
    category: "phone",
    colors: [
      {name: 'Black', value: '#252525'},
      {name: 'White', value: '#fff'},
      {name: 'Blue', value: '#234'},
  ],
    configurations: [
      {
        config: '256gb',
        price: '109990'
      },
      {
        config: '512gb',
        price: '99990'
      },
      {
        config: '1024gb',
        price: '79990'
      },
    ]
  },
]