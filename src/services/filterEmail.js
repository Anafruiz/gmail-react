const filterEmails = (emails, textFilter, showInbox) => {
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
  );
};

export default filterEmails;
