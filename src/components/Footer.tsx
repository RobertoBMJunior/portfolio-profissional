import Link from 'next/link'
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  const telefone = '5561999743703'

  const mensagem = encodeURIComponent(
    'Olá! Vi seu portfólio e gostaria de solicitar um orçamento para um site.'
  )

  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagem}`

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-5
          px-6
          py-8

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Esquerda */}

        <div className="max-w-md text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-900">Roberto Júnior</h3>

          <p className="mt-3 leading-7 text-slate-600">
            Desenvolvedor Full Stack especializado na criação de sites
            profissionais para clínicas, consultórios e pequenos negócios.
          </p>
        </div>

        {/* Direita */}

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/SEU_GITHUB"
            target="_blank"
            className="
                rounded-full
                p-2
                text-slate-500
                transition-colors
                hover:text-green-500
              "
          >
            <WhatsappLogoIcon size={28} weight="fill" />
          </Link>

          <Link
            href="https://github.com/SEU_GITHUB"
            target="_blank"
            className="
                rounded-full
                p-2
                text-slate-500
                transition-colors
                hover:text-slate-900
              "
          >
            <GithubLogoIcon size={28} weight="fill" />
          </Link>

          <Link
            href="https://linkedin.com/in/SEU_LINKEDIN"
            target="_blank"
            className="
                rounded-full
                p-2
                text-slate-500
                transition-colors
                hover:text-blue-600
              "
          >
            <LinkedinLogoIcon size={28} weight="fill" />
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            gap-3
            px-6
            py-6

            text-sm
            text-slate-500

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span className='text-center'>© 2026 Roberto Júnior. Todos os direitos reservados.</span>

          <span className='text-center'>Desenvolvido com Next.js, React e Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  )
}
