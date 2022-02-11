import React from 'react';
import { Story } from '@storybook/react';
import CategoryMenu, { ICategoryMenuProps } from '../../../src/components/CategoryMenu';
import './CategoryMenu.scss';

const CategoryMenuStory = {
  component: CategoryMenu,
  title: 'Organisms/Category Menu'
};

export default CategoryMenuStory;
const Template: Story<ICategoryMenuProps> = (args) => <CategoryMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  menu: [
    {
      href: '',
      id: '2',
      name: 'Tendencias',
      parent: null,
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles-escolares',
      id: '4',
      name: 'Temporada Escolar',
      parent: null,
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-mercado',
      id: '5',
      name: 'Mercado',
      parent: null,
      slug: 'mercado',
      icon: 'ico_cat_mercado',
      styles: 'bg-black-90 white-90 br-pill',
      showIconLeft: true
    },
    {
      href: '/tecnologia',
      id: '6',
      name: 'Tecnología',
      parent: null,
      slug: 'tecnologia',
      icon: 'ico_nav_tecnologia_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares',
      id: '7',
      name: 'Celulares y accesorios',
      parent: null,
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos',
      id: '8',
      name: 'Electrodomésticos',
      parent: null,
      slug: 'electrodomesticos',
      icon: 'ico_nav_electrohogar_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/home-colchones',
      id: '9',
      name: 'Dormitorio',
      parent: null,
      slug: 'Dormitorio',
      icon: 'ico_nav_hogar_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/mercado/nuestrasmarcas',
      id: '10',
      name: 'Nuestras marcas',
      parent: '5',
      slug: 'Marcas propias',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/frutas-y-verduras',
      id: '11',
      name: 'Frutas y verduras',
      parent: '5',
      slug: 'frutas-y-verduras',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado',
      id: '13',
      name: 'Pollo, carne y pescado',
      parent: '5',
      slug: 'pollo-carne-y-pescado',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa',
      id: '14',
      name: 'Despensa',
      parent: '5',
      slug: 'despensa',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/lacteos-huevos-y-refrigerados',
      id: '15',
      name: 'Lácteos, huevos y refrigerados',
      parent: '5',
      slug: 'lacteos-huevos-y-refrigerados',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/panaderia-y-reposteria',
      id: '16',
      name: 'Panadería y repostería',
      parent: '5',
      slug: 'panaderia-y-reposteria',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores',
      id: '17',
      name: 'Licores',
      parent: '5',
      slug: 'vinos-y-licores',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/delicatessen',
      id: '18',
      name: 'Delicatessen',
      parent: '5',
      slug: 'delicatessen',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks',
      id: '19',
      name: 'Bebidas y snacks',
      parent: '5',
      slug: 'snacks',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/congelados',
      id: '20',
      name: 'Congelados',
      parent: '5',
      slug: 'congelados',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/aseo-del-hogar',
      id: '21',
      name: 'Limpieza del hogar',
      parent: '5',
      slug: 'aseo-del-hogar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores',
      id: '22',
      name: 'Televisores',
      parent: '6',
      slug: 'televisores',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios',
      id: '24',
      name: 'Computadores y accesorios',
      parent: '6',
      slug: 'computadores-y-accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion',
      id: '26',
      name: 'Impresión',
      parent: '6',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video',
      id: '27',
      name: 'Audio ',
      parent: '6',
      slug: 'audio-y-video',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion',
      id: '28',
      name: 'Refrigeración',
      parent: '8',
      slug: 'Refrigeración',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/lavado-y-secado',
      id: '29',
      name: 'Lavado y secado',
      parent: '8',
      slug: 'lavado-y-secado',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-colchones',
      id: '30',
      name: 'Colchones',
      parent: '9',
      slug: 'colchones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/dormitorio',
      id: '32',
      name: 'Dormitorio',
      parent: '9',
      slug: 'dormitorio',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje',
      id: '44',
      name: 'Maquillaje',
      parent: '1715',
      slug: 'Maquillaje',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/higiene-intima',
      id: '45',
      name: 'Higiene intima',
      parent: '1715',
      slug: 'higiene-intima',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-oral',
      id: '46',
      name: 'Cuidado oral',
      parent: '1715',
      slug: 'cuidado-oral',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar',
      id: '47',
      name: 'Cuidado capilar',
      parent: '1715',
      slug: 'cuidado-capilar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal',
      id: '48',
      name: 'Cuidado corporal',
      parent: '1715',
      slug: 'cuidado-corporal',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/tratamientos',
      id: '49',
      name: 'Cuidado facial',
      parent: '1715',
      slug: 'tratamientos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/proteccion-solar',
      id: '50',
      name: 'Protección solar',
      parent: '1715',
      slug: 'proteccion-solar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/suministros-medicos',
      id: '52',
      name: 'Suministros y equipos médicos',
      parent: '1715',
      slug: 'suministros-medicos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Bebes/Coches',
      id: '53',
      name: 'Coches',
      parent: '1733',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/6407/bebes/accesorios-grandes-bebe?initialMap=productClusterIds&initialQuery=6407&map=productClusterIds',
      id: '55',
      name: 'Sillas',
      parent: '1733',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/cunas-y-corrales',
      id: '56',
      name: 'Cuarto del bebé',
      parent: '1733',
      slug: 'Cuarto-del-bebe',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-y-alimentacion-del-bebe',
      id: '57',
      name: 'Alimentación del bebé',
      parent: '1733',
      slug: 'alimentacion para el bebe',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bicicletas',
      id: '58',
      name: 'Ciclismo',
      parent: '1875',
      slug: 'ciclismo',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico',
      id: '59',
      name: 'Fitness',
      parent: '1875',
      slug: 'fitness',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping',
      id: '60',
      name: 'Camping',
      parent: '1875',
      slug: 'camping',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/otros-deportes',
      id: '61',
      name: 'Otros Deportes',
      parent: '1875',
      slug: 'otros-deportes',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2244?map=productClusterIds&order',
      id: '62',
      name: 'Ropa y calzado deportivo',
      parent: '1875',
      slug: 'ropa-deportiva',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/herramientas',
      id: '67',
      name: 'Herramientas',
      parent: '1969',
      slug: 'herramientas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Vehiculos/Llantas',
      id: '68',
      name: 'Llantas y rines',
      parent: '1969',
      slug: 'llantas-y-rines',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/carros',
      id: '69',
      name: 'Carros y motos',
      parent: '1969',
      slug: 'automoviles',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria',
      id: '70',
      name: 'Otros Ferretería',
      parent: '1969',
      slug: 'ferreteria',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2678?map=productClusterIds',
      id: '72',
      name: 'Cuidado masculino',
      parent: '1715',
      slug: 'cuidado-masculino',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal',
      id: '75',
      name: 'Cuidado personal',
      parent: '1715',
      slug: 'Accesorios-belleza',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/consolas-y-videojuegos',
      id: '76',
      name: 'Mundo Gamer',
      parent: '6',
      slug: 'consolas-y-videojuegos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/frutas-y-verduras/frutas',
      id: '1006',
      name: 'Frutas',
      parent: '11',
      slug: 'frutas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/frutas-y-verduras/verduras-y-hortalizas',
      id: '1007',
      name: 'Verduras y hortalizas',
      parent: '11',
      slug: 'verduras',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Mercado/Frutas-Y-Verduras/Pulpas',
      id: '1008',
      name: 'Pulpas',
      parent: '11',
      slug: 'Pulpas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/arroz-granos-y-pastas',
      id: '1010',
      name: 'Arroz, granos y pastas',
      parent: '14',
      slug: 'arroz-granos-y-pastas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/aceites-y-vinagres',
      id: '1011',
      name: 'Aceites y vinagres',
      parent: '14',
      slug: 'aceites-y-vinagres',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/azucar-panela-y-endulzante',
      id: '1012',
      name: 'Azúcar, panela y endulzante',
      parent: '14',
      slug: 'azucar-panela-y-endulzante',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/enlatados-y-conservas',
      id: '1013',
      name: 'Enlatados y conservas',
      parent: '14',
      slug: 'enlatados-y-conservas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/cereales-y-granolas',
      id: '1014',
      name: 'Cereales y granolas',
      parent: '14',
      slug: 'cereales-y-granolas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/cafe-chocolates-infusiones',
      id: '1015',
      name: 'Café, chocolates e infusiones',
      parent: '14',
      slug: 'cafe-chocolates-e-infusiones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/harinas-y-mezclas-para-preparar',
      id: '1016',
      name: 'Harinas y mezclas para preparar',
      parent: '14',
      slug: 'harinas-y-mezclas-para-preparar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/salsas-condimentos-y-sopas',
      id: '1017',
      name: 'Salsas, condimentos y sopas',
      parent: '14',
      slug: 'salsas-condimentos-y-sopas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/lacteos-huevos-y-refrigerados/leche',
      id: '1019',
      name: 'Leches',
      parent: '15',
      slug: 'leche',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/lacteos-huevos-y-refrigerados/huevos',
      id: '1021',
      name: 'Huevos',
      parent: '15',
      slug: 'huevos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Mercado/derivados-lacteos',
      id: '1022',
      name: 'Derivados Lácteos',
      parent: '15',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado/carnes-frias-y-embutidos',
      id: '1025',
      name: 'Carnes frías y embutidos',
      parent: '15',
      slug: 'carnes-frias-y-embutidos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa-y-lacteos/arepas-y-tortillas',
      id: '1026',
      name: 'Arepas y tortillas',
      parent: '15',
      slug: 'arepas-y-tortillas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/congelados/comida-preparada',
      id: '1027',
      name: 'Comida precocida',
      parent: '20',
      slug: 'comida-precocida',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/congelados/papas-yucas-y-verduras-congeladas',
      id: '1028',
      name: 'Verduras congeladas',
      parent: '20',
      slug: 'papas-yucas-y-verduras-congeladas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/congelados/helados-tortas-y-postres',
      id: '1030',
      name: 'Helados, tortas y postres',
      parent: '20',
      slug: 'helados-tortas-y-postres',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/panaderia-y-reposteria/panaderia-fresca',
      id: '1032',
      name: 'Panadería fresca',
      parent: '16',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/panaderia-y-reposteria/panaderia-empacada',
      id: '1033',
      name: 'Panadería empacada',
      parent: '16',
      slug: 'panes-empacados',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/cervezas',
      id: '1037',
      name: 'Cervezas',
      parent: '17',
      slug: 'cervezas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/vinos',
      id: '1039',
      name: 'Vinos',
      parent: '17',
      slug: 'vinos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/aguardiente',
      id: '1040',
      name: 'Aguardiente',
      parent: '17',
      slug: 'aguardiente-',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Licores/whisky-ron-brandy-conac',
      id: '1041',
      name: 'Whisky, ron, brandy y coñac',
      parent: '17',
      slug: 'whisky-ron-brandy-y-cognac',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/tequilas-ginebras-y-vodkas',
      id: '1042',
      name: 'Tequilas, ginebras y vodkas',
      parent: '17',
      slug: 'tequilas-ginebras-y-vodkas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/cocteles-y-bases-para-coctel',
      id: '1043',
      name: 'Aperitivos, cocteles y bases',
      parent: '17',
      slug: 'aperitivos-cocteles-y-bases',
      icon: null,
      styles: null,
      showIconLeft: true
    },
    {
      href: '/mercado/delicatessen/quesos',
      id: '1044',
      name: 'Quesos',
      parent: '18',
      slug: 'quesos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/delicatessen/carnes-especiales',
      id: '1045',
      name: 'Carnes especiales',
      parent: '18',
      slug: 'carnes-especiales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/delicatessen/para-untar',
      id: '1046',
      name: 'Para untar',
      parent: '18',
      slug: 'para-untar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/delicatessen/frutos-y-semillas',
      id: '1047',
      name: 'Frutos secos y semillas',
      parent: '18',
      slug: 'frutos-y-semillas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/bebidas',
      id: '1050',
      name: 'Bebidas',
      parent: '19',
      slug: 'gaseosas-y-maltas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/pasabocas',
      id: '1052',
      name: 'Pasabocas',
      parent: '19',
      slug: 'pasabocas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/confiteria-y-dulces',
      id: '1053',
      name: 'Chocolates, confitería y dulces',
      parent: '19',
      slug: 'confiteria-y-dulces',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/galletas',
      id: '1054',
      name: 'Galletas',
      parent: '19',
      slug: 'galletas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/aseo-del-hogar/cuidado-del-hogar',
      id: '1060',
      name: 'Cuidado del hogar',
      parent: '21',
      slug: 'cuidado-del-hogar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9121?map=productClusterIds&pauta=t',
      id: '1066',
      name: 'Los más vendidos',
      parent: '22',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/10-a-32-pulgadas?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/televisores&map=category-1,category-2,rango-tamano-de-pantalla&operator=and',
      id: '1067',
      name: '10 a 32 Pulgadas',
      parent: '22',
      slug: '10 a 32 pulgadas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/40-a-43-pulgadas?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/televisores&map=category-1,category-2,rango-tamano-de-pantalla&operator=and',
      id: '1069',
      name: '40 a 43 Pulgadas',
      parent: '22',
      slug: '40 a 43 pulgadas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/44-a-50-pulgadas?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/televisores&map=category-1,category-2,rango-tamano-de-pantalla&operator=and',
      id: '1070',
      name: '44 a 50 Pulgadas',
      parent: '22',
      slug: '44 a 50 pulgadas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/51-a-60-pulgadas?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/televisores&map=category-1,category-2,rango-tamano-de-pantalla&operator=and',
      id: '1072',
      name: '51 a 60 Pulgadas',
      parent: '22',
      slug: '51 a 60 pulgadas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartphones',
      id: '1073',
      name: 'Smartphones',
      parent: '23',
      slug: 'smartphones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch',
      id: '1075',
      name: 'Smartwatch',
      parent: '23',
      slug: 'smartwatch',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-samsung',
      id: '1076',
      name: 'Samsung',
      parent: '23',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-portatiles',
      id: '1077',
      name: 'Computadores portátiles',
      parent: '24',
      slug: 'computadores-portatiles',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-de-escritorio',
      id: '1079',
      name: 'Computadores de escritorio',
      parent: '24',
      slug: 'computadores-de-escritorio',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-2-en-1',
      id: '1080',
      name: 'Computadores 2 en 1',
      parent: '24',
      slug: 'computadores-2-en-1',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/tablets',
      id: '1082',
      name: 'Tablets',
      parent: '24',
      slug: 'tablets',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/monitores',
      id: '1084',
      name: 'Monitores',
      parent: '24',
      slug: 'monitores',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-all-in-one',
      id: '1085',
      name: 'Computadores all in one',
      parent: '24',
      slug: 'computadores-all-in-one',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/barras-de-sonido',
      id: '1086',
      name: 'Barras de sonido',
      parent: '27',
      slug: 'barras-de-sonido',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/minicomponentes',
      id: '1088',
      name: 'Minicomponentes',
      parent: '27',
      slug: 'minicomponentes',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/teatros-en-casa',
      id: '1089',
      name: 'Teatros en casa',
      parent: '27',
      slug: 'teatros-en-casa',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/parlantes',
      id: '1090',
      name: 'Parlantes',
      parent: '27',
      slug: 'parlantes',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/audifonos',
      id: '1091',
      name: 'Audífonos',
      parent: '27',
      slug: 'audifonos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/dvd-y-blu-ray',
      id: '1092',
      name: 'DVD y Blu-Ray',
      parent: '27',
      slug: 'dvd-y-blu-ray',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/reproductores-y-accesorios',
      id: '1093',
      name: 'Reproductores y accesorios ',
      parent: '27',
      slug: 'reproductores-y-accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/consolas-y-videojuegos/consolas',
      id: '1095',
      name: 'Consolas',
      parent: '76',
      slug: 'consolas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/consolas-y-videojuegos/video-juegos',
      id: '1096',
      name: 'Videojuegos',
      parent: '76',
      slug: 'videojuegos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/consolas-y-videojuegos/accesorios-para-videojuegos',
      id: '1097',
      name: 'Accesorios para videojuegos',
      parent: '76',
      slug: 'accesorios-para-videojuegos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/sencillo',
      id: '1112',
      name: 'Colchones sencillos',
      parent: '30',
      slug: 'colchones-sensillos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/semidoble',
      id: '1113',
      name: 'Colchones semi dobles',
      parent: '30',
      slug: 'colchones-semidobles',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/doble',
      id: '1114',
      name: 'Colchones dobles',
      parent: '30',
      slug: 'colchones-dobles',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/queen',
      id: '1115',
      name: 'Colchones queen',
      parent: '30',
      slug: 'colchones-queen',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/semi-king',
      id: '1116',
      name: 'Colchones semi king',
      parent: '30',
      slug: 'colchones-semi-king',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones/king',
      id: '1117',
      name: 'Colchones king',
      parent: '30',
      slug: 'colchones-king',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/edredones',
      id: '1122',
      name: 'Edredones y cubrelechos',
      parent: '1924',
      slug: 'edredones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar-sabanas-juegosdecama',
      id: '1123',
      name: 'Sabanas',
      parent: '1924',
      slug: 'ropa-de-cama',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/duvet-y-plumones',
      id: '1124',
      name: 'Duvets y plumones',
      parent: '1924',
      slug: 'toallas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/almohada',
      id: '1125',
      name: 'Almohadas',
      parent: '1924',
      slug: 'almohadas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/protector-de-colchones-y-almohadas',
      id: '1126',
      name: 'Protectores de colchón',
      parent: '1924',
      slug: 'complemento',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/cobijas',
      id: '1127',
      name: 'Cobijas y mantas',
      parent: '1924',
      slug: 'cobijas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/como-comprar-mi-colchon',
      id: '1184',
      name: 'Como comprar mi colchon',
      parent: '30',
      slug: 'guia colchones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje/rostro',
      id: '1192',
      name: 'Rostro',
      parent: '44',
      slug: 'maquillaje-para-rostro',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje/labios',
      id: '1193',
      name: 'Labios',
      parent: '44',
      slug: 'maquillaje-para-labios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje/ojos',
      id: '1194',
      name: 'Ojos',
      parent: '44',
      slug: 'maquillaje-para-ojos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje/unas',
      id: '1195',
      name: 'Uñas',
      parent: '44',
      slug: 'Uñas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/accesorios-cosmeticos',
      id: '1198',
      name: 'Accesorios y brochas',
      parent: '44',
      slug: 'Accesorios y brochas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/higiene-intima/cuidado-intimo',
      id: '1199',
      name: 'Cuidado intimo femenino',
      parent: '45',
      slug: 'cuidado-intimo',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/higiene-intima/proteccion-incontinencia',
      id: '1200',
      name: 'Protección de incontinencia',
      parent: '45',
      slug: 'proteccion-incontinencia',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/higiene-intima/depilacion',
      id: '1201',
      name: 'Depilación',
      parent: '45',
      slug: 'depilacion',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/higiene-intima/afeitada',
      id: '1203',
      name: 'Afeitada',
      parent: '45',
      slug: 'afeitada',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-oral/cremas-dentales',
      id: '1205',
      name: 'Cremas dentales',
      parent: '46',
      slug: 'cremas-dentales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-oral/enjuagues-bucales',
      id: '1206',
      name: 'Enjuagues bucales',
      parent: '46',
      slug: 'enjuagues-bucales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar/shampoo',
      id: '1209',
      name: 'Shampoo',
      parent: '47',
      slug: 'shampoo',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar/acondicionador',
      id: '1210',
      name: 'Acondicionador',
      parent: '47',
      slug: 'acondicionador',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12368?map=productClusterIds',
      id: '1213',
      name: 'Cremas y tratamientos capilares',
      parent: '47',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar/fijadores-y-modeladores',
      id: '1214',
      name: 'Fijadores y modeladores',
      parent: '47',
      slug: 'fijadores-y-modeladores',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar/coloracion',
      id: '1215',
      name: 'Coloración',
      parent: '47',
      slug: 'coloracion',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/desodorantes',
      id: '1217',
      name: 'Desodorantes',
      parent: '48',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/cremas-de-manos-y-cuerpo',
      id: '1221',
      name: 'Hidratantes',
      parent: '48',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/tratamientos/tratamiento-corporal',
      id: '1222',
      name: 'Tratamientos corporales',
      parent: '48',
      slug: 'tratamientos-corporales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12388?map=productClusterIds',
      id: '1224',
      name: 'Hidratantes',
      parent: '49',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/tratamientos/limpiadoras-y-mascarillas',
      id: '1228',
      name: 'Limpieza',
      parent: '49',
      slug: 'limpiadora',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/tratamientos',
      id: '1230',
      name: 'Tratamientos ',
      parent: '49',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/proteccion-solar',
      id: '1231',
      name: 'Bronceadores y bloqueadores',
      parent: '50',
      slug: 'proteccion-solar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/repelentes',
      id: '1232',
      name: 'Repelentes',
      parent: '50',
      slug: 'repelentes',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/suministros-medicos/equipos-medicos',
      id: '1242',
      name: 'Equipos médicos',
      parent: '52',
      slug: 'equipos-medicos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/suministros-medicos/equipos-movilidad',
      id: '1243',
      name: 'Equipo de movilidad',
      parent: '52',
      slug: 'equipos-movilidad',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/suministros-medicos/equipos-ortopedicos',
      id: '1244',
      name: 'Equipos ortopédicos',
      parent: '52',
      slug: 'equipos-ortopedicos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/dispositivos-medicos',
      id: '1245',
      name: 'Dispositivos médicos',
      parent: '52',
      slug: 'dispositivos-medicos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/juegos-de-mesa',
      id: '1253',
      name: 'Juegos de mesa',
      parent: '1538',
      slug: 'juegos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1226?map=productClusterIds',
      id: '1254',
      name: 'Bicicletas, triciclos y patines',
      parent: '1538',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '1255',
      name: 'Montables',
      parent: '1538',
      slug: 'montables',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/munecas-y-accesorios',
      id: '1256',
      name: 'Muñecas y accesorios',
      parent: '1538',
      slug: 'munecas-y-accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/6355?map=productClusterIds',
      id: '1257',
      name: 'Autos y pistas',
      parent: '1538',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1278?map=productClusterIds',
      id: '1258',
      name: 'Construcción y armables',
      parent: '1538',
      slug: 'lego-y-armables',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/figuras-de-accion',
      id: '1259',
      name: 'Figuras de acción',
      parent: '1538',
      slug: 'iguras-de-accion',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/peluches',
      id: '1260',
      name: 'Peluches ',
      parent: '1538',
      slug: 'peluches',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/priori',
      id: '1272',
      name: 'Priori',
      parent: '2132',
      slug: 'priori',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebesit',
      id: '1273',
      name: 'Bebesit',
      parent: '2132',
      slug: 'bebesit',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/joie',
      id: '1274',
      name: 'Joie',
      parent: '2132',
      slug: 'happy-baby',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/happy-baby',
      id: '1275',
      name: 'Happy Baby',
      parent: '2132',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ebaby',
      id: '1276',
      name: 'Ebaby',
      parent: '2132',
      slug: 'ebaby',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/graco',
      id: '1277',
      name: 'Graco',
      parent: '2132',
      slug: 'graco',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bicicletas',
      id: '1278',
      name: 'Bicicletas',
      parent: '58',
      slug: 'bicicletas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2602?map=productClusterIds',
      id: '1279',
      name: 'Bicicletas Todoterreno',
      parent: '58',
      slug: 'bicicletas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2601?map=productClusterIds',
      id: '1280',
      name: 'Bicicletas Urbanas',
      parent: '58',
      slug: 'bicicletas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/fitness/caminadoras-y-trotadoras',
      id: '1281',
      name: 'Caminadores, trotadoras y escaladoras',
      parent: '59',
      slug: 'caminadoras-y-trotadoras',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/elipticas',
      id: '1282',
      name: 'Elípticas',
      parent: '59',
      slug: 'elipticas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/fitness/spinning-y-estaticas',
      id: '1283',
      name: 'Spinning y estáticas',
      parent: '59',
      slug: 'spinning-y-estaticas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/maquinas-abdominales',
      id: '1284',
      name: 'Máquinas abdominales',
      parent: '59',
      slug: 'maquinas-abdominales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/maquinas-multifuncionales',
      id: '1285',
      name: 'Máquinas multifuncionales',
      parent: '59',
      slug: 'maquinas-multifuncionales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/musculacion',
      id: '1286',
      name: 'Musculación',
      parent: '59',
      slug: 'musculacion',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/complementos-de-gimnasia',
      id: '1287',
      name: 'Complementos de gimnasio',
      parent: '59',
      slug: 'complmentos-de-gimnasia',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/acondicionamiento-fisico/plataformas-vibratorias',
      id: '1288',
      name: 'Plataformas vibratorias',
      parent: '59',
      slug: 'plataformas-vibractorias',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/vitaminas-y-suplementos',
      id: '1289',
      name: 'Vitaminas y suplementos',
      parent: '59',
      slug: 'vitaminas-y-suplementos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/carpas',
      id: '1290',
      name: 'Carpas',
      parent: '60',
      slug: 'carpas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/sleeping',
      id: '1291',
      name: 'Sleeping',
      parent: '60',
      slug: 'sleeping',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/colchones-y-colchonetas-camping',
      id: '1292',
      name: 'Colchones y Colchonetas',
      parent: '60',
      slug: 'colchones-y-colchonetas-camping',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/asadores',
      id: '1293',
      name: 'Asadores y BBQ',
      parent: '60',
      slug: 'asadores',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/lamparas-y-linternas',
      id: '1294',
      name: 'Linternas y lámparas',
      parent: '60',
      slug: 'lamparas-y-linternas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/neveras-termicas',
      id: '1295',
      name: 'Termos y Neveras',
      parent: '60',
      slug: 'neveras-termicas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/muebles',
      id: '1296',
      name: 'Muebles de Camping',
      parent: '60',
      slug: 'muebles',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/cobijas-y-mantas-camping',
      id: '1297',
      name: 'Cobijas y mantas',
      parent: '60',
      slug: 'cobijas-y-mantas-camping',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/camping/brujulas-navajas-cuchillos',
      id: '1298',
      name: 'Brújulas, navajas y cuchillos',
      parent: '60',
      slug: 'brujulas-navajas-y-cuchillos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/otros-deportes/baloncesto-y-voleibol',
      id: '1300',
      name: 'Baloncesto y voleibol',
      parent: '61',
      slug: 'baloncesto-y-voleibol',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/deportes-acuaticos',
      id: '1301',
      name: 'Deportes Acuáticos',
      parent: '61',
      slug: 'deportes-acuaticos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/futbol',
      id: '1302',
      name: 'Futbol',
      parent: '61',
      slug: 'futbol',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/patinaje',
      id: '1303',
      name: 'Patinaje',
      parent: '61',
      slug: 'patinaje',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/tenis',
      id: '1304',
      name: 'Tenis y ping-pong',
      parent: '61',
      slug: 'tenis',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/montana',
      id: '1305',
      name: 'Montaña',
      parent: '61',
      slug: 'montana',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/moda-mujer/ropa-deportiva-para-mujer',
      id: '1308',
      name: 'Ropa deportiva para mujer',
      parent: '62',
      slug: 'ropa-deportiva-mujer',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/moda-hombre/ropa-deportiva-hombre',
      id: '1309',
      name: 'Ropa deportiva para hombre',
      parent: '62',
      slug: 'ropa-deportiva-hombre',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9348?map=productClusterIds&pauta=t',
      id: '1310',
      name: 'Calzado para hombre y mujer',
      parent: '62',
      slug: 'calzado-deportivo',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/herramientas/herramientas-manuales',
      id: '1319',
      name: 'Herramientas manuales',
      parent: '67',
      slug: 'herramientas-manuales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/herramientas/herramientas-electricas',
      id: '1320',
      name: 'Herramientas eléctricas',
      parent: '67',
      slug: 'electricas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/complementos-del-hogar',
      id: '1321',
      name: 'Complementos del hogar',
      parent: '67',
      slug: 'porta-herramientas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/llantas/llantas-automovil',
      id: '1324',
      name: 'Automóviles',
      parent: '68',
      slug: 'llantas-automovil',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/llantas/llantas-campero',
      id: '1325',
      name: 'Campero',
      parent: '68',
      slug: 'llantas-campero',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/llantas/llantas-para-motos',
      id: '1326',
      name: 'Motos',
      parent: '68',
      slug: 'llantas-para-motos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/rines',
      id: '1327',
      name: 'Rines',
      parent: '68',
      slug: 'rines',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/llantas',
      id: '1328',
      name: 'Llantas',
      parent: '68',
      slug: 'neumaticos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/carros',
      id: '1329',
      name: 'Automóviles y camperos',
      parent: '69',
      slug: 'carros',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/motos',
      id: '1330',
      name: 'Motos y accesorios',
      parent: '69',
      slug: 'motos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vehiculos/cosmetica-vehiculo',
      id: '1331',
      name: 'Cosmética de vehículos',
      parent: '69',
      slug: 'cosmetica-vehiculo',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/herramientas-de-jardineria',
      id: '1336',
      name: 'Herramienta para jardín',
      parent: '71',
      slug: 'herramientas-de-jardineria',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/accesorios-riego',
      id: '1337',
      name: 'Accesorio de riego',
      parent: '71',
      slug: 'accesorios-riego',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/insumos-de-jardineria',
      id: '1338',
      name: 'Insumos de jardinería',
      parent: '71',
      slug: 'insumos-de-jardineria',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/materas',
      id: '1339',
      name: 'Materas',
      parent: '71',
      slug: 'materas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/iluminacion',
      id: '1341',
      name: 'Iluminación',
      parent: '70',
      slug: 'iluminacion',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/pilas',
      id: '1342',
      name: 'Pilas',
      parent: '70',
      slug: 'pilas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/accesorios-electricos',
      id: '1343',
      name: 'Accesorios eléctricos',
      parent: '70',
      slug: 'accesorios-electricos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-deportivas',
      id: '1349',
      name: 'Cámaras deportivas',
      parent: '1749',
      slug: 'camaras-deportivas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-reflex',
      id: '1350',
      name: 'Cámaras réflex',
      parent: '1749',
      slug: 'camaras-profesionales',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-instantaneas',
      id: '1351',
      name: 'Cámaras instantanéas',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4947?map=productClusterIds',
      id: '1354',
      name: 'Taeq',
      parent: '2017',
      slug: 'taeq',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4948?map=productClusterIds',
      id: '1355',
      name: 'Snacks',
      parent: '2017',
      slug: 'Pasabocas y snacks saludables',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/planchas-y-rizadores-de-cabello',
      id: '1356',
      name: 'Planchas y rizadores de cabello',
      parent: '75',
      slug: 'planchas-y-rizadores-de-cabello',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/secadores-de-cabello',
      id: '1357',
      name: 'Secadores de cabello',
      parent: '75',
      slug: 'secadores-de-cabello',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/afeitadores-depiladores',
      id: '1358',
      name: 'Afeitadoras y depiladoras',
      parent: '75',
      slug: 'afeitadoras-y-depiladoras',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1733?map=productClusterIds&order',
      id: '1361',
      name: 'Patinetas Eléctricas ',
      parent: '1430',
      slug: 'scooter',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2609?map=productClusterIds',
      id: '1362',
      name: 'Bicicletas Eléctricas',
      parent: '1430',
      slug: 'bicicletas electicas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bicicletas',
      id: '1363',
      name: 'Bicicletas ',
      parent: '1430',
      slug: 'bicicletas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3581?map=productClusterIds',
      id: '1364',
      name: 'Accesorios Protección',
      parent: '1430',
      slug: 'accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1733?map=productClusterIds&order',
      id: '1365',
      name: 'Patinetas Eléctricas ',
      parent: '74',
      slug: 'scooter',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2609?map=productClusterIds',
      id: '1366',
      name: 'Bicicletas Eléctricas',
      parent: '74',
      slug: 'bicicletas electicas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bicicletas',
      id: '1367',
      name: 'Bicicletas ',
      parent: '74',
      slug: 'bicicletas',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3581?map=productClusterIds',
      id: '1368',
      name: 'Accesorios Protección',
      parent: '74',
      slug: 'accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/comidas-preparadas/lista-para-consumir',
      id: '1370',
      name: 'Lista para consumir',
      parent: '1384',
      slug: 'lista-para-consumir',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/comidas-preparadas/lista-para-calentar',
      id: '1371',
      name: 'Lista para calentar',
      parent: '1384',
      slug: 'lista-para-calentar',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/comidas-preparadas/para-terminar-en-casa',
      id: '1372',
      name: 'Para terminar en casa',
      parent: '1384',
      slug: 'para-terminar-en-casa',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/neveras',
      id: '1374',
      name: 'Neveras',
      parent: '28',
      slug: 'Neveras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/nevecones',
      id: '1375',
      name: 'Nevecones',
      parent: '28',
      slug: 'Nevecones',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/congeladores',
      id: '1376',
      name: 'Congeladores',
      parent: '28',
      slug: 'Congeladores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/minibares',
      id: '1377',
      name: 'Minibares',
      parent: '28',
      slug: 'Minibares',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/cavas-de-vino',
      id: '1378',
      name: 'Cavas de vino',
      parent: '28',
      slug: 'Cavas-de-vino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/refrigeracion/dispensadores-de-agua',
      id: '1379',
      name: 'Dispensadores de agua',
      parent: '28',
      slug: 'dispensadores-de-agua',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4951?map=productClusterIds',
      id: '1380',
      name: 'Bebidas',
      parent: '2017',
      slug: 'bebidas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4952?map=productClusterIds',
      id: '1381',
      name: 'Cereales y harinas',
      parent: '2017',
      slug: 'Cereales y harinas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4949?map=productClusterIds',
      id: '1382',
      name: 'Pastas y granos',
      parent: '2017',
      slug: 'pastas y granos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/search?_query=funat ',
      id: '1383',
      name: 'Vitaminas y suplementos',
      parent: '2017',
      slug: 'funat',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-taeq',
      id: '1386',
      name: 'Taeq',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/frescampo',
      id: '1387',
      name: 'Frescampo',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/porchi?map=b',
      id: '1388',
      name: 'Porchi',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/pomona',
      id: '1389',
      name: 'Pomona',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ekono',
      id: '1390',
      name: 'Ekono',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/t-l-d-todos-los-dias',
      id: '1391',
      name: 'T/L/D',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ampm-plus',
      id: '1392',
      name: 'AMPM Plus',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/lavado-y-secado/lavadoras-carga-superior',
      id: '1402',
      name: 'Lavadoras carga superior',
      parent: '29',
      slug: 'lavadoras-carga-superior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/lavado-y-secado/lavadoras-carga-frontal',
      id: '1403',
      name: 'Lavadoras carga frontal',
      parent: '29',
      slug: 'lavadoras-carga-frontal',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/lavado-y-secado/lavadoras-secadoras',
      id: '1404',
      name: 'Lavadoras secadoras',
      parent: '29',
      slug: 'lavadoras-secadoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/lavado-y-secado/secadoras',
      id: '1405',
      name: 'Secadoras',
      parent: '29',
      slug: 'secadoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina',
      id: '1406',
      name: 'Mundo cocina',
      parent: '8',
      slug: 'Mundo-cocina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion/estufas-de-piso',
      id: '1407',
      name: 'Estufas de piso',
      parent: '1412',
      slug: 'Estufas-de-piso',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion/estufas-empotrables',
      id: '1408',
      name: 'Estufas empotrables ',
      parent: '1412',
      slug: 'Estufas-empotrables',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion/hornos-Empotrables',
      id: '1409',
      name: 'Hornos  empotrables',
      parent: '1412',
      slug: 'Hornos-empotrables',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion/campanas-extractores',
      id: '1410',
      name: 'Campanas extractores',
      parent: '1412',
      slug: 'Campanas-extractores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion/lavaplatos',
      id: '1411',
      name: 'Lavaplatos',
      parent: '1412',
      slug: 'Lavaplatos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/coccion',
      id: '1412',
      name: 'Cocción',
      parent: '8',
      slug: 'coccion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/climatizacion',
      id: '1418',
      name: 'Climatización',
      parent: '8',
      slug: 'climatizacion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/climatizacion/aires-acondicionados',
      id: '1419',
      name: 'Aires acondicionados',
      parent: '1418',
      slug: 'aires-acondicionados',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/climatizacion/ventiladores',
      id: '1420',
      name: 'Ventiladores',
      parent: '1418',
      slug: 'Ventiladores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/climatizacion/calentadores-calefactores',
      id: '1422',
      name: 'Calentadores y calefactores',
      parent: '1418',
      slug: 'calentadores-y-calefactores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal',
      id: '1423',
      name: 'Cuidado personal',
      parent: '8',
      slug: 'Cuidado-personal',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-hogar',
      id: '1424',
      name: 'Mundo hogar',
      parent: '8',
      slug: 'Mundo-hogar',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1748?map=productClusterIds&pauta=t',
      id: '1427',
      name: 'Computadores gamer',
      parent: '76',
      slug: 'computadores-gamer',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/panaderia-y-reposteria/postres-y-tortas',
      id: '1428',
      name: 'Repostería',
      parent: '16',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/tapabocas',
      id: '1429',
      name: 'Tapabocas',
      parent: '1715',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/movilidad-electrica',
      id: '1430',
      name: 'Movilidad Eléctrica',
      parent: '1875',
      slug: 'movilidad',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2600?map=productClusterIds',
      id: '1435',
      name: 'Bicicletas Infantiles',
      parent: '58',
      slug: 'bicicletas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/ciclismo/repuestos',
      id: '1437',
      name: 'Repuestos',
      parent: '58',
      slug: 'repuestos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2678?map=productClusterIds',
      id: '1439',
      name: 'Afeitada',
      parent: '72',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-belleza/desodorantes-masculinos',
      id: '1440',
      name: 'Desodorantes',
      parent: '72',
      slug: 'Desodorantes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-salud-y-aseo-bebe/higiene-del-bebe',
      id: '1441',
      name: 'Higiene del bebé',
      parent: '1733',
      slug: 'panales-y-panitos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/silla-de-comedor',
      id: '1442',
      name: 'Sillas comedor',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/termos-calentadores-y-esterilizadores',
      id: '1443',
      name: 'Termos, calentadores y esterilizadores',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/planchas-y-rizadores-de-cabello',
      id: '1444',
      name: 'Planchas y rizadores de cabello',
      parent: '1423',
      slug: 'planchas-y-rizadores-de-cabello',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/secadores-de-cabello',
      id: '1445',
      name: 'Secadores de cabello',
      parent: '1423',
      slug: 'secadores-de-cabello',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/afeitadores-depiladores',
      id: '1446',
      name: 'Afeitadoras y depiladoras',
      parent: '1423',
      slug: 'afeitadoras-depiladoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/maquina-cortadora-cabello',
      id: '1447',
      name: 'Máquinas cortadoras de cabello',
      parent: '1423',
      slug: 'maquinas-cortadoras-de-cabello',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/masajeador',
      id: '1449',
      name: 'Masajeadores',
      parent: '1423',
      slug: 'masajeadores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/espejos-electricos',
      id: '1450',
      name: 'Espejos eléctricos',
      parent: '1423',
      slug: 'espejos-eléctricos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-hogar/aspiradoras',
      id: '1451',
      name: 'Aspiradoras',
      parent: '1424',
      slug: 'aspiradoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-hogar/plancha-ropa',
      id: '1452',
      name: 'Planchas de ropa',
      parent: '1424',
      slug: 'planchas-de-ropa',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-hogar/brilladoras',
      id: '1454',
      name: 'Brilladoras de piso',
      parent: '1424',
      slug: 'brilladoras-de-piso',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-hogar/accesorios-cuidado-pisos',
      id: '1455',
      name: 'Accesorios cuidado de pisos',
      parent: '1424',
      slug: 'accesorios-cuidado-de-pisos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/freidoras',
      id: '1456',
      name: 'Freidoras',
      parent: '1406',
      slug: 'freidoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/olla-arrocera',
      id: '1457',
      name: 'Ollas arroceras',
      parent: '1406',
      slug: 'ollas-arroceras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/licuadoras',
      id: '1458',
      name: 'Licuadoras',
      parent: '1406',
      slug: 'licuadoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/batidora',
      id: '1459',
      name: 'Batidoras',
      parent: '1406',
      slug: 'batidoras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/procesador-alimentos',
      id: '1460',
      name: 'Procesadores de alimentos',
      parent: '1406',
      slug: 'procesadores-de-alimentos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/horno-microondas',
      id: '1461',
      name: 'Hornos microondas',
      parent: '1406',
      slug: 'hornos-microondas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/hornos-tostadores',
      id: '1462',
      name: 'Hornos tostadores',
      parent: '1406',
      slug: 'hornos-tostadores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/waffleras-y-sanducheras',
      id: '1463',
      name: 'Waffleras y sanducheras',
      parent: '1406',
      slug: 'waffleras-y-sanducheras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/planchas-y-asadores',
      id: '1466',
      name: 'Planchas y asadores',
      parent: '1406',
      slug: 'planchas-y-asadores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/cafeteras',
      id: '1470',
      name: 'Cafeteras',
      parent: '1406',
      slug: 'cafeteras',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-hogar',
      id: '1484',
      name: 'Muebles y Decoración',
      parent: null,
      slug: 'Muebles-y-decoracion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/licores',
      id: '1488',
      name: 'Licores',
      parent: '2202',
      slug: 'licores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/maquina-cortadora-cabello',
      id: '1494',
      name: 'Máquinas cortadoras de cabello',
      parent: '75',
      slug: 'máquinas-cortadoras-de-cabello',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/masajeador',
      id: '1496',
      name: 'Masajeadores',
      parent: '75',
      slug: 'masajeadores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/cuidado-personal/espejos-electricos',
      id: '1497',
      name: 'Espejos eléctricos',
      parent: '75',
      slug: 'espejos-eléctricos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-belleza/jabones-masculinos',
      id: '1500',
      name: 'Jabones',
      parent: '72',
      slug: 'Jabones',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '1504',
      name: 'Ver todo juguetería',
      parent: '1538',
      slug: 'juegos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/banera-bebe',
      id: '1505',
      name: 'Bañeras',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/bacinillas-y-reductores',
      id: '1506',
      name: 'Bacenillas y reductores',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-de-cuna-bebe/panalera-y-cambiadores-bebe',
      id: '1508',
      name: 'Pañaleras y cambiadores',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-salud---aseo-bebe',
      id: '1509',
      name: 'Cuidado, salud y aseo',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/teteros-y-tetinas',
      id: '1510',
      name: 'Teteros y tetinas',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/chupos-y-rascaencias',
      id: '1511',
      name: 'Chupos y rasca encías ',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/set-de-alimentacion-bebes',
      id: '1512',
      name: 'Set de alimentación ',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/accesorios-alimentacion-bebe',
      id: '1513',
      name: 'Accesorios de alimentación ',
      parent: '57',
      slug: '',
      icon: '',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-alimentacion-bebe/estractor-de-lactancia',
      id: '1514',
      name: 'Extractor de lactancia',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Mercado/Lacteos-Huevos-Y-Refrigerados/Formulas-Materno-Infantil',
      id: '1515',
      name: 'Formulas materno Infantil',
      parent: '57',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Mercado/Despensa/Compotas',
      id: '1516',
      name: 'Compotas',
      parent: '57',
      slug: 'compotas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-seguridad-bebe/salud-y-seguridad-del-bebe',
      id: '1517',
      name: 'Salud y seguridad del bebé',
      parent: '1733',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/cunas-corrales-moises',
      id: '1518',
      name: 'Cunas, corrales y moisés ',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/gimnasios',
      id: '1519',
      name: 'Gimnasios ',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-de-cuna-bebe/lenceria-para-bebes',
      id: '1520',
      name: 'Lencería y decoración ',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/moviles',
      id: '1521',
      name: 'Móviles',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-de-cuna-bebe',
      id: '1523',
      name: 'Accesorios de cuna',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-seguridad-bebe/monitores-para-bebe',
      id: '1524',
      name: 'Monitores',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/otros-accesorios-grandes',
      id: '1525',
      name: 'Otros accesorios ',
      parent: '56',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/sillas-de-carro-para-bebe',
      id: '1528',
      name: 'Sillas para carro',
      parent: '55',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Bebes/Accesorios-Grandes-Bebe/Silla-de-Comedor',
      id: '1529',
      name: 'Silla de comedor',
      parent: '55',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/caminadores',
      id: '1531',
      name: 'Caminadores ',
      parent: '55',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/mecedoras-y-columpios',
      id: '1532',
      name: 'Mecedoras y columpios',
      parent: '55',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-bebe-nino-nina',
      id: '1533',
      name: 'Ropa de bebé',
      parent: '1733',
      slug: 'Ropa-de-bebe',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-seguridad-bebe/monitores-para-bebe',
      id: '1534',
      name: 'Monitores',
      parent: '1517',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-seguridad-bebe/seguridad-de-puertas',
      id: '1535',
      name: 'Seguridad puertas',
      parent: '1517',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/cuidado-seguridad-bebe/accesorios-seguridad',
      id: '1537',
      name: 'Accesorios de seguridad',
      parent: '1517',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe/camisas-y-camisetas-bebe',
      id: '1539',
      name: 'Camisas y camisetas',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe/set-y-conjuntos-bebe',
      id: '1540',
      name: 'Set y conjuntos',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/bodys-y-enterizos-bebe-nino-nina',
      id: '1541',
      name: 'Bodys y enterizos ',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/jeans-pantalones-short-bermudas-bebe',
      id: '1542',
      name: 'Jean, pantalones, short y bermudas',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/buzos-para-bebe-nino-y-nina',
      id: '1543',
      name: 'Buzos y chaquetas',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/zapatos-para-bebe-nino-y-nina',
      id: '1544',
      name: 'Zapatos ',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe/pijamas-y-ropa-interior-bebe',
      id: '1545',
      name: 'Pijamas y ropa interior',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/vestidos-para-bebe-nino-y-nina',
      id: '1546',
      name: 'Vestidos',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/vestidos-de-bano-para-bebe-nino-y-nina',
      id: '1547',
      name: 'Vestidos de baño',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/fisher-price',
      id: '1567',
      name: 'Fisher Price',
      parent: '2132',
      slug: 'Fisher-price',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/panales-y-panitos/panales',
      id: '1569',
      name: 'Pañales y pañitos',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/aseo-personal-kids',
      id: '1570',
      name: 'Productos de aseo del bebé',
      parent: '1441',
      slug: 'productos-aseo-bebe',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/cremas-antipanalitis-y-vaselin',
      id: '1571',
      name: 'Cremas antipañalitis y vaselinas',
      parent: '1441',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/exprimidores-y-extractores',
      id: '1572',
      name: 'Exprimidores y extractores',
      parent: '1406',
      slug: 'exprimidores-y-extractores',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina/maquinas-especiales',
      id: '1573',
      name: 'Máquinas especiales',
      parent: '1406',
      slug: 'máquinas-especiales',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '1584',
      name: 'Mujer',
      parent: '1682',
      slug: 'Mujer',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '1585',
      name: 'Hombre',
      parent: '1682',
      slug: 'Hombre',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/relojes',
      id: '1667',
      name: 'Relojes',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/maletas-y-tulas',
      id: '1668',
      name: 'Maletas y tulas',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/morrales-y-loncheras',
      id: '1669',
      name: 'Morrales y loncheras',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/bolsos-maletines-y-carteras',
      id: '1670',
      name: 'Bolsos, maletines y carteras',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/billetera-y-correa',
      id: '1671',
      name: 'Billetera y correas de cuero',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/gafas',
      id: '1672',
      name: 'Gafas',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/marroquineria/cosmetiqueras-cartucheras-y-lapiceras-de-mujer',
      id: '1673',
      name: 'Cosmetiqueras y estuches',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/bufandas-pashminas-y-corbatas',
      id: '1674',
      name: 'Bufandas, pashminas y corbatas',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/todo-accesorios',
      id: '1675',
      name: 'Accesorios',
      parent: '1896',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/all-sale',
      id: '1677',
      name: 'SALE',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '1682',
      name: 'Moda y accesorios',
      parent: null,
      slug: 'moda-y-accesorios',
      icon: 'ico_nav_moda_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/navidad/cenas-navidenas',
      id: '1683',
      name: 'Cenas navideñas',
      parent: '2202',
      slug: 'Cenas navideñas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/delicias-navidenas',
      id: '1684',
      name: 'Delicias navideñas',
      parent: '2202',
      slug: 'Delicias navideñas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/sabores-para-compartir',
      id: '1685',
      name: 'Sabores para compartir',
      parent: '2202',
      slug: 'Sabores para compartir',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/anchetas',
      id: '1686',
      name: 'Anchetas regalo',
      parent: '2202',
      slug: 'Anchetas regalo',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/cosmeticos',
      id: '1687',
      name: 'Cosméticos',
      parent: '2202',
      slug: 'Cosméticos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/cenas-navidenas',
      id: '1688',
      name: 'Cenas empacadas',
      parent: '1683',
      slug: 'Cenas empacadas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/cenas-navidenas/formulario',
      id: '1689',
      name: 'Cenas listas',
      parent: '1683',
      slug: 'Cenas listas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7535?map=productClusterIds',
      id: '1690',
      name: 'Natilla y buñuelos',
      parent: '1684',
      slug: 'Natilla y buñuelos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7348?map=productClusterIds',
      id: '1691',
      name: 'Galletas',
      parent: '1684',
      slug: 'Galletas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/chocolates',
      id: '1692',
      name: 'Chocolates',
      parent: '1684',
      slug: 'Chocolates',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7478?map=productClusterIds',
      id: '1694',
      name: 'Vinos',
      parent: '1488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/whisky',
      id: '1695',
      name: 'Whisky',
      parent: '1488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores/tequilas-ginebras-y-vodkas',
      id: '1696',
      name: 'Tequila, ginebra y vodka',
      parent: '1488',
      slug: 'Tequila ,ginebra y vodka',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7006?map=productClusterIds',
      id: '1697',
      name: 'Quesos y arequipes',
      parent: '1685',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7298?map=productClusterIds',
      id: '1698',
      name: 'Anchetas alpina',
      parent: '1685',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7004?map=productClusterIds',
      id: '1699',
      name: 'Panetones',
      parent: '1685',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7005?map=productClusterIds',
      id: '1700',
      name: 'Carnes especiales',
      parent: '1685',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/gorros-y-accesorios-para-bebe-nino-y-nina',
      id: '1710',
      name: 'Gorros y complementos ',
      parent: '1533',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/offcorss',
      id: '1714',
      name: 'Offcorss',
      parent: '2132',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-salud-belleza',
      id: '1715',
      name: 'Salud y belleza',
      parent: null,
      slug: 'salud-y-belleza',
      icon: 'ico_nav_saludbelleza_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios',
      id: '1716',
      name: 'Informatica',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/oficina-y-estudio',
      id: '1717',
      name: 'Escritorios y sillas',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares',
      id: '1718',
      name: 'Celulares',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/morrales-y-loncheras',
      id: '1719',
      name: 'Morrales',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/Tablets?map=c%2Cc%2Cc',
      id: '1720',
      name: 'Tablet',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria',
      id: '1721',
      name: 'Papeleria',
      parent: '2139',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-infantil',
      id: '1722',
      name: 'Ropa infantil',
      parent: null,
      slug: 'Ropa-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8765?map=productClusterIds&pauta=t',
      id: '1723',
      name: 'Películas y series',
      parent: '2297',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8752/playstation/xbox?initialMap=productClusterIds&initialQuery=8752&map=productClusterIds,b',
      id: '1724',
      name: 'Videojuegos',
      parent: '2297',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8766?map=productClusterIds&pauta=t',
      id: '1725',
      name: 'Música',
      parent: '2297',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8752/office?initialMap=productClusterIds&initialQuery=8752&map=productClusterIds,b&pauta=t',
      id: '1726',
      name: 'Informática ',
      parent: '2297',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/nuevo-marca-propia',
      id: '1727',
      name: 'Nuestras marcas - Lo nuevo',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/exito-marca-propia',
      id: '1728',
      name: 'Éxito',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-xiaomi',
      id: '1729',
      name: 'Xiaomi',
      parent: '23',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-iphone',
      id: '1730',
      name: 'iPhone',
      parent: '23',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-motorola',
      id: '1731',
      name: 'Motorola',
      parent: '23',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vivo',
      id: '1732',
      name: 'Vivo',
      parent: '23',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-bebes-ninos-jugueteria',
      id: '1733',
      name: 'Bebés ',
      parent: null,
      slug: 'bebes-y-jugueteria',
      icon: 'ico_nav_infantil_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/7820?map=productClusterIds&pauta=t',
      id: '1734',
      name: 'Los más vendidos',
      parent: '2319',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8995?map=productClusterIds',
      id: '1735',
      name: 'Alimentos y bebidas',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/tecnologia/televisores?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds&pauta=t',
      id: '1736',
      name: 'Televisores',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/electrodomesticos?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds',
      id: '1737',
      name: 'Electrodomésticos',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713?map=productClusterIds&pauta=t',
      id: '1738',
      name: 'Envío gratis',
      parent: '2319',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713/samsung?initialMap=productClusterIds&initialQuery=713&map=productClusterIds,b',
      id: '1739',
      name: 'Samsung',
      parent: '1738',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713/xiaomi?initialMap=productClusterIds&initialQuery=713&map=productClusterIds,b',
      id: '1740',
      name: 'Xiaomi',
      parent: '1738',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713/apple?initialMap=productClusterIds&initialQuery=713&map=productClusterIds,b&pauta=t',
      id: '1741',
      name: 'iPhone',
      parent: '1738',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713/huawei?initialMap=productClusterIds&initialQuery=713&map=productClusterIds,b&pauta=t',
      id: '1742',
      name: 'Huawei',
      parent: '1738',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713/motorola?initialMap=productClusterIds&initialQuery=713&map=productClusterIds,b',
      id: '1743',
      name: 'Motorola',
      parent: '1738',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/aniversario',
      id: '1744',
      name: 'Más categorías para ti',
      parent: '2319',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/hogar?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds',
      id: '1745',
      name: 'Hogar',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/deportes?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds&pauta=t',
      id: '1746',
      name: 'Deportes',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/tecnologia/celulares?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds&pauta=t',
      id: '1747',
      name: 'Celulares',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820/bebes?initialMap=productClusterIds&initialQuery=7820&map=productClusterIds',
      id: '1748',
      name: 'Bebés',
      parent: '1734',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras',
      id: '1749',
      name: 'Cámaras',
      parent: '6',
      slug: 'camaras',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria',
      id: '1750',
      name: 'Ferretería',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/camaras/canon/nikon/gopro/sony?map=b,b,b,b',
      id: '1751',
      name: 'Cámaras ',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/322?map=productClusterIds',
      id: '1752',
      name: 'Libros',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8965?map=productClusterIds',
      id: '1753',
      name: 'Mascotas',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4185?map=productClusterIds',
      id: '1754',
      name: 'Asadores',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video',
      id: '1755',
      name: 'Audífonos y parlantes',
      parent: '1744',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/8772?map=productClusterIds&pauta=t',
      id: '1756',
      name: 'Compra con puntos Colombia',
      parent: '2319',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/61-a-70-pulgadas?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/televisores&map=category-1,category-2,rango-tamano-de-pantalla&operator=and',
      id: '1757',
      name: '61 a 70 Pulgadas',
      parent: '22',
      slug: '61 a 70 pulgadas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/solicitar-tarjeta-tuya',
      id: '1758',
      name: 'Solicitar Tarjeta Exito',
      parent: '2319',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/accesorios-de-computador',
      id: '1759',
      name: 'Accesorios de computador',
      parent: '24',
      slug: 'accesorios-de-computador',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '1760',
      name: '',
      parent: '1384',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '1761',
      name: '',
      parent: '1384',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/drones',
      id: '1763',
      name: 'Drones',
      parent: '6',
      slug: 'Drones',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion/impresoras-y-multifuncionales',
      id: '1764',
      name: 'Impresoras y multifuncionales',
      parent: '26',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion/scanners',
      id: '1765',
      name: 'Scanners',
      parent: '26',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion/cartuchos-botellas-de-tinta-y-toner',
      id: '1766',
      name: 'Cartuchos y tintas',
      parent: '26',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/perfumes',
      id: '1767',
      name: 'Perfumes',
      parent: '1715',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5247?map=productClusterIds',
      id: '1768',
      name: 'Hombre',
      parent: '1767',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5248?map=productClusterIds',
      id: '1769',
      name: 'Mujer',
      parent: '1767',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '1770',
      name: 'Juguetería',
      parent: null,
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares',
      id: '1771',
      name: 'Celulares',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios',
      id: '1772',
      name: 'Computadores',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores',
      id: '1773',
      name: 'Televisores',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-mercado',
      id: '1775',
      name: 'Mercado',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3964?map=productClusterIds&pauta=t',
      id: '1776',
      name: 'Samsung',
      parent: '1773',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/caixun',
      id: '1777',
      name: 'Caixun',
      parent: '1773',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/684?map=productClusterIds&pauta=t',
      id: '1778',
      name: 'LG',
      parent: '1773',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hisense',
      id: '1779',
      name: 'Hisense',
      parent: '1773',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2269?map=productClusterIds',
      id: '1781',
      name: 'HP',
      parent: '1772',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2567?map=productClusterIds&pauta=t',
      id: '1782',
      name: 'Asus',
      parent: '1772',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2740?map=productClusterIds&pauta=t',
      id: '1783',
      name: 'AMD',
      parent: '1772',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/856?map=productClusterIds&pauta=t',
      id: '1785',
      name: 'Acer',
      parent: '1772',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713?map=productClusterIds&pauta=t',
      id: '1786',
      name: 'Envío gratis',
      parent: '1771',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-samsung',
      id: '1787',
      name: 'Samsung',
      parent: '1771',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5151?map=productClusterIds&pauta=t',
      id: '1788',
      name: 'Vivo',
      parent: '1771',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4877?map=productClusterIds&pauta=t',
      id: '1789',
      name: 'Huawei',
      parent: '1771',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/367?map=productClusterIds',
      id: '1790',
      name: 'LG',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2919?map=productClusterIds&',
      id: '1791',
      name: 'Oster',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3230?map=productClusterIds&order=OrderByScoreDESC',
      id: '1792',
      name: 'Samsung',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3222?map=productClusterIds&order=',
      id: '1793',
      name: 'Whirlpool',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/372?map=productClusterIds&order=OrderByScoreDESC',
      id: '1794',
      name: 'Mabe, GE, Centrales',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/333?map=productClusterIds',
      id: '1795',
      name: 'Haceb',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/imusa',
      id: '1798',
      name: 'Imusa',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/649?map=productClusterIds&pauta=t',
      id: '1799',
      name: 'Black & Decker',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos',
      id: '1801',
      name: 'Electrodomésticos ',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/colchones-paraiso',
      id: '1802',
      name: 'Paraiso',
      parent: '1810',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/305?map=productClusterIds',
      id: '1803',
      name: 'Fantasia',
      parent: '1810',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/315?map=productClusterIds',
      id: '1804',
      name: 'Confort Vital',
      parent: '1810',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores',
      id: '1807',
      name: 'Licores',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/rta',
      id: '1808',
      name: 'RTA',
      parent: '1821',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-colchones',
      id: '1810',
      name: 'Colchones',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mattel',
      id: '1811',
      name: 'Mattel',
      parent: '1842',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3702?map=productClusterIds&order=OrderByTopSaleDESC',
      id: '1813',
      name: 'Tania',
      parent: '1824',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9687?map=productClusterIds',
      id: '1814',
      name: 'Casio',
      parent: '1824',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5106?map=productClusterIds&order=OrderByTopSaleDESC',
      id: '1815',
      name: 'Tellenzi',
      parent: '1824',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/aseo-del-hogar',
      id: '1816',
      name: 'Aseo hogar',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9209?map=productClusterIds',
      id: '1817',
      name: 'GYMAX',
      parent: '1848',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9632?map=productClusterIds',
      id: '1818',
      name: 'Sforzo',
      parent: '1848',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9631?map=productClusterIds&order=OrderByTopSaleDESC',
      id: '1819',
      name: 'Movifit',
      parent: '1848',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles',
      id: '1821',
      name: 'Muebles',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9973?map=productClusterIds&pauta=t',
      id: '1822',
      name: 'Ariel',
      parent: '1816',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9977?map=productClusterIds&pauta=t',
      id: '1823',
      name: 'Fab',
      parent: '1816',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9974?map=productClusterIds&pauta=t',
      id: '1825',
      name: 'Coca-cola',
      parent: '1775',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-salud-belleza',
      id: '1832',
      name: 'Salud y belleza',
      parent: '2420',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/whisky-buchanans-deluxe-750-ml-70474/p',
      id: '1833',
      name: 'Buchannas ',
      parent: '1807',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/whisky-extra-952331/p',
      id: '1834',
      name: 'Chivas Regal',
      parent: '1807',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9870?map=productClusterIds&order=OrderByTopSaleDESC',
      id: '1840',
      name: 'Organix',
      parent: '1832',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9878?map=productClusterIds&order=OrderByTopSaleDESC ',
      id: '1841',
      name: 'Colgate',
      parent: '1832',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/televisores/soportes-para-tv-y-accesorios',
      id: '1844',
      name: 'Soportes para TV y accesorios',
      parent: '22',
      slug: 'soportes-para-tv-y-accesorios',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/10077?map=productClusterIds&pauta=t',
      id: '1851',
      name: 'Gato Negro',
      parent: '1807',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/10078?map=productClusterIds&pauta=t',
      id: '1852',
      name: '1800',
      parent: '1807',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/accesorios-para-celular',
      id: '1853',
      name: 'Accesorios para celular',
      parent: '23',
      slug: 'accesorios-para-celular',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-mujer',
      id: '1855',
      name: 'Ropa',
      parent: '1584',
      slug: 'Ropa Exterior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-para-mujer',
      id: '1856',
      name: 'Ropa Interior',
      parent: '1584',
      slug: 'Ropa Interior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-mujer',
      id: '1857',
      name: 'Pijamas',
      parent: '1584',
      slug: 'Pijamas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-mujer',
      id: '1859',
      name: 'Ropa Deportiva',
      parent: '1584',
      slug: 'Ropa-deportiva-mujer',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-mujer/vestidos-de-bano-de-mujer',
      id: '1860',
      name: 'Vestidos de Baño',
      parent: '1584',
      slug: 'Vestidos de Baño',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva/mujer-hombre',
      id: '1861',
      name: 'Ropa Deportiva',
      parent: '1682',
      slug: 'Ropa-deportiva',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-hombre',
      id: '1862',
      name: 'Ropa',
      parent: '1585',
      slug: 'Ropa Exterior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-Interior-para-hombre',
      id: '1863',
      name: 'Ropa Interior',
      parent: '1585',
      slug: 'Ropa Interior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-hombre',
      id: '1864',
      name: 'Pijamas',
      parent: '1585',
      slug: 'Pijamas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-hombre',
      id: '1865',
      name: 'Ropa Deportiva',
      parent: '1585',
      slug: '/moda-y-accesorios/ropa-deportiva-para-hombre',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-hombre/pantalonetas-de-bano-hombre',
      id: '1867',
      name: 'Pantalonetas de baño',
      parent: '1585',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '1868',
      name: 'Destacados',
      parent: '1682',
      slug: 'Novedades',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-deportes',
      id: '1875',
      name: 'Deportes',
      parent: null,
      slug: 'deportes-y-tiempo-libre',
      icon: 'ico_cat_bici',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/libros',
      id: '1876',
      name: 'Libros',
      parent: '1929',
      slug: 'Libros',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria',
      id: '1877',
      name: 'Papelería',
      parent: '1929',
      slug: 'Papeleria',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4149?map=productClusterIds',
      id: '1879',
      name: 'Fiesta',
      parent: '1929',
      slug: 'Fiesta',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4156?map=productClusterIds',
      id: '1880',
      name: 'Desechables',
      parent: '1879',
      slug: 'Desechables',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4157?map=productClusterIds',
      id: '1881',
      name: 'Piñatería',
      parent: '1879',
      slug: 'Pinateria',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4158?map=productClusterIds',
      id: '1882',
      name: 'Empaque',
      parent: '1879',
      slug: 'Empaque',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/libros/Colecciones-especiales',
      id: '1885',
      name: 'Colecciones especiales',
      parent: '1876',
      slug: 'Colecciones-especiales',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/libros/Literatura-y-Ficcion',
      id: '1886',
      name: 'Literatura y Ficción',
      parent: '1876',
      slug: 'Literatura-y-ficcion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/libros/negocios-y-profesionales',
      id: '1887',
      name: 'Negocios y Profesionales',
      parent: '1876',
      slug: 'Negocios-y-profesionales',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/libros/no-ficcion',
      id: '1888',
      name: 'No Ficción',
      parent: '1876',
      slug: 'No-ficcion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/accesorios-de-oficina-y-estudio?initialMap=c,c&initialQuery=libros-y-papeleria/papeleria',
      id: '1889',
      name: 'Accesorios de Oficina y Estudio',
      parent: '1877',
      slug: 'Accesorios-de-oficina-y-estudio',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/Blocks',
      id: '1890',
      name: 'Blocks',
      parent: '1877',
      slug: 'Blocks',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/cuadernos',
      id: '1891',
      name: 'Cuadernos',
      parent: '1877',
      slug: 'Cuadernos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/escritura',
      id: '1892',
      name: 'Escritura',
      parent: '1877',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/libretas-y-apuntes',
      id: '1893',
      name: 'Libretas y Apuntes',
      parent: '1877',
      slug: 'Libretas-y-apuntes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/manualidades',
      id: '1894',
      name: 'Manualidades',
      parent: '1877',
      slug: 'Manualidades',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '1896',
      name: 'Accesorios',
      parent: '1682',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/especia',
      id: '1897',
      name: 'Arkitect - Bronzini by Especia',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/cont-textil-sostenible',
      id: '1898',
      name: 'Moda consciente',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/arkitect',
      id: '1899',
      name: 'Arkitect ',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/bronzini',
      id: '1900',
      name: 'Bronzini',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/levis',
      id: '1901',
      name: 'Levis',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/tennis?order=OrderByBestDiscountDESC',
      id: '1905',
      name: 'Tennis',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/people',
      id: '1907',
      name: 'People',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '1908',
      name: 'Marcas',
      parent: '1682',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-mujer',
      id: '1909',
      name: 'Zapatos',
      parent: '1584',
      slug: 'Zapatos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-mujer',
      id: '1910',
      name: 'Mujer',
      parent: '1861',
      slug: 'Ropa-deportiva-mujer',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-hombre',
      id: '1911',
      name: 'Hombre',
      parent: '1861',
      slug: 'Ropa-deportiva-hombre',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/nike',
      id: '1912',
      name: 'Nike',
      parent: '1861',
      slug: 'Nike',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/fila',
      id: '1913',
      name: 'Fila',
      parent: '1861',
      slug: 'Fila',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pb-deportivo',
      id: '1914',
      name: 'Punto Blanco',
      parent: '1861',
      slug: 'Punto-blanco',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-deportiva-para-mujer/leonisa?initialMap=c,c&initialQuery=moda-y-accesorios/ropa-deportiva-para-mujer&map=b',
      id: '1915',
      name: 'Leonisa',
      parent: '1861',
      slug: 'Leonisa',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/stop-jeans',
      id: '1916',
      name: 'Stop Jeans',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ragged',
      id: '1917',
      name: 'Ragged',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/mercedes-campuzano',
      id: '1918',
      name: 'Mercedes Campuzano',
      parent: '1908',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil',
      id: '1919',
      name: 'Infantil',
      parent: '9',
      slug: 'Dormitorio-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar',
      id: '1924',
      name: 'Ropa de hogar',
      parent: '9',
      slug: 'ropa-de-hogar',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria',
      id: '1929',
      name: 'Libros y papeleria',
      parent: null,
      slug: 'Libros-y-papeleria',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/oficina-en-casa',
      id: '1930',
      name: 'Oficina en Casa',
      parent: '1484',
      slug: 'Oficina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/salas',
      id: '1931',
      name: 'Salas',
      parent: '1484',
      slug: 'Salas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/comedores',
      id: '1932',
      name: 'Comedor',
      parent: '1484',
      slug: 'Comedor',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina',
      id: '1933',
      name: 'Cocina',
      parent: '1484',
      slug: 'Cocina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/bano',
      id: '1935',
      name: 'Baño',
      parent: '1484',
      slug: 'baño',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1755?map=productClusterIds&pauta=t',
      id: '1936',
      name: ' Sala',
      parent: '1931',
      slug: 'juegos-de-sala',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles-sofacamas-sillasreclinables',
      id: '1937',
      name: 'Sofá camas',
      parent: '1931',
      slug: 'Sofa-camas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/muebles-de-tv-y-centros-entretenimiento',
      id: '1938',
      name: 'Muebles de TV',
      parent: '1931',
      slug: 'Muebles-de-tv',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles-sofas-sillonesypoltronas',
      id: '1939',
      name: 'Sofás y potronas',
      parent: '1931',
      slug: 'Sofas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/puff-y-bancos',
      id: '1940',
      name: 'Puff y bancos',
      parent: '1931',
      slug: 'Puff',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/mesas-de-centro-y-auxiliares',
      id: '1941',
      name: 'Mesas de centro',
      parent: '1931',
      slug: 'Mesas-de-centro-y-auxiliares',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Hogar/Muebles/Escritorios',
      id: '1942',
      name: 'Escritorios',
      parent: '1930',
      slug: 'Escritorios',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Hogar/Muebles/Bibliotecas-y-Repisas',
      id: '1943',
      name: 'Bibliotecas y repisas',
      parent: '1930',
      slug: 'Bibliotecas',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/sillas-oficina',
      id: '1944',
      name: 'Sillas Oficina',
      parent: '1930',
      slug: 'Sillas-oficina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina/juegos-de-comedor-y-mesas-de-comedor',
      id: '1946',
      name: 'Juegos de comedor',
      parent: '1932',
      slug: 'Juegos-de-comedor',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/muebles-de-bar',
      id: '1947',
      name: 'Muebles de bar',
      parent: '1932',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/mesa/complementos-de-bar',
      id: '1948',
      name: 'Complementos de bar',
      parent: '1932',
      slug: 'Complementos-de-mesa',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles-mublesbar-complementosbar',
      id: '1951',
      name: 'Muebles de cocina y complementos',
      parent: '1933',
      slug: 'Muebles-de-cocina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina/utensilios-de-cocina',
      id: '1952',
      name: 'Utensilios de cocina',
      parent: '1933',
      slug: 'Utensilios-de-cocina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina/cuchillos',
      id: '1954',
      name: 'Cuchillos',
      parent: '1933',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-muebles',
      id: '1963',
      name: 'Muebles',
      parent: '2291',
      slug: 'Finlandek-muebles',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-colchones',
      id: '1964',
      name: 'Colchones',
      parent: '2291',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-camas',
      id: '1965',
      name: 'Cama',
      parent: '2291',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-bano',
      id: '1967',
      name: 'Baño',
      parent: '2291',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria',
      id: '1969',
      name: 'Ferretería y Vehículos',
      parent: null,
      slug: 'ferreteria-y-vehiculos',
      icon: 'ico_nav_ferreteria_exito',
      styles: '',
      showIconLeft: false
    },
    {
      href: '/5884?map=productClusterIds',
      id: '1976',
      name: 'Celulares',
      parent: '25',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/people',
      id: '1978',
      name: 'People',
      parent: '2132',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-nvidia',
      id: '1983',
      name: 'Mundo NVIDIA',
      parent: '24',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes-ninos-jugueteria/jugueteria-importados',
      id: '1989',
      name: 'Juguetería importada',
      parent: '1538',
      slug: 'jugueteria-importada',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/electrodomesticos/mundo-cocina-importados',
      id: '1999',
      name: 'Accesorios de cocina importados',
      parent: '1406',
      slug: 'accesorios-cocina-importados',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-hombre',
      id: '2006',
      name: 'Zapatos',
      parent: '1585',
      slug: '/moda-y-accesorios/calzado-para-hombre',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-capilar/accesorios-para-el-cabello',
      id: '2012',
      name: 'Accesorios para el cabello',
      parent: '47',
      slug: 'accesorios-para-el-cabello',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-digitales-compactas',
      id: '2019',
      name: 'Cámaras digitales compactas',
      parent: '1749',
      slug: '',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-de-video',
      id: '2020',
      name: 'Cámaras de video',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/accesorios-de-camaras',
      id: '2021',
      name: 'Accesorios',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2022',
      name: 'Nuevas Categorías',
      parent: null,
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/juegos-de-mesa',
      id: '2023',
      name: 'Juegos de mesa',
      parent: '2110',
      slug: 'juegos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1226?map=productClusterIds',
      id: '2024',
      name: 'Bicicletas, triciclos y patines',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '2025',
      name: 'Montables',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/munecas-y-accesorios',
      id: '2026',
      name: 'Muñecas y accesorios',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/6355?map=productClusterIds',
      id: '2027',
      name: 'Autos y pistas',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1278?map=productClusterIds',
      id: '2028',
      name: 'Construcción y armables',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1278?map=productClusterIds',
      id: '2029',
      name: 'Construcción y armables',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/figuras-de-accion',
      id: '2030',
      name: 'Figuras de acción',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/peluches',
      id: '2031',
      name: 'Peluches ',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2033',
      name: 'Marcas destacadas',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5156?map=productClusterIds',
      id: '2035',
      name: 'Hot Wheels',
      parent: '2033',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5153?map=productClusterIds',
      id: '2036',
      name: 'Barbie',
      parent: '2033',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hasbro-gaming',
      id: '2037',
      name: 'Hasbro Gaming',
      parent: '2033',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/fisher-price',
      id: '2038',
      name: 'Fisher Price',
      parent: '2033',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2039',
      name: 'Tiendas oficiales',
      parent: '2110',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mattel',
      id: '2040',
      name: 'Mattel',
      parent: '2039',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mega-bloks',
      id: '2041',
      name: 'Mega Bloks',
      parent: '2033',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3697?map=productClusterIds',
      id: '2043',
      name: 'Juegos de fichas',
      parent: '2023',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3698?map=productClusterIds',
      id: '2044',
      name: 'Juegos de cartas',
      parent: '2023',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3701?map=productClusterIds',
      id: '2045',
      name: 'Juegos de rol',
      parent: '2023',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3699?map=productClusterIds',
      id: '2046',
      name: 'Juegos de tablero',
      parent: '2023',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3703?map=productClusterIds',
      id: '2047',
      name: 'Juegos de estrategia',
      parent: '2023',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-bebe-nino-nina',
      id: '2049',
      name: 'Bebé',
      parent: '1722',
      slug: 'bebe',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe-nina',
      id: '2050',
      name: 'Bebé niña',
      parent: '2049',
      slug: 'bebe-nina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/Moda-Y-Accesorios/Ropa-de-Bebe-Nino',
      id: '2051',
      name: 'Bebé niño',
      parent: '2049',
      slug: 'bebe-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe/camisas-y-camisetas-bebe',
      id: '2052',
      name: 'Camisas y Camisetas',
      parent: '2049',
      slug: 'camisas-y-camisetas-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe/set-y-conjuntos-bebe',
      id: '2053',
      name: 'Sets y conjuntos',
      parent: '2049',
      slug: 'sets-y-conjuntos-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/bodys-y-enterizos-bebe-nino-nina',
      id: '2054',
      name: 'Bodys y enterizos',
      parent: '2049',
      slug: 'bodys-y-enterizos-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-bebe-nino-nina',
      id: '2055',
      name: 'Ropa Interior y medias',
      parent: '2049',
      slug: 'ropa-interior-y-medias-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-bebe-nino-nina',
      id: '2056',
      name: 'Pijamas',
      parent: '2049',
      slug: 'pijamas-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/jeans-pantalones-bebe-nino-nina',
      id: '2057',
      name: 'Jeans y pantalones',
      parent: '2049',
      slug: 'jeans-y-pantalones-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/short-bermudas-bebe-nino-nina',
      id: '2058',
      name: 'Short y bermudas',
      parent: '2049',
      slug: 'shorts-y-bermudas-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/buzos-para-bebe-nino-y-nina',
      id: '2059',
      name: 'Buzos y chaquetas',
      parent: '2049',
      slug: 'buzos-y-chaquetas-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/vestidos-para-bebe-nino-y-nina',
      id: '2060',
      name: 'Vestidos',
      parent: '2049',
      slug: 'vestidos-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/vestidos-de-bano-para-bebe-nino-y-nina',
      id: '2061',
      name: 'Vestidos de baño',
      parent: '2049',
      slug: 'vestidos-de-bano',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/zapatos-para-bebe-nino-y-nina',
      id: '2062',
      name: 'Zapatos',
      parent: '2049',
      slug: 'zapatos-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/gorros-y-accesorios-para-bebe-nino-y-nina',
      id: '2063',
      name: 'Gorros y complementos',
      parent: '2049',
      slug: 'gorros-y-complementos-bebes',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nina',
      id: '2064',
      name: 'Niñas de 2 - 16 años',
      parent: '1722',
      slug: 'ninas-2-16',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-niña',
      id: '2065',
      name: 'Ropa',
      parent: '2064',
      slug: 'ropa-nina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-para-niña',
      id: '2066',
      name: 'Ropa interior',
      parent: '2064',
      slug: 'ropa-interior-nina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-niña',
      id: '2067',
      name: 'Pijamas',
      parent: '2064',
      slug: 'Pijamas-nina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-niña',
      id: '2068',
      name: 'Zapatos',
      parent: '2064',
      slug: 'Zapatos-nina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nina',
      id: '2069',
      name: 'Ver todo',
      parent: '2064',
      slug: '',
      icon: '',
      styles: 'todo-nina',
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nino',
      id: '2070',
      name: 'Niños de 2 - 16 años',
      parent: '1722',
      slug: 'ninos-2-16',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-niño',
      id: '2071',
      name: 'Ropa',
      parent: '2070',
      slug: 'ropa-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-para-niño',
      id: '2072',
      name: 'Ropa interior',
      parent: '2070',
      slug: 'ropa-interior-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-niño',
      id: '2073',
      name: 'Pijamas',
      parent: '2070',
      slug: 'pijamas-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-niño',
      id: '2074',
      name: 'Zapatos',
      parent: '2070',
      slug: 'zapatos-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nino',
      id: '2075',
      name: 'Ver todo',
      parent: '2070',
      slug: 'ver-todo-nino',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nina-junior',
      id: '2076',
      name: 'Niña junior de 8 - 18 años',
      parent: '1722',
      slug: 'nina-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-niña-junior',
      id: '2077',
      name: 'Ropa',
      parent: '2076',
      slug: 'ropa-nina-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-para-niña-junior',
      id: '2078',
      name: 'Ropa interior',
      parent: '2076',
      slug: 'ropa-interior-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-niña-junior',
      id: '2079',
      name: 'Pijamas',
      parent: '2076',
      slug: 'pijamas-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-niña-junior',
      id: '2080',
      name: 'Zapatos',
      parent: '2076',
      slug: 'zapatos-nina-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nina-junior',
      id: '2081',
      name: 'Ver todo',
      parent: '2076',
      slug: 'ver-todo-nina-8-18',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nino-junior ',
      id: '2082',
      name: 'Niño junior de 8 - 18 años',
      parent: '1722',
      slug: 'nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-exterior-para-niño-junior',
      id: '2083',
      name: 'Ropa',
      parent: '2082',
      slug: 'ropa-nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-interior-para-niño-junior',
      id: '2084',
      name: 'Ropa interior',
      parent: '2082',
      slug: 'ropa-interior-nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas-para-niño-junior',
      id: '2085',
      name: 'Pijamas',
      parent: '2082',
      slug: 'Pijamas-nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/calzado-para-niño-junior',
      id: '2086',
      name: 'Zapatos',
      parent: '2082',
      slug: 'zapatos-nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/todo-nino-junior ',
      id: '2087',
      name: 'Ver todo',
      parent: '2082',
      slug: 'ver-todo-nino-junior',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-infantil/marcas-destacadas',
      id: '2088',
      name: 'Marcas destacadas',
      parent: '1722',
      slug: 'marcas-destacadas-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-de-bebe-people',
      id: '2089',
      name: 'People',
      parent: '2088',
      slug: 'people-intanfil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/offcorss',
      id: '2090',
      name: 'Offcorss',
      parent: '2088',
      slug: 'offcorss-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/mic',
      id: '2091',
      name: 'MIC',
      parent: '2088',
      slug: 'MIC-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/modayaccesorios/babyfresh',
      id: '2092',
      name: 'Baby Fresh',
      parent: '2088',
      slug: 'baby-fresh-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/ropa-infantil-exterior-gef',
      id: '2093',
      name: 'Gef',
      parent: '2088',
      slug: 'gef-infantil',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/yoyo-jeans',
      id: '2095',
      name: 'Yoyo Jeans',
      parent: '2088',
      slug: '',
      icon: '',
      styles: 'yoyo-jeans-infantil',
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion/accesorios-de-impresion',
      id: '2096',
      name: 'Accesorios de impresión',
      parent: '26',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-saludable',
      id: '2097',
      name: 'Mundo Saludable',
      parent: '10',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/aseo-del-hogar/cuidado-de-la-ropa',
      id: '2099',
      name: 'Cuidado de la ropa',
      parent: '21',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado/carne-de-res',
      id: '2100',
      name: 'Res',
      parent: '13',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/panaderia-y-reposteria/ingredientes-para-reposteria',
      id: '2101',
      name: 'Ingredientes de repostería',
      parent: '16',
      slug: 'ingredientes-para-reposteria',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/complementos-de-bano',
      id: '2103',
      name: 'Accesorios corporales',
      parent: '48',
      slug: 'complementos-de-bano',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12349?map=productClusterIds',
      id: '2104',
      name: 'Solares y repelentes',
      parent: '48',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12367?map=productClusterIds',
      id: '2105',
      name: 'Cepillos y sedas dentales',
      parent: '46',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/cuidado-corporal/proteccion-solar',
      id: '2108',
      name: 'Protección solar',
      parent: '49',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria',
      id: '2111',
      name: 'Medicamentos y Droguería',
      parent: '2048',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/tapabocas',
      id: '2112',
      name: 'Tapabocas',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/dolor',
      id: '2113',
      name: 'Alivia el dolor',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/heridas',
      id: '2114',
      name: 'Heridas',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/gripa-tos',
      id: '2115',
      name: 'Gripa y Tos',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/estomago',
      id: '2116',
      name: 'Estómago ',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/proteinas-y-suplementos',
      id: '2117',
      name: 'Proteínas y suplementos ',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/vitaminas-y-suplementos',
      id: '2118',
      name: 'Vitaminas',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/salud-sexual',
      id: '2119',
      name: 'Salud sexual',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/piel',
      id: '2120',
      name: 'Piel',
      parent: '2111',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/alimentos',
      id: '2121',
      name: 'Alimentos ',
      parent: '2109',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/accesorios-mascotas',
      id: '2122',
      name: 'Accesorios',
      parent: '2109',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/belleza-e-higiene',
      id: '2123',
      name: 'Salud y belleza',
      parent: '2109',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2126',
      name: 'Destacados',
      parent: '2049',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2127',
      name: 'Destacados',
      parent: '1722',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesesorios/mundo-infantil',
      id: '2128',
      name: 'Mundo Infantil',
      parent: '2127',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/cargador-bebe',
      id: '2131',
      name: 'Cargadores',
      parent: '55',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/marcas-destacadas-bebes',
      id: '2132',
      name: 'Marcas destacadas',
      parent: '1733',
      slug: '',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coche-travel-system',
      id: '2133',
      name: 'Coche Travel System',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coche-paseador',
      id: '2134',
      name: 'Coche paseador',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coche-compacto',
      id: '2135',
      name: 'Coche compacto',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coche-cuna',
      id: '2136',
      name: 'Coche cuna',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coche-tres-ruedas',
      id: '2137',
      name: 'Coche tres ruedas',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/coches/coches-dobles',
      id: '2138',
      name: 'Coches dobles',
      parent: '53',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-del-bebe',
      id: '2159',
      name: 'Mundo del bebe',
      parent: '2127',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2160',
      name: 'Destacados',
      parent: '1733',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesesorios/mundo-infantil',
      id: '2161',
      name: 'Mundo Infantil',
      parent: '2160',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-del-bebe',
      id: '2162',
      name: 'Mundo del bebe',
      parent: '2160',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado/carne-de-cerdo',
      id: '2163',
      name: 'Cerdo',
      parent: '13',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado/pollo',
      id: '2164',
      name: 'Pollo',
      parent: '13',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/pollo-carne-y-pescado/pescados-y-mariscos',
      id: '2165',
      name: 'Pescados y mariscos',
      parent: '13',
      slug: 'pescados-y-mariscos',
      icon: null,
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartphones',
      id: '2167',
      name: 'Smartphones',
      parent: '7',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch',
      id: '2168',
      name: 'Smartwatch',
      parent: '7',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/713?map=productClusterIds&pauta=t',
      id: '2169',
      name: 'Envío gratis',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-samsung',
      id: '2170',
      name: 'Samsung',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-xiaomi',
      id: '2171',
      name: 'Xiaomi',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-iphone',
      id: '2172',
      name: 'Iphone',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-motorola',
      id: '2173',
      name: 'Motorola',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-huawei',
      id: '2174',
      name: 'Huawei',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/accesorios-para-celular',
      id: '2175',
      name: 'Accesorios para celular',
      parent: '7',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch/samsung-accesorios-telefonia?fuzzy=0&initialMap=c,c,c&initialQuery=tecnologia/celulares/smartwatch&map=category-1,category-2,category-3,brand&operator=and',
      id: '2176',
      name: 'Samsung',
      parent: '2168',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch/apple?fuzzy=0&initialMap=c,c,c&initialQuery=tecnologia/celulares/smartwatch&map=category-1,category-2,category-3,brand&operator=and',
      id: '2177',
      name: 'Apple',
      parent: '2168',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch/xiaomi?fuzzy=0&initialMap=c,c,c&initialQuery=tecnologia/celulares/smartwatch&map=category-1,category-2,category-3,brand&operator=and',
      id: '2178',
      name: 'Xiaomi',
      parent: '2168',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/smartwatch/huawei?fuzzy=0&initialMap=c,c,c&initialQuery=tecnologia/celulares/smartwatch&map=category-1,category-2,category-3,brand&operator=and',
      id: '2179',
      name: 'Huawei',
      parent: '2168',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/audio-y-video/audifonos',
      id: '2180',
      name: 'Audifonos',
      parent: '2175',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/accesorios-para-celular/tipo-de-accesorio_Cargadores?initialMap=c,c,c&initialQuery=tecnologia/celulares/accesorios-para-celular',
      id: '2181',
      name: 'Cargadores',
      parent: '2175',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/accesorios-para-celular/tipo-de-accesorio_Monopod?initialMap=c,c,c&initialQuery=tecnologia/celulares/accesorios-para-celular',
      id: '2182',
      name: 'Monopod',
      parent: '2175',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/accesorios-para-celular/tipo-de-accesorio_Protectores%20y%20estuches%20para%20celular?initialMap=c,c,c&initialQuery=tecnologia/celulares/accesorios-para-celular',
      id: '2183',
      name: 'Protectores y estuches',
      parent: '2175',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vivo',
      id: '2184',
      name: 'Vivo',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/marroquineria/ropa-exterior-para-mujer/evento-paises?fuzzy=0&initialMap=c,c&initialQuery=moda-y-accesorios/ropa-exterior-para-mujer&map=category-1,category-2,category-2,category-2,brand&operator=and&page=1',
      id: '2186',
      name: 'Tendencia India',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesesorios/mundo-infantil',
      id: '2187',
      name: 'Mundo Infantil',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12883?map=productClusterIds',
      id: '2189',
      name: 'Pietrán',
      parent: '1775',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/12884?map=productClusterIds',
      id: '2190',
      name: 'Nestlé',
      parent: '1775',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/celulares/celulares-iphone',
      id: '2192',
      name: 'Apple',
      parent: '1771',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/kalley?fuzzy=0&initialMap=b&initialQuery=kalley&map=category-1,brand&operator=and',
      id: '2194',
      name: 'Kalley',
      parent: '1773',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/remington',
      id: '2195',
      name: 'Remington',
      parent: '1832',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/samurai',
      id: '2196',
      name: 'Samurai',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/t-fal',
      id: '2197',
      name: 'T-fal',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/9476?map=productClusterIds&pauta=t',
      id: '2198',
      name: 'Electrolux',
      parent: '1801',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2199',
      name: 'Lanzamientos',
      parent: '7',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/15463?map=productClusterIds&pauta=t ',
      id: '2200',
      name: 'Galaxy S21 FE',
      parent: '2199',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/disfraces',
      id: '2203',
      name: 'Disfraces ',
      parent: '2402',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/disfraces',
      id: '2204',
      name: 'Envío gratis',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13015?map=productClusterIds',
      id: '2205',
      name: 'Niña',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13020?map=productClusterIds',
      id: '2206',
      name: 'Niño',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13009?map=productClusterIds',
      id: '2207',
      name: 'Bebé',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13021?map=productClusterIds',
      id: '2208',
      name: 'Adolescente',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13022?map=productClusterIds',
      id: '2209',
      name: 'Adulto',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/confiteria-y-dulces',
      id: '2210',
      name: 'Dulces y bebidas',
      parent: '2402',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13024?map=productClusterIds',
      id: '2211',
      name: 'Decoración ',
      parent: '2402',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/confiteria-y-dulces',
      id: '2212',
      name: 'Dulces',
      parent: '2210',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/chocolates',
      id: '2213',
      name: 'Chocolates',
      parent: '2210',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores',
      id: '2214',
      name: 'Licores',
      parent: '2210',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/despensa/bebidas',
      id: '2215',
      name: 'Bebidas',
      parent: '2210',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/snacks/pasabocas',
      id: '2216',
      name: 'Pasabocas',
      parent: '2210',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/halloween-int-infatil',
      id: '2217',
      name: 'Moda',
      parent: '2402',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/cont-halloween-offcorss',
      id: '2218',
      name: 'Offcorss',
      parent: '2217',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/halloween-int-infatil',
      id: '2219',
      name: 'Pijamas',
      parent: '2217',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/combos-y-consolas-playstation',
      id: '2220',
      name: 'Entretenimiento',
      parent: '2402',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/combos-y-consolas-playstation',
      id: '2221',
      name: 'Mundo gamer',
      parent: '2220',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/5685?map=productClusterIds',
      id: '2222',
      name: 'Máquinas especiales',
      parent: '2220',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/4805?map=productClusterIds',
      id: '2223',
      name: 'Parlantes y barras de sonido',
      parent: '2220',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/protector-de-colchones-y-almohadas',
      id: '2224',
      name: 'Protectores y almohadas',
      parent: '30',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/cabeceros',
      id: '2227',
      name: 'Cabeceros',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/camas-y-base-camas',
      id: '2228',
      name: 'Camas y basecamas',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/closet-zapateros-y-organizadores',
      id: '2229',
      name: 'Closet, zapateros y organizadores',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/comodas-y-tocadores',
      id: '2230',
      name: 'Comodas y tocadores',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/mesas-de-noche',
      id: '2231',
      name: 'Mesas de noche',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/decoracion/lamparas-de-dormitorio',
      id: '2232',
      name: 'Iluminicación',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/juegos-de-cama',
      id: '2233',
      name: 'Ropa de cama',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/decoracion/cortinas-y-persianas',
      id: '2234',
      name: 'Persianas y cortinas',
      parent: '32',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/dormitorio-infantil',
      id: '2235',
      name: 'Cunas y camas infantiles',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/vajillas-y-vasos-infantiles',
      id: '2236',
      name: 'Menaje infantil',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/mecedoras-y-sillones-infantil',
      id: '2237',
      name: 'Mecedoras infantiles',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/muebles-auxiliares-infantil',
      id: '2238',
      name: 'Muebles auxiliares infantil',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/ropa-de-cama-infantil',
      id: '2239',
      name: 'Ropa de cama infantil',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/lamparas-infantiles',
      id: '2240',
      name: 'Iluminicación infantil',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/infantil/organizadores-infantiles',
      id: '2241',
      name: 'Organizadores infantiles',
      parent: '1919',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/cojines',
      id: '2242',
      name: 'Cojines',
      parent: '1924',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/vida-al-aire-libre',
      id: '2243',
      name: 'Vida al aire libre',
      parent: '1484',
      slug: 'vidaalaire',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2244',
      name: 'Marcas',
      parent: '1484',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/archivadores-y-organizadores',
      id: '2245',
      name: 'Archivadores',
      parent: '1930',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/sillas-gamer',
      id: '2247',
      name: 'Sillas Gamer',
      parent: '1930',
      slug: 'Sillas-gamer',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/cojines',
      id: '2248',
      name: 'Cojines',
      parent: '1930',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/cojines',
      id: '2249',
      name: 'Cojines',
      parent: '1931',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/decoracion/alfombras-y-tapetes',
      id: '2250',
      name: 'Alfombras y tapetes',
      parent: '1931',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/decoracion',
      id: '2251',
      name: 'Decoración',
      parent: '1931',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/mesa-vajillas-mugs',
      id: '2252',
      name: 'Vajillas y mugs',
      parent: '1932',
      slug: 'Vajillas-y-mugs',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/mesa/cubiertos',
      id: '2254',
      name: 'Cubiertos',
      parent: '1932',
      slug: 'Cubiertos',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/mesa-vasos-copas-jarras-termo-botellas',
      id: '2255',
      name: 'Vasos, copas y jarras',
      parent: '1932',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/mesa/complementos-de-mesa',
      id: '2256',
      name: 'Complementos de mesa',
      parent: '1932',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina/ollas-a-presion',
      id: '2257',
      name: 'Ollas a presión',
      parent: '1933',
      slug: 'Ollas-a-presion',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/cocina/moldes-y-accesorios-de-reposteria',
      id: '2258',
      name: 'Moldes y accesorios',
      parent: '1933',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/secadores-delantales-y-guantes',
      id: '2259',
      name: 'Secadores y delantales',
      parent: '1933',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/muebles-de-bano',
      id: '2260',
      name: 'Muebles de baño',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/organizadores/organizadores-de-bano',
      id: '2262',
      name: 'Organizadores de baño',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/toallas-y-batas',
      id: '2263',
      name: 'Toallas y batas',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/organizadores/basureras',
      id: '2264',
      name: 'Basureras',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/ropa-hogar/complementos-bano',
      id: '2265',
      name: 'Complementos baño',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/decoracion-velas-portavelas-y-escencias',
      id: '2266',
      name: 'Velas',
      parent: '1935',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/comedores-y-sillas-exterior',
      id: '2268',
      name: 'Comedores y sillas exterior',
      parent: '2243',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles/salas-de-exterior',
      id: '2269',
      name: 'Salas de exterior',
      parent: '2243',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-infantil',
      id: '2272',
      name: 'Espacios infantiles',
      parent: '2291',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-cocina',
      id: '2273',
      name: 'Cocina',
      parent: '2291',
      slug: 'Finlandek-cocina',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-decoracion',
      id: '2275',
      name: 'Decoración',
      parent: '2291',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek-mesa',
      id: '2276',
      name: 'Mesa',
      parent: '2291',
      slug: 'Finlandek-mesa',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2277',
      name: 'Tendencias',
      parent: '1484',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek',
      id: '2278',
      name: 'Finlandek',
      parent: '2244',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles-rta',
      id: '2279',
      name: 'Muebles RTA',
      parent: '2244',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/muebles-inval',
      id: '2280',
      name: 'Muebles INVAL',
      parent: '2244',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2282',
      name: 'Paraiso',
      parent: '2281',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2283',
      name: 'Fantasía',
      parent: '2281',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2284',
      name: 'Spring',
      parent: '2281',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2285',
      name: 'Confort vital',
      parent: '2281',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2286',
      name: 'Romance relax',
      parent: '2281',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/realme?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/celulares&map=category-1,category-2,brand&operator=and',
      id: '2287',
      name: 'Realme',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/10643?map=productClusterIds&pauta=t',
      id: '2288',
      name: 'Oppo',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/celulares/nokia?fuzzy=0&initialMap=c,c&initialQuery=tecnologia/celulares&map=category-1,category-2,brand&operator=and',
      id: '2289',
      name: 'Nokia',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13023?map=productClusterIds',
      id: '2290',
      name: 'Accesorios',
      parent: '2203',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/especia',
      id: '2292',
      name: 'Finlandek by Especia ',
      parent: '2277',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/finlandek/mercedes-salazar',
      id: '2293',
      name: 'Finlandek by Mercedes Salazar',
      parent: '2277',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/338?map=productClusterIds&order=&pauta=t',
      id: '2294',
      name: 'iPhone 13',
      parent: '2199',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13867?map=productClusterIds',
      id: '2295',
      name: 'India',
      parent: '2277',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7820?map=productClusterIds&pauta=t',
      id: '2298',
      name: 'Productos destacados',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14090?map=productClusterIds&order=',
      id: '2299',
      name: 'Televisores',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3634?map=productClusterIds&pauta=t',
      id: '2300',
      name: 'Smartwatch',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14095?map=productClusterIds',
      id: '2301',
      name: 'Neveras y nevecones',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14243?map=productClusterIds',
      id: '2302',
      name: 'Celulares',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14237?map=productClusterIds',
      id: '2303',
      name: 'Lavadoras y secadoras',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14113?map=productClusterIds',
      id: '2304',
      name: 'Computadores',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14236?map=productClusterIds',
      id: '2305',
      name: 'Parlantes y audifonos',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14107?map=productClusterIds',
      id: '2306',
      name: 'Ventiladores y aires',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14239?map=productClusterIds',
      id: '2307',
      name: 'Mundo cocina',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14092?map=productClusterIds',
      id: '2308',
      name: 'Tablets',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14281?map=productClusterIds&order=OrderByTopSaleDESC',
      id: '2309',
      name: 'Juguetería ',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2311',
      name: 'Marroquinería',
      parent: '2380',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14082?map=productClusterIds&pauta=t',
      id: '2312',
      name: 'Morrales',
      parent: '2310',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14083?map=productClusterIds&pauta=t',
      id: '2313',
      name: 'Maletines',
      parent: '2310',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14084?map=productClusterIds&pauta=t',
      id: '2314',
      name: 'Bolsos de mano',
      parent: '2310',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14085?map=productClusterIds&pauta=t',
      id: '2315',
      name: 'Carteras',
      parent: '2310',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/10643?map=productClusterIds&pauta=t',
      id: '2317',
      name: 'Oppo Reno 6 Lite',
      parent: '2199',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14497?map=productClusterIds',
      id: '2318',
      name: 'Instalamos tu TV',
      parent: '22',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '2320',
      name: 'Juguetes',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juguetes/munecas-y-accesorios',
      id: '2321',
      name: 'Muñecas y accesorios',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juguetes/figuras-de-accion',
      id: '2322',
      name: 'Figuras de acción',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juguetes/lego-y-armables',
      id: '2323',
      name: 'Lego y armables',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/pistas?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2324',
      name: 'Pistas',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/carros-y-radiocontrolados?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2325',
      name: 'Carros y radiocontrolados',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/motos?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2326',
      name: 'Motos',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/arte-y-manualidades?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2327',
      name: 'Arte y manualidades',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/coleccionables?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2328',
      name: 'Coleccionables y Fanzone',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-electronicos?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2329',
      name: 'Juegos electrónicos',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-musicales?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2331',
      name: 'Juegos musicales',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2332',
      name: 'Libros infantiles y cuentos',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '2333',
      name: 'Montables',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/carros-y-motos-a-bateria?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2334',
      name: 'Carros y motos a batería',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/triciclos-motos-y-carros-de-pedal?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2335',
      name: 'Triciclos y carros de pedales',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/carros-y-motos-de-impulso?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2336',
      name: 'Carros y motos de impulso',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2600?map=productClusterIds',
      id: '2337',
      name: 'Bicicletas infantiles',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/deportes/patinaje',
      id: '2338',
      name: 'Patines, patinetas y scooter',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/juegos-de-mesa',
      id: '2339',
      name: 'Juegos de mesa',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/cartas?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2340',
      name: 'Cartas',
      parent: '2339',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-familiares?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2342',
      name: 'Juegos familiares',
      parent: '2339',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2343',
      name: 'Rompecabezas',
      parent: '2339',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '2344',
      name: 'Juguetes de exterior',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-hasbro',
      id: '2345',
      name: 'Hasbro',
      parent: '2348',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-disney',
      id: '2346',
      name: 'Disney',
      parent: '2348',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mattel',
      id: '2347',
      name: 'Mattel',
      parent: '2348',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '2348',
      name: 'Tiendas oficiales',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2349',
      name: 'Drones infantiles',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-de-punteria?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2350',
      name: 'Juegos de puntería',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2351',
      name: 'Jardín y carpas',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-de-piscina-e-inflables?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2352',
      name: 'Juegos de piscina e inflables',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-al-aire-libre?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2353',
      name: 'Juegos al aire libre',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juegos-de-playa?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2354',
      name: 'Juegos de playa',
      parent: '2344',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/caminadores',
      id: '2356',
      name: 'Caminadores',
      parent: '2360',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/desarrollo-y-estimulacion?fuzzy=0&initialMap=c&initialQuery=jugueteria&map=category-1,category-3&operator=and',
      id: '2357',
      name: 'Desarrollo y estimulación',
      parent: '2360',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bebes/accesorios-grandes-bebe/gimnasios',
      id: '2358',
      name: 'Gimnasio bebés',
      parent: '2360',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2359',
      name: 'Tapetes de bebé',
      parent: '2360',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '2360',
      name: 'Juguetes de bebé',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/playstation',
      id: '2361',
      name: 'PlayStation',
      parent: '2365',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/xbox',
      id: '2362',
      name: 'Xbox',
      parent: '2365',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/nintendo',
      id: '2363',
      name: 'Nintendo ',
      parent: '2365',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/juguetes',
      id: '2364',
      name: 'Ver todo',
      parent: '2320',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/consolas-y-videojuegos',
      id: '2365',
      name: 'Consolas y videojuegos',
      parent: '1770',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/barbie?_q=barbie&fuzzy=0&initialMap=b&initialQuery=barbie&map=category-1,brand&operator=and',
      id: '2366',
      name: 'Barbie',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: 'jugueteria/disney?_q=disney&fuzzy=0&initialMap=b&initialQuery=disney&map=category-1,brand&operator=and',
      id: '2367',
      name: 'Disney',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: 'jugueteria/fischer%20price?_q=fischer%20price&fuzzy=auto&initialMap=ft&initialQuery=fischer%20price&map=category-1,ft&operator=and',
      id: '2368',
      name: 'Fischer Price',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: 'hot-wheels/mattel?fuzzy=0&initialMap=b&initialQuery=mattel&map=brand,brand&operator=and',
      id: '2369',
      name: 'Hot Wheels',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/nerf',
      id: '2370',
      name: 'Nerf',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: 'jugueteria/paw%20patrol?_q=paw%20patrol&fuzzy=0&initialMap=ft&initialQuery=paw%20patrol&map=category-1,ft&operator=and',
      id: '2371',
      name: 'Paw Patrol',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: 'jugueteria/ronda?_q=ronda&fuzzy=0&initialMap=b&initialQuery=ronda&map=category-1,brand&operator=and',
      id: '2372',
      name: 'Ronda',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/playdoh',
      id: '2373',
      name: 'Play Doh',
      parent: '2355',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/juegos-de-mesa',
      id: '2374',
      name: 'Ver todo',
      parent: '2339',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '2375',
      name: 'Ver todo',
      parent: '2333',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/pijamas',
      id: '2377',
      name: 'Mundo Pijamas',
      parent: '1868',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/13971?map=productClusterIds&order=',
      id: '2379',
      name: 'Rústicos ',
      parent: '2277',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria',
      id: '2381',
      name: 'Juguetería',
      parent: '2476',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navida/todoslosarboles',
      id: '2382',
      name: 'Árboles',
      parent: '2392',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/decoracion-arbol',
      id: '2383',
      name: 'Adornos de árbol',
      parent: '2392',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/pesebres-y-figuras',
      id: '2384',
      name: 'Pesebres',
      parent: '2392',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/complementos-de-mesa/individuales',
      id: '2385',
      name: 'Complementos de mesa',
      parent: '2392',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-mercado',
      id: '2386',
      name: 'Delicias navideñas',
      parent: '2476',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '2387',
      name: 'Juguetes',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/jugueteria/montables',
      id: '2388',
      name: 'Montables',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/juegos-de-mesa',
      id: '2389',
      name: 'Juegos de mesa',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-disney',
      id: '2390',
      name: 'Disney ',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mattel',
      id: '2391',
      name: 'Mattel',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad',
      id: '2392',
      name: 'Decoración ',
      parent: '2476',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/anchetas',
      id: '2393',
      name: 'Anchetas',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/navidad/cenas-navidenas',
      id: '2394',
      name: 'Cenas',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14773?map=productClusterIds',
      id: '2395',
      name: 'Galletas',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/7535?map=productClusterIds',
      id: '2396',
      name: 'Natillas y buñuelos',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/vinos-y-licores',
      id: '2397',
      name: 'Vinos y licores',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2398',
      name: '',
      parent: '2381',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2399',
      name: '',
      parent: '2386',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2400',
      name: '',
      parent: '2392',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14418?map=productClusterIds ',
      id: '2401',
      name: 'Xiaomi 11 lite',
      parent: '2199',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-mercado',
      id: '2403',
      name: 'Hasta 40% en mercado',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14822?map=productClusterIds',
      id: '2404',
      name: 'Hasta 50% aseo hogar',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2405',
      name: '',
      parent: '2409',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/14892?map=productClusterIds',
      id: '2406',
      name: 'Hasta 45% licores',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-bebes-ninos-jugueteria',
      id: '2407',
      name: '',
      parent: '2410',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-colchones',
      id: '2408',
      name: 'Hasta 70% colchones',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2409',
      name: 'Hasta 55% hogar',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2410',
      name: 'Hasta 55% bebés',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '2411',
      name: 'Hasta 60% moda',
      parent: '2487',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/especial-de-navidad',
      id: '2412',
      name: 'Para regalar',
      parent: '2476',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/moda-diciembre',
      id: '2413',
      name: 'Arkitect navidad',
      parent: '2412',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/home-moda-accesorios',
      id: '2414',
      name: 'Ropa ',
      parent: '2412',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/maquillaje',
      id: '2415',
      name: 'Maquillaje',
      parent: '2412',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/accesorios-de-moda/bolsos-maletines-y-carteras',
      id: '2416',
      name: 'Bolsos y carteras',
      parent: '2412',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/relojes',
      id: '2417',
      name: 'Relojes',
      parent: '2412',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '14275?map=productClusterIds',
      id: '2418',
      name: 'Vivo Y53S ',
      parent: '2199',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecno-mobile',
      id: '2419',
      name: 'Tecno',
      parent: '2167',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/cuadernos',
      id: '2421',
      name: 'Cuadernos',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/manualidades',
      id: '2422',
      name: 'Manualidades',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/colores',
      id: '2423',
      name: 'Colores',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/creyones-te',
      id: '2424',
      name: 'Crayones',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/pegantes-te',
      id: '2425',
      name: 'Pegantes',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/pinturas-te',
      id: '2426',
      name: 'Pinturas',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/plastilina-te',
      id: '2427',
      name: 'Plastilina',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/plumones-te',
      id: '2428',
      name: 'Plumones',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/reglas-te',
      id: '2429',
      name: 'Reglas',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tijeras-te',
      id: '2430',
      name: 'Tijeras',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tablas-y-tableros-te',
      id: '2431',
      name: 'Tablas y tableros',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tajalapiz-te',
      id: '2432',
      name: 'Tajalapiz',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2433',
      name: 'Escritura',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/boligrafos',
      id: '2434',
      name: 'Boligrafos',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/borradores-te',
      id: '2435',
      name: 'Borradores',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/correctores-te',
      id: '2436',
      name: 'Correctores',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/lapices-te',
      id: '2437',
      name: 'Lapices',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/marcadores-te',
      id: '2438',
      name: 'Marcadores',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/plumigrafos-te',
      id: '2439',
      name: 'Plumigrafos',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/portalapiz-te',
      id: '2440',
      name: 'Portalapiz',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/portaminas-te',
      id: '2441',
      name: 'Portaminas',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/resaltadores-te',
      id: '2442',
      name: 'Resaltadores',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/vertodo-te',
      id: '2443',
      name: 'Ver todo',
      parent: '2422',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/accesorios-y-repuestos-te',
      id: '2444',
      name: 'Accesorios y repuestos',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/escrivertodo-te',
      id: '2445',
      name: 'Ver todo',
      parent: '2433',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/blocks-y-papeles-te',
      id: '2446',
      name: 'Blocks y papeles',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/resmas-te',
      id: '2447',
      name: 'Resmas',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/cartulinas-te ',
      id: '2448',
      name: 'Cartulinas',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/cartones-te ',
      id: '2449',
      name: 'Cartones',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/contact-te',
      id: '2450',
      name: 'Contact',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/fomi-te',
      id: '2451',
      name: 'Fomi',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/papel-bond-te',
      id: '2452',
      name: 'Papel bond',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/papel-periodico-te',
      id: '2453',
      name: 'Papel periódico',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/resmas-te ',
      id: '2454',
      name: 'Papel silueta',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/blocks-y-papeles-te',
      id: '2455',
      name: 'Ver todo',
      parent: '2446',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios',
      id: '2456',
      name: 'Computadores e impresoras',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/carpetas-te',
      id: '2457',
      name: 'Carpetas',
      parent: '2462',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/folders-te',
      id: '2458',
      name: 'Folders',
      parent: '2462',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/organizadores-te',
      id: '2459',
      name: 'Organizadores',
      parent: '2462',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/sobres-te',
      id: '2460',
      name: 'Sobres',
      parent: '2462',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/oficinaverto-te',
      id: '2461',
      name: 'Ver todo',
      parent: '2462',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/oficinaverto-te',
      id: '2462',
      name: 'Artículos de oficina',
      parent: '4',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-portatiles',
      id: '2464',
      name: 'Computadores portátiles ',
      parent: '2456',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-de-escritorio',
      id: '2465',
      name: 'Computadores de escritorio',
      parent: '2456',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/computadores-all-in-one',
      id: '2466',
      name: 'Computadores all in one',
      parent: '2456',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/computadores-y-accesorios/accesorios-de-computador',
      id: '2467',
      name: 'Accesorios',
      parent: '2456',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/impresion',
      id: '2468',
      name: 'Impresoras',
      parent: '2456',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles/cuadernoargollado ',
      id: '2470',
      name: 'Argollados',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles/cuadernoargolladotapadura',
      id: '2471',
      name: 'Argollados tapa dura',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles/cuadernocosido ',
      id: '2472',
      name: 'Cosidos',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles/cuadernocosidotapadura',
      id: '2473',
      name: 'Cosido tapa dura',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles/cuadernomultimateria ',
      id: '2474',
      name: 'Multimateria',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/libros-y-papeleria/papeleria/cuadernos',
      id: '2475',
      name: 'Ver todo',
      parent: '2421',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/camaras-de-seguridad',
      id: '2483',
      name: 'Cámaras de seguridad',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/lentes',
      id: '2484',
      name: 'Lentes',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/tecnologia/camaras/tarjetas-de-memoria',
      id: '2485',
      name: 'Tarjetas de memoria',
      parent: '1749',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2488',
      name: 'Movilidad Eléctrica ',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/movilidad-electrica',
      id: '2489',
      name: 'Mascotas',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria',
      id: '2490',
      name: 'Jardinería',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria',
      id: '2491',
      name: 'Farmacia',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/servicios/netflix-y-otros-pines',
      id: '2492',
      name: 'Netflix y servicios',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mundo-ecologico',
      id: '2493',
      name: 'Cuida el planeta',
      parent: '2022',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3407?map=productClusterIds',
      id: '2494',
      name: 'Tapabocas',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/dolor',
      id: '2495',
      name: 'Alivia el dolor',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/heridas',
      id: '2496',
      name: 'Heridas',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/gripa-tos',
      id: '2497',
      name: 'Gripa y tos',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/estomago',
      id: '2498',
      name: 'Estomago',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/proteinas-y-suplementos',
      id: '2499',
      name: 'Proteínas y suplementos',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/vitaminas-y-suplementos',
      id: '2500',
      name: 'Vitaminas',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/salud-sexual',
      id: '2501',
      name: 'Salud sexual',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/salud-y-belleza/drogueria/piel',
      id: '2502',
      name: 'Piel',
      parent: '2491',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/alimentos',
      id: '2503',
      name: 'Alimentos',
      parent: '2489',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/accesorios-mascotas',
      id: '2504',
      name: 'Accesorios',
      parent: '2489',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/mercado/mascotas/belleza-e-higiene',
      id: '2505',
      name: 'Salud y belleza',
      parent: '2489',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/1733?map=productClusterIds&order',
      id: '2506',
      name: 'Patinetas eléctricas',
      parent: '2488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/2609?map=productClusterIds',
      id: '2507',
      name: 'Bicicletas eléctricas',
      parent: '2488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/bicicletas',
      id: '2508',
      name: 'Bicicletas',
      parent: '2488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/3581?map=productClusterIds',
      id: '2509',
      name: 'Accesorios de protección',
      parent: '2488',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/herramientas-de-jardineria',
      id: '2514',
      name: 'Herramientas para jardín',
      parent: '2490',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/accesorios-riego',
      id: '2515',
      name: 'Accesorios de riego',
      parent: '2490',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/insumos-de-jardineria',
      id: '2516',
      name: 'Insumos de jardinería',
      parent: '2490',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/ferreteria/jardineria/materas',
      id: '2517',
      name: 'Materas',
      parent: '2490',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2518',
      name: 'Nuestros eventos',
      parent: '2',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/utiles-escolares',
      id: '2520',
      name: 'Temporada escolar',
      parent: '2518',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/moda-y-accesorios/cont-textil-sostenible',
      id: '2521',
      name: 'Moda consciente',
      parent: '2518',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '',
      id: '2522',
      name: 'Nuevos Lanzamientos',
      parent: '2',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/hogar/experiencia-3d',
      id: '2525',
      name: 'Hogar 3D',
      parent: '2522',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    },
    {
      href: '/infaltablesfinlandek/infaltables',
      id: '2526',
      name: 'Infaltables Finlandek',
      parent: '2522',
      slug: '',
      icon: '',
      styles: null,
      showIconLeft: false
    }
  ]
};
