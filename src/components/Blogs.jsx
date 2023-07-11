import React, { useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import { renderPaginationButtons, nextPage, prevPage, numberOfBlogs } from './Pagination';

const Blogs = () => {
    const blogs = [
        {
            'id': 1,
            'blogImg': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
            'blogTitle': 'JavaScript linguagem de programação',
            'blogDescription': 'O que é javascript?',
            'blogContent': "JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela foi desenvolvida originalmente para ser executada em navegadores da web, permitindo que os desenvolvedores criem interatividade e comportamentos dinâmicos em páginas web.\n\nJavaScript é uma das principais linguagens para desenvolvimento front-end, sendo amplamente utilizada para criar elementos interativos em sites, como menus, formulários, animações e muito mais. Além disso, também é utilizada para desenvolvimento back-end, construção de aplicativos móveis, desenvolvimento de jogos e até mesmo para a criação de aplicações de desktop.\n\nPrincipais características do JavaScript:\n\n1. Linguagem orientada a objetos: JavaScript possui suporte para programação orientada a objetos, permitindo a criação de objetos, classes, herança, polimorfismo e encapsulamento.\n\n2. Interpretada: O código JavaScript é executado diretamente pelos navegadores ou por um interpretador JavaScript, sem a necessidade de compilação prévia.\n\n3. Multiplataforma: JavaScript pode ser executado em diferentes plataformas, como navegadores web, servidores, dispositivos móveis, IoT (Internet das Coisas) e muito mais.\n\n4. Linguagem de script: JavaScript é frequentemente usado como uma linguagem de script para adicionar comportamentos dinâmicos a páginas web, interagir com o usuário e manipular elementos HTML e CSS.\n\n5. Tipagem dinâmica: JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem ser atribuídas a diferentes tipos de dados durante a execução do programa.\n\n6. Suporte a bibliotecas e frameworks: JavaScript possui uma ampla variedade de bibliotecas e frameworks populares, como React, Angular, Vue.js, Node.js, Express.js e muitos outros, que facilitam o desenvolvimento de aplicações complexas.\n\nJavaScript é uma linguagem versátil e poderosa, amplamente adotada pela comunidade de desenvolvedores devido à sua acessibilidade, flexibilidade e recursos avançados. Ela desempenha um papel fundamental na construção de aplicações web modernas e no desenvolvimento de uma ampla gama de soluções tecnológicas.",
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 2,
            'blogImg': 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1284735%2Fregular_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png',
            'blogTitle': 'Front End',
            'blogDescription': 'O que é front End?',
            'blogContent': "Front-end é a parte de um sistema ou aplicação que interage diretamente com o usuário final. É responsável por apresentar a interface gráfica e permitir a interação do usuário com o sistema.\n\nNo contexto do desenvolvimento web, o front-end engloba a criação e implementação de elementos visuais, como layouts, botões, menus e formulários, utilizando tecnologias como HTML (Hypertext Markup Language), CSS (Cascading Style Sheets) e JavaScript. Essas tecnologias são responsáveis pela estrutura, estilo e comportamento dos elementos presentes nas páginas web.\n\nAlém disso, o desenvolvedor front-end também trabalha com a otimização da experiência do usuário, garantindo que a interface seja intuitiva, responsiva e acessível em diferentes dispositivos e navegadores.\n\nPrincipais atividades do desenvolvedor front-end:\n\n1. Traduzir os requisitos de design em código HTML, CSS e JavaScript.\n\n2. Garantir a compatibilidade e acessibilidade da interface em diferentes navegadores e dispositivos.\n\n3. Otimizar o desempenho da interface, considerando o tempo de carregamento e a velocidade de resposta.\n\n4. Implementar interações e animações para tornar a interface mais dinâmica e atraente.\n\n5. Colaborar com outros membros da equipe de desenvolvimento, como designers e desenvolvedores back-end, para criar uma experiência de usuário coesa e integrada.\n\nO desenvolvimento front-end desempenha um papel fundamental na criação de interfaces de usuário atraentes e funcionais. É uma área em constante evolução, com novas tecnologias e técnicas sendo adotadas para melhorar a experiência do usuário e acompanhar as demandas do mercado.",
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 3,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 4,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 5,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 6,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 7,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 8,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 9,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 10,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End React',
            'blogDescription': '?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 11,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 12,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        }
    ]

   

    const [currentPage, setCurrentPage] = useState(1);
    const [blogPerPage, setBlogPerPage] = useState(numberOfBlogs[3]);

    const indexOfLastBlog = currentPage * blogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
    const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginationButtons = renderPaginationButtons(currentPage, setCurrentPage, blogs, blogPerPage);

    return (
        <div className='w-full bg-[#f9f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className={blogPerPage === '1' ? 'grid lg:grid-cols-3 md:grid-cols-1  gap-8 px-4 text-black' : 'grid lg:grid-cols-3 md:grid-cols-2  gap-8 px-4 text-black'}>
                    {currentBlog.map((blog) => (
                        <Link to={`/blog/${encodeURIComponent(blog.blogTitle.replace(/\s+/g, '-'))}`} key={blog.id}>
                            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-contain' src={blog.blogImg} alt="imagem do blog" />
                                <div className='p-8 bg-slate-100'>
                                    <h3 className='font-bold text-2xl my-1'>{blog.blogTitle}</h3>
                                    <p className='text-gray-600 text-xl mb-5'>{blog.blogDescription}</p>
                                    <span className='text-gray-500 text-sm'>Autor: {blog.blogAuthor}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='mt-5 ml-4'>
                    <label htmlFor="blogsPerPage">Blogs por Página</label>
                    <select value={blogPerPage} onChange={(e) => setBlogPerPage(e.target.value)} className='mx-2' name='blogsPerPage'>
                        {Object.entries(numberOfBlogs).map((nB) => (
                            <option key={nB[1] + 1} value={nB[0]}>{nB[1]}</option>
                        ))}
                    </select>
                </div>
                <div className='flex mt-5 justify-center'>
                    <button className='mx-2 p-1 border-none rounded-xl' disabled={currentPage === 1} onClick={() => prevPage(setCurrentPage, currentPage)}>
                        <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
                    </button>
                    {paginationButtons}
                    <button
                        className='mx-2 p-1 border-none rounded-xl'
                        disabled={currentPage === Math.ceil(blogs.length / blogPerPage)}
                        onClick={() => nextPage(setCurrentPage, currentPage)}
                    >
                        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
