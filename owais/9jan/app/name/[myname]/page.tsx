import React from "react";

export default function MyName({ param }: { param: { myname: string } }) {
  return <div>this is from url {param.myname}</div>;
}
