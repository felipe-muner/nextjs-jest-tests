import { useState } from "react";

export default function SavingAccount({ savingAmount, sentToChecking }) {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Saving:</h1>
      <h3 id="saving-val">{savingAmount + "$"}</h3>
      <button id="send-to-checking" onClick={sentToChecking}>
        Send 100 to Checking
      </button>

      <button id="setnum" onClick={() => setNum(num + 1)}>
        set num
      </button>
      <div id="num-val">{num}</div>
    </div>
  );
}
