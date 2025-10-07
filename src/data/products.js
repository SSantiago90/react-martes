/* {id, title, price, img, category, stock} */
const products = [
  {
    id: 1,
    title: 'Mesa de Exterior',
    price: 149.99,
    img: '/imgs/mesa-de-exterior.jpg',
    category: 'Hogar',
    stock: 40,
    description: 'Sonido inmersivo y hasta 30 horas de batería. Conexión Bluetooth 5.2.'
  },
  {
    id: 2,
    title: 'Teclado Mecánico RGB',
    price: 89.90,
    img: 'https://placehold.co/600x400/E74C3C/FFFFFF?text=Teclado',
    category: 'Electrónica',
    stock: 25,
    description: 'Switches Blue para una sensación táctil y auditiva. Iluminación personalizable.'
  },
  {
    id: 3,
    title: 'Camiseta de Algodón Orgánico',
    price: 25.00,
    img: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=Camiseta',
    category: 'Ropa',
    stock: 150,
    description: 'Camiseta básica de alta calidad, suave al tacto y respetuosa con el medio ambiente.'
  },
  {
    id: 4,
    title: 'Vaqueros Slim Fit',
    price: 59.95,
    img: 'https://placehold.co/600x400/3498DB/FFFFFF?text=Vaqueros',
    category: 'Ropa',
    stock: 80,
    description: 'Jeans modernos y cómodos con un toque de elasticidad para mayor confort.'
  },
  {
    id: 5,
    title: 'Novela de Misterio: "La Sombra del Viento"',
    price: 22.50,
    img: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Libro+Misterio',
    category: 'Libros',
    stock: 120,
    description: 'Una emocionante novela de Carlos Ruiz Zafón que te atrapará desde la primera página.'
  },
  {
    id: 6,
    title: 'Libro de Cocina Mediterránea',
    price: 35.00,
    img: 'https://placehold.co/600x400/F1C40F/000000?text=Cocina',
    category: 'Libros',
    stock: 90,
    description: 'Más de 100 recetas saludables y deliciosas inspiradas en la dieta mediterránea.'
  },
  {
    id: 7,
    title: 'Balón de Fútbol Profesional',
    price: 45.00,
    img: 'https://placehold.co/600x400/16A085/FFFFFF?text=Balón+Fútbol',
    category: 'Deportes',
    stock: 200,
    description: 'Balón de tamaño oficial, diseñado para un rendimiento óptimo en cualquier superficie.'
  },
  {
    id: 8,
    title: 'Set de Mancuernas Ajustables',
    price: 199.00,
    img: 'https://placehold.co/600x400/D35400/FFFFFF?text=Mancuernas',
    category: 'Deportes',
    stock: 30,
    description: 'Ajusta el peso de 2.5kg a 24kg con un simple giro. Ahorra espacio.'
  },
  {
    id: 9,
    title: 'Smartwatch con GPS',
    price: 180.75,
    img: 'https://placehold.co/600x400/7F8C8D/FFFFFF?text=Smartwatch',
    category: 'Electrónica',
    stock: 50,
    description: 'Monitoriza tu actividad física, ritmo cardíaco y recibe notificaciones en tu muñeca.'
  },
  {
    id: 10,
    title: 'Zapatillas de Running',
    price: 110.00,
    img: 'https://placehold.co/600x400/2980B9/FFFFFF?text=Zapatillas',
    category: 'Ropa',
    stock: 65,
    description: 'Amortiguación avanzada y diseño ligero para corredores de todos los niveles.'
  },
  {
    id: 11,
    title: 'Biografía: "Steve Jobs" por Walter Isaacson',
    price: 28.99,
    img: 'https://placehold.co/600x400/9B59B6/FFFFFF?text=Biografía',
    category: 'Libros',
    stock: 70,
    description: 'La vida del visionario cofundador de Apple, basada en más de 40 entrevistas.'
  },
  {
    id: 12,
    title: 'Esterilla de Yoga Antideslizante',
    price: 39.99,
    img: 'https://placehold.co/600x400/1ABC9C/FFFFFF?text=Esterilla+Yoga',
    category: 'Deportes',
    stock: 110,
    description: 'Hecha de materiales ecológicos, proporciona un agarre y comodidad excelentes.'
  },
  {
    id: 13,
    title: 'Cámara de Seguridad WiFi',
    price: 65.50,
    img: 'https://placehold.co/600x400/34495E/FFFFFF?text=Cámara+WiFi',
    category: 'Electrónica',
    stock: 85,
    description: 'Vigila tu hogar desde tu móvil con resolución 1080p, visión nocturna y audio bidireccional.'
  },
  {
    id: 14,
    title: 'Sudadera con Capucha',
    price: 49.99,
    img: 'https://placehold.co/600x400/C0392B/FFFFFF?text=Sudadera',
    category: 'Ropa',
    stock: 95,
    description: 'Sudadera de felpa suave y cálida, perfecta para un look casual y cómodo.'
  },
  {
    id: 15,
    title: 'Banda de Resistencia Elástica',
    price: 15.00,
    img: 'https://placehold.co/600x400/E67E22/FFFFFF?text=Banda',
    category: 'Deportes',
    stock: 300,
    description: 'Set de 5 bandas con diferentes niveles de resistencia para un entrenamiento completo.'
  },
  {
    id: 16,
    title: 'Libro de Arte: "La Historia del Arte"',
    price: 55.00,
    img: 'https://placehold.co/600x400/F39C12/000000?text=Arte',
    category: 'Libros',
    stock: 50,
    description: 'Un recorrido completo por la historia del arte mundial, desde la prehistoria hasta hoy.'
  },
  {
    id: 17,
    title: 'Mouse Ergonómico Vertical',
    price: 42.00,
    img: 'https://placehold.co/600x400/BDC3C7/000000?text=Mouse',
    category: 'Electrónica',
    stock: 60,
    description: 'Diseñado para reducir la tensión en la muñeca y mejorar la postura de la mano.'
  },
  {
    id: 18,
    title: 'Gorra de Béisbol Clásica',
    price: 19.99,
    img: 'https://placehold.co/600x400/27AE60/FFFFFF?text=Gorra',
    category: 'Ropa',
    stock: 180,
    description: 'Gorra de algodón ajustable con logo bordado. Disponible en varios colores.'
  },
  {
    id: 19,
    title: 'Cuerda para Saltar de Alta Velocidad',
    price: 12.50,
    img: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Cuerda+Saltar',
    category: 'Deportes',
    stock: 250,
    description: 'Ideal para cardio, CrossFit y entrenamiento de agilidad. Longitud ajustable.'
  },
  {
    id: 20,
    title: 'Diccionario de Inglés-Español',
    price: 29.95,
    img: 'https://placehold.co/600x400/2C3E50/FFFFFF?text=Diccionario',
    category: 'Libros',
    stock: 130,
    description: 'Edición de bolsillo con más de 100,000 palabras, frases y traducciones.'
  }
];

export default products;