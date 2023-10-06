import { Layout } from "../components/Layout";

export default function Home(props) {
  return (
    <Layout>
      <>

      </>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const { data, query, variables } = await client.queries.page({
  //   relativePath: "home.mdx",
  // });

  return {
    props: {
      // data,
      // query,
      // variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
