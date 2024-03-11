import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { CircleSpinnerOverlay } from "react-spinner-overlay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_URL } from "../config";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [id , setId] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      axios
        .get(`https://${BACKEND_URL}/api/v1/user/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setBalance(res.data.balance);
          setFirstName(res.data.firstName);
          setId(res.data.id);
          setLoading(false); 
        })
        .catch((error) => {
          toast.error("Error while fetching the data");
          setLoading(false); 
        });
    } catch (e) {
      toast.error("Error while fetching the data");
      setLoading(false); 
    }
  }, []);

  if (loading) {
    return <CircleSpinnerOverlay />;
  }

  return (
    <div>
      <ToastContainer autoClose={500} hideProgressBar={true}/>
      <Appbar name={firstName} />
      <div className="m-8">
        <Balance value={balance} />
        <Users id={id}/>
      </div>
    </div>
  );
};

export default Dashboard;
