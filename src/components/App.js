import "../stylesheet/App.scss";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "./data/emails.json";
import React, { useState } from "react";

function App() {
  const [inboxFilter, setInboxFilter] = useState("");
  const [emails, setApiEmails] = useState(apiEmails);
  const [showInbox, setShowInbox] = useState(true);
  const [showEmailId, setShowEmailId] = useState("");

  const handleDeleteEmail = (emailId) => {
    const email = emails.find((email) => email.id === emailId);
    email.deleted = true;
    return {
      showEmailId: emailId === showEmailId ? "" : showEmailId,
      //if user deletes the selected email, we unselect the email
      emails: emails,
    };
  };
  const handleSelectEmail = (emailId) => {
    setShowEmailId(emailId);
    const email = emails.find((email) => email.id === emailId);
    email.read = true;
    return {
      showEmailId: emailId,
      emails: emails,
    };
  };

  const handleInboxFilter = () => {
    setShowInbox(true);
  };
  const handleDeletedFilter = () => {
    setShowInbox(false);
  };
  const handleTextFilter = (data) => {
    setInboxFilter(data);

    // const inboxFilter = data.toLowerCase();
    // const FilteredEmails = apiEmails.filter((email) => {
    //   return (
    //     email.subject.toLowerCase().includes(inboxFilter.toLocaleLowerCase()) ||
    //     email.fromName
    //       .toLowerCase()
    //       .includes(inboxFilter.toLocaleLowerCase()) ||
    //     email.body.toLowerCase().includes(inboxFilter.toLocaleLowerCase())
    //   );
    // });
    // setApiEmails(FilteredEmails);
  };
  const handleCloseEmail = () => {
    setShowEmailId("");
  };
  const renderEmails = () => {
    return (
      apiEmails
        //filter inbox vs deleted
        .filter((email) => {
          return (
            email.subject
              .toLowerCase()
              .includes(inboxFilter.toLocaleLowerCase()) ||
            email.fromName
              .toLowerCase()
              .includes(inboxFilter.toLocaleLowerCase()) ||
            email.body.toLowerCase().includes(inboxFilter.toLocaleLowerCase())
          );
        })
        //filter by inboxFilter text
        .filter((email) => {
          //TERNARIO
          // return showInbox === true ? !email.deleted : email.deleted;
          if (showInbox === true) {
            // return !email.deleted
            //este valor es el mismo código que las condicionales de abajo pero de una manera más limpia
            if (email.deleted === true) {
              return false;
            } else {
              return true;
            }
          } else {
            return email.deleted;
          }
        })
        .map((email) => {
          return (
            <EmailItem
              key={email.id}
              id={email.id}
              from={email.fromName}
              subject={email.subject}
              time={email.date}
              deleted={email.deleted}
              read={email.read}
              handleDeleteEmail={handleDeleteEmail}
              handleSelectEmail={handleSelectEmail}
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
          handleDeleteEmail={handleDeleteEmail}
          id={selectedEmail.id}
          handleCloseEmail={handleCloseEmail}
        />
      );
    }
  };

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
