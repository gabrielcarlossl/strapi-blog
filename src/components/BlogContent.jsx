import React from 'react'
import { useParams } from 'react-router-dom'

const BlogContent = () => {

    const { blogTitle } = useParams()
    const formattedBlogTitle = blogTitle.replace(/-/g, ' ');

    const arrayOfBlogs = [
        {
            "id": 1,
            "blogImg": "../../strapi/public/uploads/react_fe04941c3a.svg",
            "blogTitle": "Front End With React",
            "blogDescription": "What is react?",
            "blogContent": "React é uma biblioteca JavaScript de código aberto utilizada para a construção de interfaces de usuário interativas. Desenvolvida pelo Facebook, o React permite que os desenvolvedores criem componentes reutilizáveis que gerenciam seu próprio estado e renderizam de forma eficiente quando ocorrem mudanças nesse estado.\n\nO React utiliza um conceito chamado de \"Virtual DOM\" (DOM virtual) para atualizar apenas as partes necessárias da interface do usuário quando ocorrem alterações nos dados. Isso melhora significativamente o desempenho e a velocidade de renderização, tornando o React uma escolha popular para o desenvolvimento de aplicações web e móveis responsivas.\n\nO React é frequentemente usado para criar interfaces de usuário complexas e interativas, como páginas web dinâmicas, aplicativos de página única (SPA), aplicativos móveis e até mesmo aplicações de desktop. Ele é amplamente adotado pela comunidade de desenvolvedores devido à sua facilidade de uso, eficiência e robustez.\n\nAlém disso, o React possui uma grande quantidade de recursos e bibliotecas complementares, como o React Router para controle de roteamento, o Redux para gerenciamento de estado global e o React Native para desenvolvimento de aplicativos móveis nativos.\n\nEm resumo, o React é uma biblioteca JavaScript que permite criar interfaces de usuário interativas, reutilizáveis e eficientes, tornando o desenvolvimento de aplicações web e móveis mais rápido e fácil.",
            "blogAuthor": "Gabriel Carlos",
            "authorDescription": 'Front-end Developer',
            'authorImg': 'https://avatars.githubusercontent.com/u/79729884?v=4'
        },
        {
            'id': 2,
            'blogImg': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
            'blogTitle': 'JavaScript linguagem de programação',
            'blogDescription': 'O que é javascript?',
            'blogContent': "JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela foi desenvolvida originalmente para ser executada em navegadores da web, permitindo que os desenvolvedores criem interatividade e comportamentos dinâmicos em páginas web.\n\nJavaScript é uma das principais linguagens para desenvolvimento front-end, sendo amplamente utilizada para criar elementos interativos em sites, como menus, formulários, animações e muito mais. Além disso, também é utilizada para desenvolvimento back-end, construção de aplicativos móveis, desenvolvimento de jogos e até mesmo para a criação de aplicações de desktop.\n\nPrincipais características do JavaScript:\n\n1. Linguagem orientada a objetos: JavaScript possui suporte para programação orientada a objetos, permitindo a criação de objetos, classes, herança, polimorfismo e encapsulamento.\n\n2. Interpretada: O código JavaScript é executado diretamente pelos navegadores ou por um interpretador JavaScript, sem a necessidade de compilação prévia.\n\n3. Multiplataforma: JavaScript pode ser executado em diferentes plataformas, como navegadores web, servidores, dispositivos móveis, IoT (Internet das Coisas) e muito mais.\n\n4. Linguagem de script: JavaScript é frequentemente usado como uma linguagem de script para adicionar comportamentos dinâmicos a páginas web, interagir com o usuário e manipular elementos HTML e CSS.\n\n5. Tipagem dinâmica: JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem ser atribuídas a diferentes tipos de dados durante a execução do programa.\n\n6. Suporte a bibliotecas e frameworks: JavaScript possui uma ampla variedade de bibliotecas e frameworks populares, como React, Angular, Vue.js, Node.js, Express.js e muitos outros, que facilitam o desenvolvimento de aplicações complexas.\n\nJavaScript é uma linguagem versátil e poderosa, amplamente adotada pela comunidade de desenvolvedores devido à sua acessibilidade, flexibilidade e recursos avançados. Ela desempenha um papel fundamental na construção de aplicações web modernas e no desenvolvimento de uma ampla gama de soluções tecnológicas.",
            'blogAuthor': 'Gabriel Carlos',
            'authorDescription': 'Front-end Developer',
            'authorImg': 'https://avatars.githubusercontent.com/u/79729884?v=4'
        },
        {
            'id': 2,
            'blogImg': 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1284735%2Fregular_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png',
            'blogTitle': 'Front End',
            'blogDescription': 'O que é front End?',
            'blogContent': "Front-end é a parte de um sistema ou aplicação que interage diretamente com o usuário final. É responsável por apresentar a interface gráfica e permitir a interação do usuário com o sistema.\n\nNo contexto do desenvolvimento web, o front-end engloba a criação e implementação de elementos visuais, como layouts, botões, menus e formulários, utilizando tecnologias como HTML (Hypertext Markup Language), CSS (Cascading Style Sheets) e JavaScript. Essas tecnologias são responsáveis pela estrutura, estilo e comportamento dos elementos presentes nas páginas web.\n\nAlém disso, o desenvolvedor front-end também trabalha com a otimização da experiência do usuário, garantindo que a interface seja intuitiva, responsiva e acessível em diferentes dispositivos e navegadores.\n\nPrincipais atividades do desenvolvedor front-end:\n\n1. Traduzir os requisitos de design em código HTML, CSS e JavaScript.\n\n2. Garantir a compatibilidade e acessibilidade da interface em diferentes navegadores e dispositivos.\n\n3. Otimizar o desempenho da interface, considerando o tempo de carregamento e a velocidade de resposta.\n\n4. Implementar interações e animações para tornar a interface mais dinâmica e atraente.\n\n5. Colaborar com outros membros da equipe de desenvolvimento, como designers e desenvolvedores back-end, para criar uma experiência de usuário coesa e integrada.\n\nO desenvolvimento front-end desempenha um papel fundamental na criação de interfaces de usuário atraentes e funcionais. É uma área em constante evolução, com novas tecnologias e técnicas sendo adotadas para melhorar a experiência do usuário e acompanhar as demandas do mercado.",
            'blogAuthor': 'Gabriel Carlos',
            'authorDescription': 'Front-end Developer',
            'authorImg': 'https://avatars.githubusercontent.com/u/79729884?v=4'
        },
    ]

    let blogs = arrayOfBlogs.filter(blog => blog.blogTitle === formattedBlogTitle)
    blogs = blogs[0]

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 max-w-3xl:grid-cols-3 sm:grid-cols-1 md:gap-8 px-4 md:mt-0 text-black'>

                    <div className='col-span-2 gap-x-8 gap-y-8'>
                        <img className='mt-20 h-56 w-full object-contain' src={blogs.blogImg} alt="" />
                        <h1 className='font-bold text-2xl my-1 pt-5'>{formattedBlogTitle}</h1>
                        <div className='pt-5'>
                            <p>{blogs.blogContent}</p>
                        </div>
                    </div>

                    <div className='mt-20 w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                        <div>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto' src={blogs.authorImg} alt={`Imagem do autor ${blogs.blogAuthor}`} />
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blogs.blogAuthor}</h1>
                            <p className='text-center text-gray-900 font-medium'>{blogs.authorDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
