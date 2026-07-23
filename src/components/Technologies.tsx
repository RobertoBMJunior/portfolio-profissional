import Image from 'next/image'

export function Technologies() {
  const technologies = [
    { name: 'Next.js', image: '/nextjs.svg' },
    { name: 'React', image: '/reactjs.webp' },
    { name: 'Tailwind CSS', image: '/tailwind.png' },
    { name: 'TypeScript', image: '/typescript.png' },
    { name: 'JavaScript', image: '/Javascript.png' },
    { name: 'Node.js', image: '/node.png' },
    { name: 'HTML5', image: '/html.png' },
    { name: 'CSS3', image: '/css.png' },
    { name: 'Git', image: '/git.png' },
    { name: 'Figma', image: '/figma.png' },
  ]

  return (
    <section
      id="technologies"
      className="scroll-mt-25 mx-auto max-w-7xl px-6 py-12"
    >
      <div className="mb-14 text-center">
        <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
          Tecnologias
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
          Ferramentas que utilizo
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          Tecnologias modernas utilizadas no desenvolvimento dos meus projetos.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="
              group
              flex
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-md
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-xl
            "
          >
            <Image
              src={technology.image}
              alt={technology.name}
              width={56}
              height={56}
              className="
                h-14
                w-14
                object-contain
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span className="mt-5 text-center font-semibold text-slate-700">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
