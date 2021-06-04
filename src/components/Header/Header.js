import HeaderForm from "./HeaderForm";
import { Link, Route, Switch } from "react-router-dom";
import HeaderFilters from "./HeaderFilters";

function Header(props) {
  return (
    <header>
      <div>
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
      </div>
      <Switch>
        <Route exact path="/">
          <HeaderFilters
            textFilter={props.textFilter}
            showInbox={props.showInbox}
          />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
