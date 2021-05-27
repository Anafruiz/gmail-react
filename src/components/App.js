import "../stylesheet/App.scss";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import emails from "./data/emails.json";
const renderEmails = () => {
  return emails.map((email) => {
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
function App() {
  const handleInboxFilter = () => {
    console.log("App:hola");
  };
  const handleDeletedFilter = () => {
    console.log("App:hola");
  };
  const handleTextFilter = (data) => {
    console.log("App:hola", data);
  };
  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeletedFilter={handleDeletedFilter}
        handleTextFilter={handleTextFilter}
      />
      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>
      <EmailReader
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        subject={emails[0].subject}
        body={emails[0].body}
      />
    </div>
  );
}
export default App;
