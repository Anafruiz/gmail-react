const HeaderFilters = (props) => {
  const emailType = props.showInbox ? " recibidos" : " borrados";
  const filterText =
    props.textFilter === "" ? (
      " y sin filtrar."
    ) : (
      <span>
        y filtrando por:<span className="text--bold">{props.textFilter}</span>
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

export default HeaderFilters;
