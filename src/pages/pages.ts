export interface itemData {
    key: string;
    text: string;
    image: {url : string};
}

export const onboardingData : itemData[] = [
    { key: '1', text: 'Bienvenido al juego de los tamagotchis cabrones', image:  {url : 'https://tiendafrikionline.com/wp-content/uploads/2023/05/tamagotchi-grogu.jpg' }  },
    { key: '2', text: 'Vas a competir por tu supervivencia contra otros 3 jugadores', image:  {url : 'https://64jaques.com/1289-large_default/tablero-de-ajedrez-serie-colors-modelo-navy.jpg' }  },
    { key: '3', text: 'Gana el último que quede en pie', image:  {url : 'https://cdn.eldeforma.com/wp-content/uploads/2019/07/7-24.jpg' }  },
    { key: '4', text: '¡Empecemos!', image:  {url : 'https://img.asmedia.epimg.net/resizer/v2/O33WLQOPJBOVNJ7W7ALHEVHCG4.jpg?auth=19068d0af2cc62f501256f3ab5e766bb76dca023ed08191f1614b12c56a8de83&width=736&height=414&smart=true' }  },
];