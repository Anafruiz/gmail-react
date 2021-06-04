function HeaderForm(props) {
  const handleButton = (ev) => {
    ev.preventDefault();
    props.handleInboxFilter();
  };
  function handleDeletedFilter(ev) {
    ev.preventDefault();
    props.handleDeletedFilter();
  }
  function handleTextFilter(ev) {
    ev.preventDefault();
    const data = {
      value: ev.target.value,
    };
    props.handleTextFilter(data);
  }
  return (
    <form className="header__inputs">
      <button className="form__btn" onClick={handleButton}>
        <span className="fas fa-inbox"></span>
        Recibidos
      </button>
      <button className="form__btn" onClick={handleDeletedFilter}>
        <span className="fas fa-trash"></span>
        Papelera
      </button>

      <input
        className="form__input-text"
        type="text"
        defaultValue={props.textFilter}
        placeholder="Buscar un correo"
        onKeyUp={handleTextFilter}
      />
    </form>
  );
}

export default HeaderForm;
