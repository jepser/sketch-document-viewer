const Artboards = ({ artboards }) => {
  return (
    <div>
      {artboards.entries.map(entry => {
        return <div key={entry.id}>{entry.name}</div>;
      })}
    </div>
  );
};

export default Artboards;
