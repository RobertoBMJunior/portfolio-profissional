export function AboutMe() {
  return (
    <section id="about-me" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
          Sobre mim
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
          Olá! Meu nome é Roberto
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
          Crio sites modernos, rápidos e responsivos para ajudar empresas a
          transmitir mais credibilidade e conquistar novos clientes.
        </p>
      </div>

      <div
        className="
          mx-auto
          max-w-4xl
          rounded-3xl
          border
          border-slate-200
          border-l-[6px]
          border-l-blue-600
          bg-white
          p-8
          shadow-lg
          lg:p-10
        "
      >
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Sou desenvolvedor{' '}
            <strong className="text-slate-900">Full Stack</strong> e formado em{' '}
            <strong className="text-slate-900">
              Engenharia Elétrica pela Universidade de Brasília (UnB)
            </strong>
            .
          </p>

          <p>
            Desenvolvo sites personalizados utilizando tecnologias modernas,
            sempre priorizando desempenho, boa experiência de navegação e um
            design que valorize a imagem da sua empresa.
          </p>

          <p>
            Meu compromisso é entregar um site profissional que represente seu
            negócio e facilite o contato com seus clientes.
          </p>
        </div>
      </div>
    </section>
  )
}
