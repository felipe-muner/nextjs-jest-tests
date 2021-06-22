import classes from "../styles/utils.module.css";
import CheckingAccount from "../components/CheckingAccount";
import SavingAccount from "../components/SavingAccount";
import { useState } from "react";

export default function Home() {
  const [checkingAmount, setCheckingAmount] = useState(3850);
  const [savingAmount, setSavingAmount] = useState(9820);

  const sentToChecking = () => {
    setSavingAmount(savingAmount - 100);
    setCheckingAmount(checkingAmount + 100);
  };

  const sentToSaving = () => {
    setCheckingAmount(checkingAmount - 100);
    setSavingAmount(savingAmount + 100);
  };

  return (
    <div className={classes.container}>
      <div>
        <h2 className="felipe">My Savings</h2>
      </div>
      <div>
        <div className={classes.container}>
          <div className={classes.checking}>
            <CheckingAccount
              checkingAmount={checkingAmount}
              sentToSaving={sentToSaving}
            />
          </div>
          <div className={classes.saving}>
            <SavingAccount
              savingAmount={savingAmount}
              sentToChecking={sentToChecking}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
