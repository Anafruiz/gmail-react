function EmailItem(props) {
  let deletedClass = props.deleted === true ? "text--decoration--through" : "";
  let readClass = props.read === true ? "" : "text--bold";
  const handleDelete = (ev) => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id);
  };
  const handleSelectEmail = () => {
    props.handleSelectEmail(props.id);
  };
  return (
    <tr
      className={`cursor-pointer ${deletedClass}${readClass}`}
      onClick={handleSelectEmail}
    >
      <td>
        {/* <a href="/" className="text--decoration--none">    </a> */}
        {props.from}{" "}
      </td>
      <td>
        {/* <a href="/" className="text--decoration--none">     </a> */}
        {props.subject}
      </td>
      <td>
        {/* <a href="/" className="text--decoration--none">        </a> */}
        {props.time}
      </td>
      <td className="text-align-right">
        <button
          className="form__btn fas fa-trash"
          onClick={handleDelete}
        ></button>
      </td>
    </tr>
  );
}
export default EmailItem;
