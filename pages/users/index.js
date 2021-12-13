import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data, "sa");

  return {
    props: { user: data },
  };
};

const user = ({ user }) => {
  return (
    <div style={{ margin: "0 350px" }}>
      <h1>Danh sach nhan vien</h1>
      {user.map((elm) => (
        <Link href={"/users/" + elm.id} key={elm.id} user={elm}>
          <a>
            <h2 style={{ color: "blue" }}>
              {elm.id}-{elm.name}
            </h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default user;
