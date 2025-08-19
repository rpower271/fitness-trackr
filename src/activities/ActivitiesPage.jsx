import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import ActivitiesList from "./ActivitiesList";

export default function ActivitiesPage() {
  return (
    <>
      <h1>Activities</h1>
      <div className="fun-list">
        <ActivitiesList />
      </div>
    </>
  );
}
