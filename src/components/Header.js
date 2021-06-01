import HeaderForm from "./HeaderForm";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="col2 mb-1">
      <div>
        <h1 className="title">
          <Link to="/" className="text--decoration--none">
            <span className="fas fa-envelope-open-text mr-1"></span>
            Gmail
          </Link>
        </h1>
      </div>
      <HeaderForm
        textFilter={props.textFilter}
        handleInboxFilter={props.handleInboxFilter}
        handleTextFilter={props.handleTextFilter}
        handleDeletedFilter={props.handleDeletedFilter}
      />
    </header>
  );
}

export default Header;
