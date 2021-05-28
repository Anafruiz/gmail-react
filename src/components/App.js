import "../stylesheet/App.scss";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "./data/emails.json";
import React, { useState } from "react";

function App() {
  const [inboxFilter, setInboxFilter] = useState("");
  const [emails, setApiEmails] = useState(apiEmails);

  const handleInboxFilter = () => {
    console.log(inboxFilter);
    console.log("App:hola");
  };
  const handleDeletedFilter = () => {
    console.log("App:hola");
  };
  const handleTextFilter = (data) => {
    setInboxFilter(data);

    const inboxFilter = data.toLowerCase();
    const FilteredEmails = apiEmails.filter((email) => {
      return (
        email.subject.toLowerCase().includes(inboxFilter.toLocaleLowerCase()) ||
        email.fromName
          .toLowerCase()
          .includes(inboxFilter.toLocaleLowerCase()) ||
        email.body.toLowerCase().includes(inboxFilter.toLocaleLowerCase())
      );
    });
    setApiEmails(FilteredEmails);

    console.log("nuevo estado", FilteredEmails);
  };
  const renderEmails = () => {
    return apiEmails
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
      .map((email) => {
        return (
          <EmailItem
            key={email.id}
            from={email.fromName}
            subject={email.subject}
            time={email.date}
          />
        );
      });
  };
  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeletedFilter={handleDeletedFilter}
        handleTextFilter={handleTextFilter}
      />
      <p>La usuaria está filtrando por:{inboxFilter}</p>
      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>
      <EmailReader
        fromName={apiEmails[0].fromName}
        fromEmail={apiEmails[0].fromEmail}
        subject={apiEmails[0].subject}
        body={apiEmails[0].body}
      />
    </div>
  );
}
export default App;
