import React from "react";

export default function MyName({ params }: { params: { myname: string } }) {
  return <div>this is url name {params.myname}</div>;
}
