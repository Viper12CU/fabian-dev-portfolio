interface lenguaje {
    title: string;
    img: string;
    description: string;
}

const LenguajesInfo: lenguaje[] = [
    {
        title: "HTML",
        img: "https://img.icons8.com/fluency/240/html-5.png",
        description: `La base fundamental de cualquier proyecto web. Aunque no es un lenguaje de programación,  
        lo uso diariamente para estructurar contenido de manera semántica y accesible.  
        Dominarlo es esencial para construir aplicaciones bien organizadas.`,  
    },  
    {
        title: "CSS",
        img: "https://img.icons8.com/fluency/240/css3.png",
        description: `La herramienta clave para el diseño frontend. Con CSS logro interfaces responsivas,  
        mantenibles y visualmente coherentes. Aprendí que un buen CSS no solo es estética,  
        sino también rendimiento y escalabilidad.`,  
    },  
    {
        title: "JavaScript",
        img: "https://img.icons8.com/fluency/240/javascript.png",
        description: `El núcleo de la interactividad en la web. Lo uso para manipular el DOM,  
        gestionar estados y consumir APIs. Su flexibilidad me permite desarrollar desde  
        scripts simples hasta aplicaciones complejas con frameworks modernos.`,  
    },  
    {
        title: "TypeScript",
        img: "https://img.icons8.com/fluency/240/typescript--v1.png",
        description: `Mi elección para proyectos serios. TypeScript añade tipado estático a JavaScript,  
        reduciendo errores y mejorando el autocompletado. Lo adopté para escribir código más  
        predecible y fácil de mantener a largo plazo.`,  
    },  

        
];


interface tecno{
    title: string;
    img: string;
    // description: string;
    rating: number;
}


const TecnologysInfo : tecno[] = [
        {
            title: "React.Js",
            img: "https://img.icons8.com/officexs/100/react.png",
            rating: 5
        },
        {
            title: "Next Js",
            img: "/nextjs-icon.png",
            rating: 5
        },
        {
            title: "React Native",
            img: "https://img.icons8.com/officexs/100/react.png",
            rating: 5
        },
        {
            title: "Flutter",
            img: "https://img.icons8.com/color/240/flutter.png",
            rating: 5
        },
        {
            title: "Tailwind CSS",
            img: "https://img.icons8.com/color/240/tailwindcss.png",
            rating: 5
        },
        {
            title: "Material UI",
            img: "https://img.icons8.com/color/240/material-ui.png",
            rating: 5
        },
        {
            title: "Git",
            img: "https://img.icons8.com/color/240/git.png",
            rating: 5
        },
        {
            title: "GitHub",
            img: "https://img.icons8.com/fluency/240/github.png",
            rating: 5
        },
        {
            title: "Figma",
            img: "https://img.icons8.com/fluency/240/figma.png",
            rating: 5
        },


];


export {LenguajesInfo, TecnologysInfo};