import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "@/styles/users.module.css";

interface UserProps {
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
