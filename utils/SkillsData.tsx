import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import ZoomInMapRoundedIcon from '@mui/icons-material/ZoomInMapRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import { ReactNode } from 'react';

interface item {
    title: string;
    data: string;
    icon: ReactNode;
}


const skillData: item[] = [
    {
        title: "Dominio de lenguajes básicos",
        data: `Como desarrollador frontend, tengo un dominio sólido de HTML, CSS y JavaScript, 
        que son la base de cualquier proyecto web. Estas herramientas me permiten crear
         experiencias de usuario fluidas y atractivas.`,
        icon: <CodeRoundedIcon fontSize="large"/>,
    },
    {
        title: "Experiencia con frameworks y librerías",
        data: `He trabajado con frameworks como React, Next Js y Flutter, que me permiten 
        desarrollar aplicaciones modernas y eficientes. Siempre elijo 
        la herramienta más adecuada para cada proyecto.`,
        icon: <LibraryBooksRoundedIcon fontSize="large"/>,

    },
    {
        title: "Manejo de herramientas de control de versiones",
        data: `Uso Git diariamente para gestionar cambios en el código y colaborar con otros 
        desarrolladores. Plataformas como GitHub me permiten trabajar en equipo de 
        manera efectiva, revisar código y mantener un historial claro de los avances del proyecto.`,
        icon: <GitHubIcon fontSize="large"/>,
    },
    {
        title: "Diseño responsive",
        data: `Me aseguro de que las interfaces que desarrollo se vean y funcionen bien en 
        cualquier dispositivo, ya sea un teléfono, tableta o computadora. Utilizo técnicas 
        como media queries y diseños flexibles para garantizar una experiencia de usuario 
        consistente y agradable.`,
        icon: <DevicesRoundedIcon fontSize="large"/>,

    },
    {
        title: "Consumo de APIs",
        data: `Tengo experiencia en consumir APIs RESTful y GraphQL para integrar datos dinámicos 
        en las aplicaciones. Esto me permite conectar el frontend con el backend y mostrar 
        información actualizada en tiempo real, mejorando la funcionalidad de las aplicaciones.`,
        icon: <ApiRoundedIcon fontSize='large'/>
    },
    {
        title: "Optimización de rendimiento",
        data: `Me enfoco en crear aplicaciones rápidas y eficientes. Uso técnicas como 
        la minimización de recursos, lazy loading y caching para garantizar que las 
        aplicaciones carguen rápidamente y funcionen sin problemas, incluso en conexiones 
        lentas.`,
        icon: <SpeedRoundedIcon fontSize="large"/>
       

    },
    {
        title: "Colaboración con diseñadores",
        data: `Trabajo estrechamente con diseñadores para implementar interfaces fieles a 
        los diseños proporcionados. Utilizo herramientas como Figma para entender 
        los diseños y asegurarme de que cada detalle se implemente correctamente.`,
        icon: <PaletteRoundedIcon fontSize="large"/>,
    },
    {
        title: "Atención al detalle",
        data: `Soy meticuloso en la implementación de diseños y estilos. Me aseguro de que 
        cada elemento esté alineado, cada color sea el correcto y cada interacción funcione 
        como se espera. Esto garantiza que el producto final sea de alta calidad.`,
        icon: <ZoomInMapRoundedIcon fontSize="large"/>,
    },
    {
        title: "Principios de diseño UX/UI",
        data: `Entiendo la importancia de crear interfaces intuitivas y atractivas. Siempre 
        me enfoco en la experiencia del usuario, asegurándome de que las aplicaciones sean 
        fáciles de usar y visualmente agradables.`,
        icon: <DesignServicesRoundedIcon fontSize="large"/>,
    },
    {
        title: "Trabajo en equipo",
        data: `Disfruto colaborar con otros desarrolladores, diseñadores y equipos de backend. 
        Me aseguro de que mi trabajo se integre perfectamente con el de los demás, y 
        siempre estoy dispuesto a ayudar y recibir feedback para mejorar.`,
        icon: <Groups2RoundedIcon fontSize="large"/>,
    },
    {
        title: "Aprendizaje continuo",
        data: `El desarrollo frontend es un campo en constante evolución, y siempre estoy 
        aprendiendo cosas nuevas. Ya sea un nuevo framework, una herramienta o una mejor 
        práctica, me mantengo actualizado para ofrecer soluciones modernas y efectivas.`,
        icon: <SchoolRoundedIcon fontSize="large"/>,
    },
    {
        title: "Adaptabilidad",
        data: `Me adapto fácilmente a nuevos entornos, tecnologías y metodologías. Esto me 
        permite trabajar en diferentes tipos de proyectos y enfrentar cambios inesperados 
        con confianza y flexibilidad.`,
        icon: <CachedRoundedIcon fontSize="large"/>,
    },
    {
        title: "Gestión del tiempo",
        data: `Organizo mi trabajo de manera eficiente para cumplir con los plazos. Priorizo 
        tareas, establezco metas realistas y me aseguro de que cada aspecto del proyecto avance 
        según lo planeado.`,
        icon: <ScheduleRoundedIcon fontSize="large"/>,
    },


    /** 
     * !IPORTANTE: mas data
     *  { 
        title: "Portafolio y experiencia",
        data: `Mi portafolio refleja mi experiencia y habilidades. Cada proyecto que he 
        completado demuestra mi capacidad para resolver problemas, crear interfaces atractivas 
        y entregar resultados de alta calidad.`,
    },
    {
 
        title: "Contribuciones a código abierto",
        data: `Participo en proyectos open source porque me apasiona compartir conocimiento y 
        colaborar con la comunidad. Esto no solo mejora mis habilidades, sino que también me 
        permite contribuir al crecimiento de la industria.`,
    },

    { MAs data
        title: "Proactividad",
        data: `No espero a que me den instrucciones; siempre estoy buscando formas de mejorar 
        el proyecto. Identifico oportunidades, propongo soluciones y tomo la iniciativa para 
        resolver problemas antes de que se conviertan en obstáculos.`,
    },


    {
        title: "Ética profesional",
        data: `Soy una persona responsable y comprometida con mi trabajo. Cumplo con mis 
        responsabilidades, actúo con integridad y siempre doy lo mejor de mí en cada proyecto.`,
    },
    {
        title: "Pruebas prácticas",
        data: `Disfruto resolver desafíos técnicos porque me permiten demostrar mis 
        habilidades en un entorno real. Me enfoco en escribir código limpio, eficiente y 
        bien estructurado.`,
    },
    {
        title: "Revisión de código",
        data: `Reviso mi código y el de mis compañeros para asegurarme de que siga las 
        mejores prácticas. Esto mejora la calidad del proyecto y facilita el trabajo en equipo.`,
    },
    {
        title: "Empatía",
        data: `Siempre pienso en el usuario final cuando desarrollo una aplicación. Me 
        esfuerzo por crear interfaces intuitivas y agradables que resuelvan sus necesidades 
        y mejoren su experiencia.`,
    },
    {
        title: "Creatividad",
        data: `Me gusta pensar fuera de la caja y encontrar soluciones innovadoras. 
        La creatividad me permite diseñar interfaces únicas y resolver problemas de manera efectiva.`,
    },
    {
        title: "Pensamiento crítico",
        data: `Analizo los problemas desde diferentes perspectivas y evalúo todas las 
        opciones antes de tomar una decisión. Esto me permite resolver desafíos complejos 
        y mejorar continuamente.`,
    } 
     * 
     */



   
];

export { skillData};


