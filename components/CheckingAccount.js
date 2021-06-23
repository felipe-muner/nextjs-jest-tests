export default function CheckingAccount({ checkingAmount, sentToSaving }) {
  return (
    <div>
      <h1>Checking:</h1>
      <h3 id="checking-id">{checkingAmount}</h3>
      <button id="send-button" onClick={sentToSaving}>
        Send 100 to Saving
      </button>
    </div>
  );
}
