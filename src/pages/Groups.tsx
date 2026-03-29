import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Layout } from "@/components/layout/Layout";

export default function Groups() {
  return (
    <Layout>
      <SiteHeader />
      <main>
        <h1>Groups</h1>
      </main>
      <SiteFooter />
    </Layout>
  )
}