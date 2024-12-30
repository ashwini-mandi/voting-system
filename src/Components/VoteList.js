import React from "react";
import { useVotes } from "./VoteContext";

const monitors = ["suresh", "deepak", "vinut"]; // Static list of monitors

const VoteList = () => {
  const { votes, deleteVote, monitorVoteCounts, totalVotes } = useVotes();
  console.log(votes, "number", totalVotes);

  return (
    <div className="p-4 bg-light rounded shadow">
      <h3>Votes</h3>
      {monitors.map((monitor) => (
        <div key={monitor} className="mb-3">
          {/* Monitor name with vote count */}
          <h5>
            {monitor}{" "}
            <span className="badge bg-primary">
              {monitorVoteCounts[monitor] || 0} votes
            </span>
          </h5>

          <ul className="list-group">
            {/* List voters or show a placeholder */}
            {votes[monitor] && votes[monitor].length > 0 ? (
              votes[monitor].map((voter) => (
                <li
                  key={voter}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {voter}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteVote(monitor, voter)}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-muted">
                No votes yet for {monitor}
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default VoteList;
