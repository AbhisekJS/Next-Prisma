import styles from "../styles/User.module.css";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

function User({ firstName, lastName, avatar, email,id }) {
    
    const deleteHandler = async (id) => {
        try {
            await fetch(`/api/post/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: null,
            });
            toast.success("Contact Removed");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={styles.container}>
            <Image src={avatar} className={styles.image} width="50px" height="50px" alt="" />
            <div className={styles.name}>
                {firstName} {"  "}
                {lastName}
                <div className={styles.email}>{email}</div>
            </div>
            <button className={styles.deleteBtn}
                onClick={()=>deleteHandler(id)}>Delete</button>
        </div>
    );
}

export default User;