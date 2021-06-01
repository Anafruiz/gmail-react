import "../stylesheet/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "./data/emails.json";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  //States
  const [emails, setEmails] = useState(apiEmails);
  const [textFilter, setTextFilter] = useState("");
  const [showInbox, setShowInbox] = useState(true);

  const handleInboxFilter = () => {
    setShowInbox(true);
  };
  const handleDeletedFilter = () => {
    setShowInbox(false);
  };
  const handleTextFilter = (data) => {
    setTextFilter(data.value);
  };

  const handleReadEmail = (emailId) => {
    // set email read attribute to true
    const email = emails.find((email) => email.id === emailId);
    email.read = true;
    setEmails([...emails]);
  };
  const handleDeleteEmail = (emailId) => {
    // set email deleted attribute to true
    const email = emails.find((email) => email.id === emailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  // render helpers

  const renderFilters = () => {
    const emailType = showInbox ? " recibidos" : " borrados";
    const filterText =
      textFilter === "" ? (
        " y sin filtrar."
      ) : (
        <span>
          y filtrando por:<span className="text--bold">{textFilter}</span>
        </span>
      );

    return (
      <p className="mb-1">
        La usuaria está visualizando los emails{" "}
        <span className="text--bold">{emailType}</span>
        {filterText}
      </p>
    );
  };

  const renderEmails = () => {
    const lowerCaseInboxFilter = textFilter.toLowerCase();
    return (
      emails
        // filter by inbox vs deleted
        .filter((email) => {
          // return showInbox !== email.deleted;
          return showInbox === true ? !email.deleted : email.deleted;
        })
        // filter by inboxFilter text
        .filter((email) => {
          return (
            email.fromName.toLowerCase().includes(lowerCaseInboxFilter) ||
            email.subject.toLowerCase().includes(lowerCaseInboxFilter) ||
            email.body.toLowerCase().includes(lowerCaseInboxFilter)
          );
        })
        .map((email) => {
          return (
            <EmailItem
              key={email.id}
              id={email.id}
              from={email.fromName}
              subject={email.subject}
              time={email.date}
              read={email.read}
              deleted={email.deleted}
              handleDeleteEmail={handleDeleteEmail}
            />
          );
        })
    );
  };
  const renderEmailDetail = (props) => {
    console.log(props.match.params);
    const selectedEmail = emails.find(
      (email) => email.id === props.match.params.emailId
    );
    if (selectedEmail !== undefined) {
      return (
        <EmailReader
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          id={selectedEmail.id}
          handleDeleteEmail={handleDeleteEmail}
          handleReadEmail={handleReadEmail}
        />
      );
    } else {
      return <p>Email no encontrado</p>;
    }
  };
  console.log("Renderizando");

  return (
    <div>
      <Header
        textFilter={textFilter}
        handleInboxFilter={handleInboxFilter}
        handleDeletedFilter={handleDeletedFilter}
        handleTextFilter={handleTextFilter}
      />
      {renderFilters()}
      <Switch>
        <Route path="/email/:emailId" render={renderEmailDetail} />
        <Route path="/">
          <table className="table">
            <tbody>{renderEmails()}</tbody>
          </table>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
