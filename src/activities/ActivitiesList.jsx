import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function ActivitiesList() {
  const { data, loading, error } = useQuery("/activities");
  console.log(data);

  return <div>ActivitiesList</div>;
}
