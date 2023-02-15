import React, { useEffect, useState } from 'react'

function Test() {
  const [userName, setUserName] = useState("");
  var nbTotal = 0;

  const timer = () => {
    nbTotal += 1;
    console.log(nbTotal);
  }

  useEffect(() => {
    const inter = setInterval(timer(), 1000)
  })

  const click = () => {
    localStorage.setItem("Username", JSON.stringify(userName))
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input type="submit" value="Submit" onClick={click}></input>
    </form>
  );
}

export default Test