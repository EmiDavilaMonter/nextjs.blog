
import Layout from "../../componentes/Layout";
import utilStyles from "../../styles/utils.module.css"

export default function Home() {


  return (
   <Layout
    title = "Home | Next.js"
    description="Esta es la descripcion de home" 
    home
     
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - youll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
   </Layout>
   
  );
}
