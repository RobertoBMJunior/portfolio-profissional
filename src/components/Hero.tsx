import Image from 'next/image'

export function Hero() {
  const telefone = '5561999743703'
  const mensagem = encodeURIComponent(
    'Olá! Fiquei interessado nos seus serviços, vamos conversar?'
  )
  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagem}`

  return (
    <section
      id="hero"
      className="pt-26 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_80%),linear-gradient(180deg,#ffffff,#f8fafc)]"
    >
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-100px)]
          max-w-7xl
          items-center
          gap-2
          lg:gap-16
          px-6
          lg:grid-cols-[6.5fr_3.5fr]
        "
      >
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <span
            className="
              inline-block
              rounded-full
              bg-blue-100
              px-6
              py-2.5
              text-sm
              font-bold
              text-blue-600
            "
          >
            Desenvolvedor Freelancer
          </span>

          <h1
            className="
              mt-6
              mb-6
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-5xl
            "
          >
            Sites profissionais que ajudam sua empresa a transmitir mais
            credibilidade
          </h1>

          <p
            className="
              mb-9
              max-w-2xl
              text-lg
              leading-8
              text-slate-500
            "
          >
            Desenvolvo sites modernos, rápidos e totalmente responsivos para
            clínicas, consultórios e pequenos negócios, criando uma presença
            online profissional que transmite confiança e facilita o contato com
            novos clientes.
          </p>

          <div
            className="
              mb-11
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            <div
              className="
                  rounded-2xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex items-center gap-2 group font-medium text-(--gray-700)
                "
            >
              <span className="text-(--primary) bg-(--tertiary) rounded-full h-8 w-8 flex items-center justify-center">
                ✓
              </span>

              <span className="group-hover:text-(--primary) transition-all duration-300">
                Layout moderno
              </span>
            </div>

            <div
              className="
                  rounded-2xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex items-center gap-2 group font-medium text-(--gray-700) text-left
                "
            >
              <span className="text-(--primary) bg-(--tertiary) rounded-full h-8 w-8 flex items-center justify-center">
                ✓
              </span>

              <span className="group-hover:text-(--primary) transition-all duration-300">
                Funciona perfeitamente no celular
              </span>
            </div>

            <div
              className="
                  rounded-2xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex items-center gap-2 group font-medium text-(--gray-700)
                "
            >
              <span className="text-(--primary) bg-(--tertiary) rounded-full h-8 w-8 flex items-center justify-center">
                ✓
              </span>

              <span className="group-hover:text-(--primary) transition-all duration-300">
                Carregamento rápido
              </span>
            </div>

            <div
              className="
                  rounded-2xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex items-center gap-2 group font-medium text-(--gray-700)
                "
            >
              <span className="text-(--primary) bg-(--tertiary) rounded-full h-8 w-8 flex items-center justify-center">
                ✓
              </span>

              <span className="group-hover:text-(--primary) transition-all duration-300">
                SEO otimizado
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-9
                py-4
                font-medium
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
              "
            >
              Solicitar orçamento
            </a>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-2
                border-slate-300
                px-9
                py-4
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-600
                hover:bg-white
                hover:text-blue-600
              "
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div
          className="
            order-1
            mt-2  
            flex
            justify-center
            lg:order-2
            lg:mb-0
          "
        >
          <div className="relative">
            {/* Glow atrás da foto */}
            <div
              className="
                absolute
                inset-0
                -z-10
                scale-110
                rounded-full
                bg-blue-500/20
                blur-3xl
                lg:rounded-[40px]
              "
            />

            <Image
              src="/roberto.jpg"
              alt="Roberto Júnior"
              width={380}
              height={500}
              priority
              className="
                h-40
                w-40

                sm:h-48
                sm:w-48

                md:h-56
                md:w-56

                lg:h-95
                lg:w-75

                rounded-full
                lg:rounded-[28px]

                border-[6px]
                border-white

                object-cover

                shadow-[0_25px_60px_rgba(15,23,42,0.20)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:scale-[1.03]

                animate-floating
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
