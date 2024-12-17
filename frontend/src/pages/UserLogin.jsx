import React from "react";

const userLogin = () => {
  return (
    <div>
      <form>
        <h3>What's your Email?</h3>
        <input required type="email" placeholder="email@example.com" />
      </form>
    </div>
  );
};

export default userLogin;
