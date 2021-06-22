export default function SavingAccount({ savingAmount, sentToChecking}) {
  return (
    <div>
      <h1>Saving:</h1>
      <h3 id="saving">{savingAmount + "$"}</h3>
      <button onClick={sentToChecking}>Send 100 to Checking</button>
    </div>
  );
}
