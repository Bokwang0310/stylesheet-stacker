import { Link } from 'react-router-dom';

function Sheet({ match }) {
  const { id } = match.params;
  return (
    <div>
      <Link to={`/sheet/${Math.random()}`}>hello</Link> Sheet Item {id}.
    </div>
  );
}

export default Sheet;
