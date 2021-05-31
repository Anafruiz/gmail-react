import "../stylesheet/App.scss";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "./data/emails.json";
import React, { useState } from "react";

function App() {
  //States
  const [emails, setEmails] = useState(apiEmails);
  const [inboxFilter, setInboxFilter] = useState("");
  const [showInbox, setShowInbox] = useState(true);
  const [showEmailId, setShowEmailId] = useState("");

  //event handlers
  const handleInboxFilter = () => {
    setShowInbox(true);
  };
  const handleDeletedFilter = () => {
    setShowInbox(false);
  };
  const handleTextFilter = (data) => {
    setInboxFilter(data);
  };

  const handleSelectEmail = (emailId) => {
    // clean email id
    setShowEmailId(emailId);
    // set email read attribute to true
    const email = emails.find((email) => email.id === emailId);
    email.read = true;
    setEmails([...emails]);
  };
  const handleDeleteEmail = (emailId) => {
    // clean email id
    if (emailId === showEmailId) {
      setShowEmailId("");
    }
    // set email deleted attribute to true
    const email = emails.find((email) => email.id === emailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  const handleCloseEmail = () => {
    setShowEmailId("");
  };

  // render helpers

  const renderFilters = () => {
    const emailType = showInbox ? " recibidos" : " borrados";
    const filterText =
      inboxFilter === "" ? (
        " y sin filtrar."
      ) : (
        <span>
          y filtrando por:<span className="text--bold">{inboxFilter}</span>
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
    const lowerCaseInboxFilter = inboxFilter.toLowerCase();
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
              handleSelectEmail={handleSelectEmail}
              handleDeleteEmail={handleDeleteEmail}
            />
          );
        })
    );
  };
  const renderEmailDetail = () => {
    const selectedEmail = emails.find((email) => email.id === showEmailId);
    if (selectedEmail) {
      return (
        <EmailReader
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          id={selectedEmail.id}
          handleDeleteEmail={handleDeleteEmail}
          handleCloseEmail={handleCloseEmail}
        />
      );
    }
  };
  console.log("Renderizando");

  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeletedFilter={handleDeletedFilter}
        handleTextFilter={handleTextFilter}
      />
      {renderFilters()}
      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>
      {renderEmailDetail()}
    </div>
  );
}
export default App;
