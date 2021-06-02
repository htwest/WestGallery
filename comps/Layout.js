import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
