const products = [
  {
    id: 1,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/346793468.jpg",
      "https://img.ktc.ua/img/base/1_505/0/656180.jpg",
      "https://img.ktc.ua/img/base/1_505/6/656176.jpg"
    ],
    name: "Ноутбук Lenovo IdeaPad 5",
    price: 22999
  },
  {
    id: 2,
    images: [
      "https://content.rozetka.com.ua/goods/images/big/345973840.jpg",
      "https://cdn.27.ua/sc--media--prod/default/1a/3a/e3/1a3ae32e-1a5c-4bd5-813a-94a1cb086e7c.jpg",
      "https://img.ktc.ua/img/base/1_505/3/655783.jpg"
    ],
    name: "Смартфон Samsung Galaxy A34",
    price: 11999
  },
  {
    id: 3,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/322431431.jpg",
      "https://img.ktc.ua/img/base/1_505/8/656188.jpg",
      "https://img.ktc.ua/img/base/1_505/5/656185.jpg"
    ],
    name: "Навушники Sony WH-CH520",
    price: 2199
  },
  {
    id: 4,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/345021297.jpg",
      "https://img.ktc.ua/img/base/1_505/9/656189.jpg",
      "https://img.ktc.ua/img/base/1_505/2/656182.jpg"
    ],
    name: "Монітор LG 24MP60G-B",
    price: 4999
  },
  {
    id: 5,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/318939837.jpg",
      "https://img.ktc.ua/img/base/1_505/0/656150.jpg",
      "https://img.ktc.ua/img/base/1_505/3/656153.jpg"
    ],
    name: "Планшет Apple iPad 9 10.2\" Wi-Fi 64GB",
    price: 14899
  },
  {
    id: 6,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/325839018.jpg",
      "https://img.ktc.ua/img/base/1_505/4/656154.jpg",
      "https://img.ktc.ua/img/base/1_505/6/656156.jpg"
    ],
    name: "Ігрова мишка Logitech G502 HERO",
    price: 2399
  },
  {
    id: 7,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/297783968.jpg",
      "https://img.ktc.ua/img/base/1_505/7/656157.jpg",
      "https://img.ktc.ua/img/base/1_505/1/656151.jpg"
    ],
    name: "Клавіатура Redragon Kumara K552 RGB",
    price: 1699
  },
  {
    id: 8,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/313898911.jpg",
      "https://img.ktc.ua/img/base/1_505/9/656159.jpg",
      "https://img.ktc.ua/img/base/1_505/2/656152.jpg"
    ],
    name: "Гарнітура Razer Kraken X",
    price: 2199
  },
  {
    id: 9,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/345701821.jpg",
      "https://img.ktc.ua/img/base/1_505/1/656161.jpg",
      "https://img.ktc.ua/img/base/1_505/3/656163.jpg"
    ],
    name: "Пилосос Xiaomi Mi G10",
    price: 7999
  },
  {
    id: 10,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/330254645.jpg",
      "https://img.ktc.ua/img/base/1_505/4/656164.jpg",
      "https://img.ktc.ua/img/base/1_505/6/656166.jpg"
    ],
    name: "Смарт-годинник Amazfit Bip 3",
    price: 2499
  },
  {
    id: 11,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/291535164.jpg",
      "https://img.ktc.ua/img/base/1_505/7/656167.jpg",
      "https://img.ktc.ua/img/base/1_505/2/656172.jpg"
    ],
    name: "Мікрофон Fifine K669B",
    price: 1599
  },
  {
    id: 12,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/325541123.jpg",
      "https://img.ktc.ua/img/base/1_505/4/656174.jpg",
      "https://img.ktc.ua/img/base/1_505/5/656175.jpg"
    ],
    name: "Ноутбук ASUS VivoBook 15",
    price: 19999
  },
  {
    id: 13,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/341020512.jpg",
      "https://img.ktc.ua/img/base/1_505/8/656178.jpg",
      "https://img.ktc.ua/img/base/1_505/0/656180.jpg"
    ],
    name: "Тостер Philips HD2582/90",
    price: 999
  },
  {
    id: 14,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/339934690.jpg",
      "https://img.ktc.ua/img/base/1_505/6/656186.jpg",
      "https://img.ktc.ua/img/base/1_505/3/656183.jpg"
    ],
    name: "Електрочайник Bosch TWK3A011",
    price: 899
  },
  {
    id: 15,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/345542968.jpg",
      "https://img.ktc.ua/img/base/1_505/9/656189.jpg",
      "https://img.ktc.ua/img/base/1_505/1/656191.jpg"
    ],
    name: "Кавоварка DeLonghi Magnifica S",
    price: 8999
  },
  {
    id: 16,
    images: [
      "https://content1.rozetka.com.ua/goods/images/big_tile/334774129.jpg",
      "https://img.ktc.ua/img/base/1_505/5/656195.jpg",
      "https://img.ktc.ua/img/base/1_505/2/656192.jpg"
    ],
    name: "Телевізор Samsung UE43CU7172U",
    price: 12999
  },
  {
    id: 17,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/345127186.jpg",
      "https://img.ktc.ua/img/base/1_505/3/656193.jpg",
      "https://img.ktc.ua/img/base/1_505/6/656196.jpg"
    ],
    name: "Холодильник LG GA-B509SEUM",
    price: 19999
  },
  {
    id: 18,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/341105939.jpg",
      "https://img.ktc.ua/img/base/1_505/0/656190.jpg",
      "https://img.ktc.ua/img/base/1_505/9/656189.jpg"
    ],
    name: "Пральна машина Bosch WAN24200BY",
    price: 18999
  },
  {
    id: 19,
    images: [
      "https://content.rozetka.com.ua/goods/images/big_tile/340268494.jpg",
      "https://img.ktc.ua/img/base/1_505/8/656188.jpg",
      "https://img.ktc.ua/img/base/1_505/7/656187.jpg"
    ],
    name: "Варильна поверхня Electrolux EHH6240ISK",
    price: 8499
  },
  {
    id: 20,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/328883682.jpg",
      "https://img.ktc.ua/img/base/1_505/4/656184.jpg",
      "https://img.ktc.ua/img/base/1_505/2/656182.jpg"
    ],
    name: "Мультиварка Moulinex MK707832",
    price: 3499
  },
  {
    id: 21,
    images: [
      "https://content2.rozetka.com.ua/goods/images/big_tile/320433664.jpg",
      "https://img.ktc.ua/img/base/1_505/3/656183.jpg",
      "https://img.ktc.ua/img/base/1_505/5/656185.jpg"
    ],
    name: "Смартфон iPhone 13 128GB",
    price: 29999
  }
];

export default products;