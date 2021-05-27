import HeaderForm from "./HeaderForm";

function Header() {
  return (
    <header className="col2 mb-1">
      <div>
        <h1 classNameName="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>
      <HeaderForm />
    </header>
  );
}

export default Header;
