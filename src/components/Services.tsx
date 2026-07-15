import { Globe, LayoutTemplate, Search, Wrench } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Sites Institucionais',
      description:
        'Sites profissionais para clínicas, consultórios e empresas que desejam transmitir mais credibilidade e fortalecer sua presença na internet.',
    },
    {
      icon: LayoutTemplate,
      title: 'Landing Pages',
      description:
        'Páginas desenvolvidas para divulgar serviços, campanhas e aumentar a geração de contatos e oportunidades.',
    },
    {
      icon: Search,
      title: 'SEO e Performance',
      description:
        'Sites rápidos e preparados para mecanismos de busca, proporcionando uma melhor experiência aos visitantes.',
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description:
        'Atualizações, melhorias e suporte para manter seu site seguro, moderno e sempre funcionando corretamente.',
    },
  ]

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
          Serviços
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
          Soluções para fortalecer a presença digital da sua empresa
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          Desenvolvo sites modernos, rápidos e personalizados para ajudar sua
          empresa a transmitir mais credibilidade e conquistar novos clientes.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article
              key={service.title}
              className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-blue-300
                hover:shadow-2xl
              "
            >
              <div className="mb-6 flex items-center gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl

                    bg-violet-100
                    text-violet-700

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-violet-700
                    group-hover:text-white
                  "
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-bold leading-tight text-slate-900">
                  {service.title}
                </h3>
              </div>

              <p className="leading-7 text-slate-600">{service.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
