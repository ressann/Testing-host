import { userData } from "@/lib/data";
import Link from "next/link";

export default function Home({
  searchParams,
}: {
  searchParams: {
    type: string;
    name: string;
  };
}) {
  let users;
  if (searchParams.type && searchParams.name) {
    users = userData.filter(
      (user) =>
        user.gender === searchParams.type && searchParams.name === user.name
    );
  } else if (searchParams.type) {
    users = userData.filter((user) => user.gender === searchParams.type);
  }
  return (
    <main className="flex flex-col gap-5">
      <h1>home apge</h1>
      <div className="flex gap-5 flex-col">
        <div>
          <Link
            href={"?type=male"}
            className="bg-slate-500 text-white rounded-full p-2"
          >
            male
          </Link>
          <Link
            href={"?type=female"}
            className="bg-slate-500 text-white rounded-full p-2"
          >
            female
          </Link>
        </div>
        <div>
          {userData.map((user) => (
            <Link
              key={user.id}
              href={`?type=${searchParams.type}&name=${user.name}`}
              className="bg-blue-500 text-white rounded-full p-2"
            >
              {user.name}
            </Link>
          ))}
        </div>
      </div>
      <div>





        
      {users &&
        users.map((el) => (
          <div key={el.id} className="bg-green-500 border rounded-md">
            <h2>{el.name}</h2>
            <p>{el.gender}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
