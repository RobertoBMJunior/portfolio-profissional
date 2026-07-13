export function Header() {
  return (
    <header
      id="header"
      className="fixed w-full top-0 left-0 flex justify-between items-center py-5.5 px-[8%] z-20 backdrop-blur-[18px] bg-white/72 border-b border-white/40 transition-all duration-400 h-25"
    >
      <a href="#" className="text-2xl font-bold text-(--secondary)">
        {' '}
        Roberto Júnior{' '}
      </a>

      <nav className="flex items-center">
        <span id="icon-menu" className="text-[2rem] cursor-pointer hidden">
          {' '}
          &#9776;{' '}
        </span>

        <ul id="menu" className="flex gap-10">
          <li>
            <a
              href="#projects"
              className="relative text-(--gray-700) hover:text-(--primary) font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full"
            >
              {' '}
              Projetos{' '}
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="relative text-(--gray-700) hover:text-(--primary) font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full"
            >
              {' '}
              Serviços{' '}
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="relative text-(--gray-700) hover:text-(--primary) font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full"
            >
              {' '}
              Experiência{' '}
            </a>
          </li>

          <li>
            <a
              href="#ability"
              className="relative text-(--gray-700) hover:text-(--primary) font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full"
            >
              {' '}
              Tecnologias{' '}
            </a>
          </li>

          <li>
            <a
              href="#contacts"
              className="relative text-(--gray-700) hover:text-(--primary) font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full"
            >
              {' '}
              Contato{' '}
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="https://wa.me/5561999743703"
        target="_blank"
        className="flex items-center justify-center cursor-pointer font-medium bg-(--primary) hover:bg-(--primary-dark) text-white px-6.5 py-3.25 rounded-full transition-all duration-300 ease-in-out"
      >
        Solicitar orçamento
      </a>
    </header>
  )
}
