import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import DashboardPage from "@/app/examples/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        
        <PageHeaderHeading>SOFTWARES PERSONALIZADOS</PageHeaderHeading>
        <PageHeaderDescription>
        Sou apaixonado por construir sites de alta qualidade que realçam e focam na personalidade do cliente, deixando o sistema perfeitamente alinhado com a identidade da empresa. Minha expertise reside em criar experiências limpas e amigáveis, garantindo que cada detalhe reflita a essência da marca.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/sobre" className={cn(buttonVariants())}>
            SAIBA MAIS
          </Link>
          <Link href="/contato" className={cn(buttonVariants())}>
            ENTRAR EM CONTATO
          </Link><Link href="#" className={cn(buttonVariants())}>
            ...
          </Link>
        </div>
      </PageHeader>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
      <section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <DashboardPage />
        </div>
      </section>
    </div>
  )
}
