import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CJW Photography</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
