import { useRef } from 'react';

function Setting({ changeTheme }) {
  const primaryInput = useRef(null);
  const secondaryInput = useRef(null);

  return (
    <>
      <label htmlor="primary">primary</label>
      <input ref={primaryInput} type="text" />
      <br />
      <label htmlor="secondary">secondary</label>
      <input ref={secondaryInput} type="text" />
      <br />
      <button
        type="button"
        onClick={() =>
          changeTheme(primaryInput.current.value, secondaryInput.current.value)
        }
      >
        Change button
      </button>
    </>
  );
}

export default Setting;
