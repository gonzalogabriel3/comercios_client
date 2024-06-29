const data1 = [
    {
        id: 1,
        nombre: 'Almacen Nuevo Solar',
        direccion: 'Av. La Plata',
        latitud: '-43.24302469361956',
        longitud: '-65.30782214896024',
        rubros: [1, 3],
        ciudad_id: 1
    },
    {
        id: 2,
        nombre: 'Supermercado El Buen Precio',
        direccion: 'Calle Principal',
        latitud: '-43.25146066934282',
        longitud: '-65.29997385857696',
        rubros: [2, 5],
        ciudad_id: 1
    },
    {
        id: 3,
        nombre: 'Verdulería La Esquina Verde',
        direccion: 'Calle 1',
        latitud: '-43.25636790557277',
        longitud: '-65.31761206536694',
        rubros: [1, 4],
        ciudad_id: 1
    },
    {
        id: 4,
        nombre: 'Carnicería Don Juan',
        direccion: 'Calle 2',
        latitud: '-43.244458577767155',
        longitud: '-65.31572379013062',
        rubros: [3, 6, 1, 2],
        ciudad_id: 1
    },
    {
        id: 5,
        nombre: 'Panadería La Dulzura',
        direccion: 'Calle 3',
        latitud: '-43.24695941715885',
        longitud: '-65.31950034051549',
        rubros: [2, 4, 1],
        ciudad_id: 1
    },
    {
        id: 6,
        nombre: 'Fiambrería Los Quesos',
        direccion: 'Calle 4',
        latitud: '-43.253867452471944',
        longitud: '-65.29988802807638',
        rubros: [1, 5, 2],
        ciudad_id: 1
    },
    {
        id: 7,
        nombre: 'Mini Market',
        direccion: 'Calle 5',
        latitud: '-43.2600558865989',
        longitud: '-65.29739893823596',
        rubros: [2, 6, 4],
        ciudad_id: 1
    },
    {
        id: 8,
        nombre: 'Farmacia Salud',
        direccion: 'Calle 6',
        latitud: '-43.265243685051864',
        longitud: '-65.30945814994182',
        rubros: [1, 4],
        ciudad_id: 1
    },
    {
        id: 9,
        nombre: 'Kiosko El Rápido',
        direccion: 'Calle 7',
        latitud: '-43.26764992341982',
        longitud: '-65.32816924013305',
        rubros: [3, 5],
        ciudad_id: 1
    },
    {
        id: 10,
        nombre: 'Mercado Central',
        direccion: 'Calle 8',
        latitud: '-43.25009895132784',
        longitud: '-65.29832710933356',
        rubros: [2, 6, 1],
        ciudad_id: 1
    },
    {
        id: 11,
        nombre: 'Despensa Los Vecinos',
        direccion: 'Calle 9',
        latitud: '-43.251583699651924',
        longitud: '-65.27931561184386',
        rubros: [1, 3],
        ciudad_id: 1
    },
    {
        id: 12,
        nombre: 'Almacén Familiar',
        direccion: 'Calle 10',
        latitud: '-43.257350431323964',
        longitud: '-65.27903666207237',
        rubros: [2, 5, 4],
        ciudad_id: 1
    },
    {
        id: 13,
        nombre: 'Tienda La Moderna',
        direccion: 'Calle 11',
        latitud: '-43.26988864344005',
        longitud: '-65.27730844182926',
        rubros: [1, 4],
        ciudad_id: 1
    },
    {
        id: 14,
        nombre: 'Supermercado Todo',
        direccion: 'Calle 12',
        latitud: '-43.27602858177543',
        longitud: '-65.2884449736596',
        rubros: [2, 6],
        ciudad_id: 1
    },
    {
        id: 15,
        nombre: 'Verdulería Los Frescos',
        direccion: 'Calle 13',
        latitud: '-43.24886827663445',
        longitud: '-65.3030307575229',
        rubros: [3, 5],
        ciudad_id: 1
    },
    {
        id: 16,
        nombre: 'Carnicería El Buen Corte',
        direccion: 'Calle 14',
        latitud: '-43.2467121887034',
        longitud: '-65.32579247186585',
        rubros: [1, 6, 2],
        ciudad_id: 1
    },
    {
        id: 17,
        nombre: 'Panadería La Estrella',
        direccion: 'Calle 15',
        latitud: '-43.25176772283087',
        longitud: '-65.33354982742667',
        rubros: [2, 4],
        ciudad_id: 1
    },
    {
        id: 18,
        nombre: 'Fiambrería La Mejor',
        direccion: 'Calle 16',
        latitud: '-43.25191640865873',
        longitud: '-65.31619784788272',
        rubros: [1, 5],
        ciudad_id: 1
    },
    {
        id: 19,
        nombre: 'Mini Market 2',
        direccion: 'Calle 17',
        latitud: '-43.266931807706165',
        longitud: '-65.294456838574',
        rubros: [2, 6, 3],
        ciudad_id: 1
    },
    {
        id: 20,
        nombre: 'Farmacia Central',
        direccion: 'Calle 18',
        latitud: '-43.26689490347908',
        longitud: '-65.311860052481',
        rubros: [1, 4],
        ciudad_id: 1
    }
];



const data2 = [
    {
        id: 21,
        nombre: 'Almacen Don Pepe',
        direccion: 'Av. San Martín',
        latitud: '-43.29731834010321',
        longitud: '-65.10136626208472',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 22,
        nombre: 'Supermercado La Esperanza',
        direccion: 'Calle Rivadavia',
        latitud: '-43.29730621423331',
        longitud: '-65.09021035183773',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 23,
        nombre: 'Verdulería El Bosque',
        direccion: 'Calle Moreno',
        latitud: '-43.30280315004156',
        longitud: '-65.1015829183376',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 24,
        nombre: 'Carnicería El Gaucho',
        direccion: 'Calle Mitre',
        latitud: '-43.302240986241436',
        longitud: '-65.08763543112077',
        rubros: [2, 4],
        ciudad_id: 2
    },
    {
        id: 25,
        nombre: 'Panadería Santa Ana',
        direccion: 'Calle Sarmiento',
        latitud: '-43.2979308910779',
        longitud: '-65.0856184098925',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 26,
        nombre: 'Fiambrería El Buen Gusto',
        direccion: 'Calle Belgrano',
        latitud: '-43.295057324559274',
        longitud: '-65.08664837817929',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 27,
        nombre: 'Mini Market El Águila',
        direccion: 'Calle Güemes',
        latitud: '-43.293870376913354',
        longitud: '-65.11226883885658',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 28,
        nombre: 'Farmacia Del Pueblo',
        direccion: 'Calle Lavalle',
        latitud: '-43.28824767896518',
        longitud: '-65.11896363275095',
        rubros: [2, 4],
        ciudad_id: 2
    },
    {
        id: 29,
        nombre: 'Kiosko El Rápido',
        direccion: 'Calle Moreno',
        latitud: '-43.286248372240834',
        longitud: '-65.11364212993593',
        rubros: [1, 3, 5, 6],
        ciudad_id: 2
    },
    {
        id: 30,
        nombre: 'Mercado La Familia',
        direccion: 'Calle San Juan',
        latitud: '-43.28971587802799',
        longitud: '-65.11274090774971',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 31,
        nombre: 'Despensa El Progreso',
        direccion: 'Calle Chubut',
        latitud: '-43.312515144694785',
        longitud: '-65.100903795983',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 32,
        nombre: 'Almacén San José',
        direccion: 'Calle 25 de Mayo',
        latitud: '-43.31570013250492',
        longitud: '-65.09712724573599',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 33,
        nombre: 'Tienda La Moda',
        direccion: 'Calle 9 de Julio',
        latitud: '-43.30420841090813',
        longitud: '-65.08725671636802',
        rubros: [1, 3, 5],
        ciudad_id: 2
    },
    {
        id: 34,
        nombre: 'Supermercado El Sol',
        direccion: 'Calle Mendoza',
        latitud: '-43.29780583028077',
        longitud: '-65.07532625084318',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 35,
        nombre: 'Verdulería El Amanecer',
        direccion: 'Calle Tierra del Fuego',
        latitud: '-43.28543600910824',
        longitud: '-65.08751420857864',
        rubros: [1, 3, 5, 6],
        ciudad_id: 2
    },
    {
        id: 36,
        nombre: 'Carnicería Los Pinos',
        direccion: 'Calle Pueyrredón',
        latitud: '-43.2978154510001',
        longitud: '-65.090587476234',
        rubros: [2, 4, 5],
        ciudad_id: 2
    },
    {
        id: 37,
        nombre: 'Panadería La Favorita',
        direccion: 'Calle Italia',
        latitud: '-43.2977841230034',
        longitud: '-65.095634517829',
        rubros: [1, 3, 6],
        ciudad_id: 2
    },
    {
        id: 38,
        nombre: 'Fiambrería La Delicia',
        direccion: 'Calle España',
        latitud: '-43.3028234411121',
        longitud: '-65.098723415792',
        rubros: [2, 4, 6],
        ciudad_id: 2
    },
    {
        id: 39,
        nombre: 'Mini Market Los Amigos',
        direccion: 'Calle Maipú',
        latitud: '-43.2978773280035',
        longitud: '-65.093683411823',
        rubros: [1, 3, 5, 6],
        ciudad_id: 2
    },
    
];


const data3 = [
    {
        id: 41,
        nombre: 'Almacen El Valle',
        direccion: 'Calle Sarmiento',
        latitud: '-43.28952355529409',
        longitud: '-65.49028082239047',
        rubros: [1, 3, 5],
        ciudad_id: 3
    },
    {
        id: 42,
        nombre: 'Supermercado El Molino',
        direccion: 'Calle 28 de Julio',
        latitud: '-43.28746178134407',
        longitud: '-65.48448832333685',
        rubros: [2, 4, 6],
        ciudad_id: 3
    },
    {
        id: 43,
        nombre: 'Verdulería La Huerta',
        direccion: 'Calle Alvear',
        latitud: '-43.2908794586599',
        longitud: '-65.49768093114105',
        rubros: [3, 5, 1],
        ciudad_id: 3
    },
    {
        id: 44,
        nombre: 'Carnicería La Estancia',
        direccion: 'Calle Brown',
        latitud: '-43.29567131319695',
        longitud: '-65.4964305679092',
        rubros: [1, 6, 4],
        ciudad_id: 3
    },
    {
        id: 45,
        nombre: 'Panadería El Trigal',
        direccion: 'Calle Roca',
        latitud: '-43.29602418682211',
        longitud: '-65.50245272536728',
        rubros: [2, 3, 5],
        ciudad_id: 3
    },
    {
        id: 46,
        nombre: 'Fiambrería Los Sauces',
        direccion: 'Calle Libertad',
        latitud: '-43.29919995692882',
        longitud: '-65.4978850719285',
        rubros: [3, 4, 6],
        ciudad_id: 3
    },
    {
        id: 47,
        nombre: 'Mini Market El Trebol',
        direccion: 'Calle Belgrano',
        latitud: '-43.29968280810759',
        longitud: '-65.4907401393111',
        rubros: [1, 5, 2],
        ciudad_id: 3
    },
    {
        id: 48,
        nombre: 'Farmacia Del Pueblo',
        direccion: 'Calle Moreno',
        latitud: '-43.30029565206301',
        longitud: '-65.4913780797355',
        rubros: [2, 6, 3],
        ciudad_id: 3
    },
    {
        id: 49,
        nombre: 'Kiosko El Rápido',
        direccion: 'Calle Lavalle',
        latitud: '-43.30367234771144',
        longitud: '-65.48865378161294',
        rubros: [3, 1, 4],
        ciudad_id: 3
    },
    {
        id: 50,
        nombre: 'Mercado La Familia',
        direccion: 'Calle San Juan',
        latitud: '-43.30151820069051',
        longitud: '-65.48536200902298',
        rubros: [1, 4, 6],
        ciudad_id: 3
    },
    {
        id: 51,
        nombre: 'Despensa El Progreso',
        direccion: 'Calle Chubut',
        latitud: '-43.28593550248122',
        longitud: '-65.49490559766096',
        rubros: [2, 5, 3],
        ciudad_id: 3
    },
    {
        id: 52,
        nombre: 'Almacén San José',
        direccion: 'Calle 25 de Mayo',
        latitud: '-43.283874760998486',
        longitud: '-65.51024168504658',
        rubros: [3, 6, 1],
        ciudad_id: 3
    },
    {
        id: 53,
        nombre: 'Tienda La Moda',
        direccion: 'Calle 9 de Julio',
        latitud: '-43.29452460207307',
        longitud: '-65.50514512358899',
        rubros: [1, 2, 4],
        ciudad_id: 3
    },
    {
        id: 54,
        nombre: 'Supermercado El Sol',
        direccion: 'Calle Mendoza',
        latitud: '-43.296994720736684',
        longitud: '-65.50440511269669',
        rubros: [3, 4, 5],
        ciudad_id: 3
    },
    {
        id: 55,
        nombre: 'Verdulería El Amanecer',
        direccion: 'Calle Tierra del Fuego',
        latitud: '-43.294728901411894',
        longitud: '-65.49437668962426',
        rubros: [1, 5, 6],
        ciudad_id: 3
    },
    {
        id: 56,
        nombre: 'Carnicería La Esperanza',
        direccion: 'Calle Salta',
        latitud: '-43.29875902989834',
        longitud: '-65.49608636994363',
        rubros: [2, 6, 4],
        ciudad_id: 3
    },
    {
        id: 57,
        nombre: 'Panadería Delicias',
        direccion: 'Calle Tucumán',
        latitud: '-43.291998662621715',
        longitud: '-65.49705603929678',
        rubros: [3, 1, 2],
        ciudad_id: 3
    },
    {
        id: 58,
        nombre: 'Fiambrería Los Sabores',
        direccion: 'Calle Santa Fe',
        latitud: '-43.28152232352165',
        longitud: '-65.51091210493942',
        rubros: [1, 4, 6],
        ciudad_id: 3
    },
    {
        id: 59,
        nombre: 'Mini Market 2',
        direccion: 'Calle La Pampa',
        latitud: '-43.28436448749283',
        longitud: '-65.51882256589168',
        rubros: [2, 5, 3],
        ciudad_id: 3
    },
    {
        id: 60,
        nombre: 'Farmacia Central',
        direccion: 'Calle Buenos Aires',
        latitud: '-43.29598773203135',
        longitud: '-65.49387611200003',
        rubros: [3, 6, 2],
        ciudad_id: 3
    }
];


const data4 = [
    {
        id: 61,
        nombre: 'Almacen Los Andes',
        direccion: 'Calle Mitre',
        latitud: '-42.761835251759734',
        longitud: '-65.03742199102096',
        rubros: [1, 2, 3],
        ciudad_id: 4
    },
    {
        id: 62,
        nombre: 'Supermercado Patagonia',
        direccion: 'Calle 9 de Julio',
        latitud: '-42.75808822219226',
        longitud: '-65.04579176938921',
        rubros: [2, 3, 4, 5],
        ciudad_id: 4
    },
    {
        id: 63,
        nombre: 'Verdulería El Bosque',
        direccion: 'Calle Roca',
        latitud: '-42.75861281997296',
        longitud: '-65.05844850740951',
        rubros: [1, 2, 3, 4, 5],
        ciudad_id: 4
    },
    {
        id: 64,
        nombre: 'Carnicería El Campo',
        direccion: 'Calle Sarmiento',
        latitud: '-42.77127676124623',
        longitud: '-65.05058908138078',
        rubros: [3, 4, 5, 6],
        ciudad_id: 4
    },
    {
        id: 65,
        nombre: 'Panadería Los Pinos',
        direccion: 'Calle Belgrano',
        latitud: '-42.7734496033627',
        longitud: '-65.05048701091287',
        rubros: [1, 2, 4, 5],
        ciudad_id: 4
    },
    {
        id: 66,
        nombre: 'Fiambrería Los Robles',
        direccion: 'Calle Moreno',
        latitud: '-42.7817705985228',
        longitud: '-65.06266197055108',
        rubros: [1, 2, 3, 6],
        ciudad_id: 4
    },
    {
        id: 67,
        nombre: 'Mini Market La Estación',
        direccion: 'Calle San Martín',
        latitud: '-42.781896588573204',
        longitud: '-65.03794273166835',
        rubros: [2, 3, 5, 6],
        ciudad_id: 4
    },
    {
        id: 68,
        nombre: 'Farmacia Los Cipreses',
        direccion: 'Calle Estrada',
        latitud: '-42.78536121448913',
        longitud: '-64.99797319521163',
        rubros: [3, 4, 5],
        ciudad_id: 4
    },
    {
        id: 69,
        nombre: 'Kiosko La Rápida',
        direccion: 'Calle Pellegrini',
        latitud: '-42.809005052561844',
        longitud: '-65.04189385242782',
        rubros: [2, 4, 5, 6],
        ciudad_id: 4
    },
    {
        id: 70,
        nombre: 'Mercado Los Olivos',
        direccion: 'Calle Tucumán',
        latitud: '-42.81589374375177',
        longitud: '-65.03066610106252',
        rubros: [1, 3, 4, 6],
        ciudad_id: 4
    },
    {
        id: 71,
        nombre: 'Despensa La Amistad',
        direccion: 'Calle Chubut',
        latitud: '-42.78586241938673',
        longitud: '-65.07629159897445',
        rubros: [2, 3, 5],
        ciudad_id: 4
    },
    {
        id: 72,
        nombre: 'Almacén El Buen Gusto',
        direccion: 'Calle La Pampa',
        latitud: '-42.75993839009059',
        longitud: '-65.06026653639992',
        rubros: [1, 4, 5, 6],
        ciudad_id: 4
    },
    {
        id: 73,
        nombre: 'Tienda El Faro',
        direccion: 'Calle Tierra del Fuego',
        latitud: '-42.78078191714177',
        longitud: '-65.03217589440824',
        rubros: [1, 3, 4, 5, 6],
        ciudad_id: 4
    },
    {
        id: 74,
        nombre: 'Supermercado El Marino',
        direccion: 'Calle Río Negro',
        latitud: '-42.78117096805965',
        longitud: '-65.03768645867842',
        rubros: [2, 4, 6],
        ciudad_id: 4
    },
    {
        id: 75,
        nombre: 'Verdulería La Cosecha',
        direccion: 'Calle Jujuy',
        latitud: '-42.78329449452772',
        longitud: '-65.04196018280341',
        rubros: [1, 2, 3, 4],
        ciudad_id: 4
    },
    {
        id: 76,
        nombre: 'Carnicería El Puente',
        direccion: 'Calle Misiones',
        latitud: '-42.78400772371735',
        longitud: '-65.05166716867937',
        rubros: [3, 4, 5, 6],
        ciudad_id: 4
    },
    {
        id: 77,
        nombre: 'Panadería La Dulce',
        direccion: 'Calle Santa Fe',
        latitud: '-42.77644513126454',
        longitud: '-65.06159127960565',
        rubros: [1, 3, 4, 5],
        ciudad_id: 4
    },
    {
        id: 78,
        nombre: 'Fiambrería Los Prados',
        direccion: 'Calle Buenos Aires',
        latitud: '-42.789289090308905',
        longitud: '-65.06742647134317',
        rubros: [2, 3, 5],
        ciudad_id: 4
    },
    {
        id: 79,
        nombre: 'Mini Market La Ruta',
        direccion: 'Calle Mendoza',
        latitud: '-42.79513391595338',
        longitud: '-65.06808240474749',
        rubros: [1, 2, 4, 6],
        ciudad_id: 4
    },
    {
        id: 80,
        nombre: 'Farmacia Central',
        direccion: 'Calle San Juan',
        latitud: '-42.78068626452777',
        longitud: '-65.07187564550495',
        rubros: [3, 4, 5, 6],
        ciudad_id: 4
    }
];


const data = [...data1,...data2,...data3,...data4]

const rubros = [
    {
        id:1,
        descripcion:"Alimentos"
    },
    {
        id:2,
        descripcion:"Carniceria"
    },
    {
        id:3,
        descripcion:"Verduleria"
    },
    {
        id:4,
        descripcion:"Farmacia"
    },
    {
        id:5,
        descripcion:"Panaderia"
    },
    {
        id:6,
        descripcion:"Fiambreria"
    }

]

export {data,rubros};