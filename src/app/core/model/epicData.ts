export interface Hero {
    id:number,
    universe: string;
    name: string;
    description: string;
    urlImg: string;
    votes: Votes;
  }
  
  export interface Votes {
    like: number;
    notLike: number;
  }

  export  const heroes: Hero[] = [
    {
      id:1,
      universe: 'marvel',
      name: 'Ironman',
      description: 'Iron Man es un superhéroe de Marvel, genio multimillonario que usa un traje de alta tecnología para luchar contra el crimen como Tony Stark.',
      urlImg: '',
      votes: {
        like: 0,
        notLike: 0
      }
    },
    {
      id:2,
      universe: 'DC',
      name: 'Batman',
      description: 'Batman es un héroe de DC, multimillonario Bruce Wayne, que combate el crimen en Gotham usando su intelecto, habilidades de combate y tecnología avanzada',
      urlImg: '',
      votes: {
        like: 0,
        notLike: 0
      }
    },
    {
      id:3,
      universe: 'marvel',
      name: 'Spiderman',
      description: 'Spider-Man, de Marvel, es Peter Parker, un joven con poderes arácnidos que usa para proteger Nueva York mientras equilibra su vida personal y heroica',
      urlImg: '',
      votes: {
        like: 0,
        notLike: 0
      }
    },
    {
      id:4,
      universe: 'marvel',
      name: 'Deadpool',
      description: 'Deadpool es un antihéroe de Marvel, conocido por su humor irreverente, habilidad para romper la cuarta pared y su factor de curación. Wade Wilson, ex mercenario con habilidades mejoradas por un experimento fallido.',
      urlImg: '',
      votes: {
        like: 0,
        notLike: 0
      }
    },
    {
      id:5,
      universe: 'DC',
      name: 'Flash',
      description: 'Flash es un superhéroe de DC con la capacidad de moverse a velocidades increíbles, gracias a la Fuerza de la Velocidad. Barry Allen, científico forense, obtuvo sus poderes tras un accidente en su laboratorio, lo que lo convirtió en el hombre más rápido del mundo.',
      urlImg: '',
      votes: {
        like: 0,
        notLike: 0
      }
    }
  ];