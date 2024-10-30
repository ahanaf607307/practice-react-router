import React from "react";
import { useLoaderData } from "react-router-dom";
import Cd from "./Cd";
function Card() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="pt-10">
      <div>
        <h1 className="text-2xl text-center">
         Data Here :  {users.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                users.map(user => <Cd user={user} />)
            }
        </div>
      </div>
    </div>
  );
}

export default Card;
