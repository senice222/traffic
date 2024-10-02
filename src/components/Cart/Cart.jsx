import { useParams } from 'react-router-dom';
import '../../App.css'
import logo from '../../assets/ЛОГО.png'

function Cart() {
    const { year, logoUrl, entryDate, balance, transactions } = useParams();

    const parsedTransactions = JSON.parse(decodeURIComponent(transactions));

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
                            <img className='imgDynamic' src={logoUrl} alt="Traffic logo" />
                        </div>
                        <div>
                            <h1>Traffic:</h1>
                            <p>Date of entry: <span>{entryDate}</span></p>
                            <p>Balance: <span>{balance}</span></p>
                        </div>
                    </div>
                    <table className="transactions">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parsedTransactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <div className="transactions">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Cart;
