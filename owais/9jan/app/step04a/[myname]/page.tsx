import React from "react";

export default function MyName({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { id: string };
}) {
  return <div>this is url name {params.myname} </div>;
}
