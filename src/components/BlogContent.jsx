import React from 'react'

const BlogContent = () => {

    const blogs = {
        "id": 1,
        "blogImg": "../../strapi/public/uploads/react_fe04941c3a.svg",
        "blogTitle": "Front End With React",
        "blogDescription": "What is react?",
        "blogContent": "React é uma biblioteca JavaScript de código aberto utilizada para a construção de interfaces de usuário interativas. Desenvolvida pelo Facebook, o React permite que os desenvolvedores criem componentes reutilizáveis que gerenciam seu próprio estado e renderizam de forma eficiente quando ocorrem mudanças nesse estado.\n\nO React utiliza um conceito chamado de \"Virtual DOM\" (DOM virtual) para atualizar apenas as partes necessárias da interface do usuário quando ocorrem alterações nos dados. Isso melhora significativamente o desempenho e a velocidade de renderização, tornando o React uma escolha popular para o desenvolvimento de aplicações web e móveis responsivas.\n\nO React é frequentemente usado para criar interfaces de usuário complexas e interativas, como páginas web dinâmicas, aplicativos de página única (SPA), aplicativos móveis e até mesmo aplicações de desktop. Ele é amplamente adotado pela comunidade de desenvolvedores devido à sua facilidade de uso, eficiência e robustez.\n\nAlém disso, o React possui uma grande quantidade de recursos e bibliotecas complementares, como o React Router para controle de roteamento, o Redux para gerenciamento de estado global e o React Native para desenvolvimento de aplicativos móveis nativos.\n\nEm resumo, o React é uma biblioteca JavaScript que permite criar interfaces de usuário interativas, reutilizáveis e eficientes, tornando o desenvolvimento de aplicações web e móveis mais rápido e fácil.",
        "blogAuthor": "Gabriel Carlos",
        "authorDescription": 'Front-end Developer',
        'authorImg': 'https://avatars.githubusercontent.com/u/79729884?v=4'
    }

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 max-w-3xl:grid-cols-3 sm:grid-cols-1 md:gap-8 px-4 md:mt-0 text-black'>

                    <div className='col-span-2 gap-x-8 gap-y-8'>
                        <img className='mt-20 h-56 w-full object-contain' src={blogs.blogImg} alt="" />
                        <h1 className='font-bold text-2xl my-1 pt-5'>{blogs.blogTitle}</h1>
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
