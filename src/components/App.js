import "../stylesheet/App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import EmailTable from "./Email/EmailTable";
import filterEmails from "../services/filterEmail";
import EmailReader from "./Email/EmailReader";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/localStorage";
import Loading from "./Loading";

function App() {
  //get data from localStorage

  let localStorageData = ls.get("emailFilters", {
    textFilter: "",
    showInbox: true,
  });

  //States
  const [emails, setEmails] = useState([]);
  const [textFilter, setTextFilter] = useState(localStorageData.textFilter);
  const [showInbox, setShowInbox] = useState(localStorageData.showInbox);
  const [loading, setLoading] = useState(true);

  //fetch
  useEffect(() => {
    getDataFromApi()
      .then((data) => setEmails(data))
      .then(() => setLoading(false));
  }, []);

  //LocalStorage
  useEffect(() => {
    ls.set("emailFilters", { textFilter, showInbox });
  });
  //event handlers
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
  const handleDeleteEmail = (emailId, deleted) =>
    setEmailAttribute(emailId, "deleted", deleted);
  const setEmailAttribute = (emailId, attribute, value) => {
    const email = emails.find((email) => email.id === emailId);
    email[attribute] = value;
    setEmails([...emails]);
  };

  // render helpers

  const renderEmailDetail = (props) => {
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
          deleted={selectedEmail.deleted}
          handleDeleteEmail={handleDeleteEmail}
          handleReadEmail={handleReadEmail}
        />
      );
    } else {
      return <p>Email no encontrado</p>;
    }
  };
  return (
    <div>
      <Header
        textFilter={textFilter}
        showInbox={showInbox}
        handleInboxFilter={handleInboxFilter}
        handleDeletedFilter={handleDeletedFilter}
        handleTextFilter={handleTextFilter}
      />

      <Switch>
        <Route path="/email/:emailId" render={renderEmailDetail} />
        <Route path="/">
          <EmailTable
            emails={filterEmails(emails, textFilter, showInbox)}
            handleDeleteEmail={handleDeleteEmail}
          />
        </Route>
      </Switch>
      <Loading loading={loading} />
      <Footer />
    </div>
  );
}
export default App;
