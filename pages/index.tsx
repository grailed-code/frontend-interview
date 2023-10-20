export default function Home() {
  return <div>Welcome to Faux</div>;
}

export const getServerSideProps = () => ({
  redirect: {
    destination: '/shop',
    permanent: false,
  },
});
