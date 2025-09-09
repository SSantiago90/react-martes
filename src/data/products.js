const products = [
  {
    id: 1,
    title: 'Set de Herramientas de Jardinería',
    price: 45.99,
    img: '/imgs/set-jardineria.jpeg',
    category: 'Hogar y Jardín',
    stock: 50,
    description: 'Incluye pala, rastrillo y tijeras de podar de alta resistencia.'
  },
  {
    id: 2,
    title: 'Mesa de Exterior Plegable',
    price: 89.50,
    img: '/imgs/mesa-de-exterior.jpg',
    category: 'Hogar y Jardín',
    stock: 25,
    description: 'Mesa de plástico reforzado, perfecta para comidas al aire libre.'
  },
  {
    id: 3,
    title: 'Silla de Jardín Apilable',
    price: 35.00,
    img: 'https://placehold.co/400x400/581845/FFFFFF?text=Silla+Jardín',
    category: 'Hogar y Jardín',
    stock: 80,
    description: 'Silla de resina apilable, fácil de guardar y limpiar.'
  },
  {
    id: 4,
    title: 'Barbacoa de Carbón Portátil',
    price: 120.75,
    img: 'https://placehold.co/400x400/FFC300/000000?text=Barbacoa',
    category: 'Hogar y Jardín',
    stock: 15,
    description: 'Barbacoa de tamaño compacto, ideal para balcones y terrazas.'
  },
  {
    id: 5,
    title: 'Manguera de Riego Extensible',
    price: 29.99,
    img: 'https://placehold.co/400x400/C70039/FFFFFF?text=Manguera',
    category: 'Hogar y Jardín',
    stock: 65,
    description: 'Se expande hasta 3 veces su tamaño original con la presión del agua.'
  },
  {
    id: 6,
    title: 'Luz Solar para Jardín',
    price: 15.00,
    img: 'https://placehold.co/400x400/DAF7A6/000000?text=Luz+Solar',
    category: 'Hogar y Jardín',
    stock: 110,
    description: 'Iluminación LED de bajo consumo, se carga con energía solar.'
  },
  {
    id: 7,
    title: 'Maceta de Cerámica Grande',
    price: 22.50,
    img: 'https://placehold.co/400x400/900C3F/FFFFFF?text=Maceta',
    category: 'Hogar y Jardín',
    stock: 70,
    description: 'Maceta de cerámica de alta calidad, perfecta para plantas grandes.'
  },
  {
    id: 8,
    title: 'Abono Orgánico 5kg',
    price: 18.00,
    img: 'https://placehold.co/400x400/581845/FFFFFF?text=Abono',
    category: 'Hogar y Jardín',
    stock: 90,
    description: 'Mejora la salud del suelo y el crecimiento de las plantas.'
  },
  {
    id: 9,
    title: 'Cortacésped Eléctrico',
    price: 210.00,
    img: 'https://placehold.co/400x400/FFC300/000000?text=Cortacésped',
    category: 'Hogar y Jardín',
    stock: 12,
    description: 'Cortacésped potente y ligero, ideal para jardines de tamaño mediano.'
  },
  {
    id: 10,
    title: 'Sistema de Riego Automático',
    price: 55.75,
    img: 'https://placehold.co/400x400/C70039/FFFFFF?text=Riego',
    category: 'Hogar y Jardín',
    stock: 30,
    description: 'Programable para regar en horarios específicos, ahorrando agua.'
  },
  {
    id: 11,
    title: 'Asiento de Sofá de Palet',
    price: 60.00,
    img: 'https://placehold.co/400x400/DAF7A6/000000?text=Sofá+Palet',
    category: 'Hogar y Jardín',
    stock: 45,
    description: 'Cojín de exterior resistente al agua, diseñado para sofás de palets.'
  },
  {
    id: 12,
    title: 'Parasol con Base',
    price: 75.00,
    img: 'https://placehold.co/400x400/900C3F/FFFFFF?text=Parasol',
    category: 'Hogar y Jardín',
    stock: 20,
    description: 'Parasol de 3 metros de diámetro, con protección UV.'
  },
  {
    id: 13,
    title: 'Mesa de Centro de Bambú',
    price: 95.00,
    img: 'https://placehold.co/400x400/581845/FFFFFF?text=Mesa+Bambú',
    category: 'Hogar y Jardín',
    stock: 35,
    description: 'Elegante mesa de centro de bambú, ideal para la sala de estar.'
  },
  {
    id: 14,
    title: 'Sillón Colgante',
    price: 180.00,
    img: 'https://placehold.co/400x400/FFC300/000000?text=Sillón+Colgante',
    category: 'Hogar y Jardín',
    stock: 10,
    description: 'Sillón colgante de ratán con cojín acolchado, perfecto para relajarse.'
  },
  {
    id: 15,
    title: 'Estantería de Metal',
    price: 49.99,
    img: 'https://placehold.co/400x400/C70039/FFFFFF?text=Estantería',
    category: 'Hogar y Jardín',
    stock: 55,
    description: 'Estantería de 5 niveles, ideal para garajes o almacenes.'
  },
  {
    id: 16,
    title: 'Kit de Cultivo Urbano',
    price: 38.00,
    img: 'https://placehold.co/400x400/DAF7A6/000000?text=Cultivo+Urbano',
    category: 'Hogar y Jardín',
    stock: 60,
    description: 'Todo lo necesario para cultivar hierbas aromáticas en casa.'
  },
  {
    id: 17,
    title: 'Robot Aspirador',
    price: 250.00,
    img: 'https://placehold.co/400x400/900C3F/FFFFFF?text=Robot+Aspirador',
    category: 'Hogar y Jardín',
    stock: 25,
    description: 'Aspira y friega de forma automática, controlable desde el móvil.'
  },
  {
    id: 18,
    title: 'Set de Toallas de Baño',
    price: 30.00,
    img: 'https://placehold.co/400x400/581845/FFFFFF?text=Toallas',
    category: 'Hogar y Jardín',
    stock: 100,
    description: 'Toallas de algodón de alta absorción, en un set de 3.'
  },
  {
    id: 19,
    title: 'Espejo de Pared Grande',
    price: 70.00,
    img: 'https://placehold.co/400x400/FFC300/000000?text=Espejo',
    category: 'Hogar y Jardín',
    stock: 40,
    description: 'Espejo con marco de madera, ideal para salas o pasillos.'
  },
  {
    id: 20,
    title: 'Fuente de Agua Decorativa',
    price: 135.00,
    img: 'https://placehold.co/400x400/C70039/FFFFFF?text=Fuente',
    category: 'Hogar y Jardín',
    stock: 8,
    description: 'Fuente de agua para exterior, con iluminación LED.'
  }
];

export default products;