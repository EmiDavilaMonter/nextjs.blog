import Layout from "../../componentes/Layout";
import Link from "next/link";

export default function index({data}) {// Cambia data a { data }

  return (
    <Layout>
      <h1>Lista de artículos</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h1>
            <Link href={`/blog/${id}`}>
            <p>{id} - {title}</p>
            </Link>
           
          </h1>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res)
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}