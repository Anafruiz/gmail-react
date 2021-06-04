import { Link } from "react-router-dom";

function EmailItem(props) {
  let deletedClass = props.deleted === true ? "text--decoration--through" : "";
  let readClass = props.read === true ? "" : "text--bold";
  let trashIconClass = props.deleted ? "fa-trash-restore" : "fa-trash";
  const handleDeleteEmail = (ev) => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id, !props.deleted);
  };

  const renderTd = (text) => {
    return (
      <td className="email--cell">
        <Link
          className="email--link text--decoration--none"
          to={`email/${props.id}`}
        >
          {text}
        </Link>
      </td>
    );
  };
  return (
    <tr className={`cursor-pointer ${deletedClass}${readClass}`}>
      {renderTd(props.from)}
      {renderTd(props.subject)}
      {renderTd(props.time)}

      <td className="text-align-right">
        <button
          className={`form__btn fas ${trashIconClass}`}
          onClick={handleDeleteEmail}
        ></button>
      </td>
    </tr>
  );
}
export default EmailItem;
