function Footer() {
  return (
    <footer className="text-gray-50 p-5 text-center bg-gray-800">
      <div className="container flex flex-col gap-1 mx-auto">
        <h1 className="md:text-4xl text-3xl font-bold">
          &copy; Germán José Portafolio
        </h1>
        <p className="mb-1 text-lg">2003 - {new Date().getFullYear()}</p>
        <p className="text-lg">All rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
