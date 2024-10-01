import { useParams } from 'react-router-dom';
import '../../App.css'
import logo from '../../assets/ЛОГО.png'

function Cart() {
    const { year, logoUrl, entryDate, balance, transactions } = useParams();

    const parsedTransactions = JSON.parse(decodeURIComponent(transactions));
    console.log("Params: ", { year, logoUrl, entryDate, balance, transactions });

    return (
        <div className="wrapperCart">
            <div className="content">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="Peer Racers" />
                    </div>
                    <div className="date">
                        <p>{year}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="traffic-info">
                        <div className="imgDiv">
                            <img src={logoUrl} alt="Traffic logo" />
                        </div>
                        <div>
                            <h1>Traffic:</h1>
                            <p>Date of entry: <span>{entryDate}</span></p>
                            <p>Balance: <span>{balance}</span></p>
                        </div>
                    </div>
                    <div className="transactions">
                        <div className="transaction">
                            <div className="label">Name:</div>
                            <div className="label">Date:</div>
                            <div className="label">Amount:</div>
                        </div>
                        {parsedTransactions.map((transaction, index) => (
                            <div key={index} className="transaction">
                                <div className="name">{transaction.name}</div>
                                <div className="date">{transaction.date}</div>
                                <div className="amount">{transaction.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
