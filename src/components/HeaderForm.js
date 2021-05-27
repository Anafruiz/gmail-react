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
    props.handleTextFilter({
      filterText: ev.target.value,
    });
  }
  return (
    <form className="text-align-right">
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
        placeholder="Buscar un correo"
        onKeyUp={handleTextFilter}
      />
    </form>
  );
}

export default HeaderForm;
