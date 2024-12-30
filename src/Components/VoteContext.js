import React, { createContext, useContext, useState } from "react";

const VotesContext = createContext();

export const VotesProvider = ({ children }) => {
  const [votes, setVotes] = useState({});
  const [monitorVoteCounts, setMonitorVoteCounts] = useState({}); // To track votes for each monitor
  const [totalVotes, setTotalVotes] = useState(0); // To track total votes

  // Add vote for a monitor and voter
  const addVote = (monitor, voter) => {
    setVotes((prevVotes) => {
      const updatedVotes = {
        ...prevVotes,
        [monitor]: [...(prevVotes[monitor] || []), voter],
      };

      // Recalculate vote counts for each monitor
      const updatedMonitorVoteCounts = {};
      let total = 0; // Variable to store total votes

      Object.entries(updatedVotes).forEach(([monitor, voters]) => {
        updatedMonitorVoteCounts[monitor] = voters.length; // Count votes for each monitor
        total += voters.length; // Add to total votes
      });

      setMonitorVoteCounts(updatedMonitorVoteCounts); // Update monitor vote counts
      setTotalVotes(total); // Update total vote count
      return updatedVotes;
    });
  };

  // Delete vote for a specific monitor and voter
  const deleteVote = (monitor, voter) => {
    setVotes((prevVotes) => {
      const updatedVotes = {
        ...prevVotes,
        [monitor]: prevVotes[monitor].filter((name) => name !== voter),
      };

      // Recalculate vote counts for each monitor
      const updatedMonitorVoteCounts = {};
      let total = 0; // Variable to store total votes

      Object.entries(updatedVotes).forEach(([monitor, voters]) => {
        updatedMonitorVoteCounts[monitor] = voters.length; // Count votes for each monitor
        total += voters.length; // Add to total votes
      });

      setMonitorVoteCounts(updatedMonitorVoteCounts); // Update monitor vote counts
      setTotalVotes(total); // Update total vote count
      return updatedVotes;
    });
  };

  return (
    <VotesContext.Provider
      value={{
        votes,
        monitorVoteCounts,
        totalVotes, // Provide total votes
        addVote,
        deleteVote,
      }}
    >
      {children}
    </VotesContext.Provider>
  );
};

export const useVotes = () => useContext(VotesContext);
