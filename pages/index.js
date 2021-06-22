import classes from '../styles/utils.module.css'
import CheckingAccount from '../components/CheckingAccount'
import SavingAccount from '../components/SavingAccount'

export default function Home() {
  return (
    <div className={classes.container}>
      
      <div>
      <div className={classes.container}>
        <div className={classes.channel}>
          <CheckingAccount />
        </div>
        <div className={classes.messages}>
          <SavingAccount/>
        </div>
      </div>
    </div>

    </div>
  )
}
