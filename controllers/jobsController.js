const createJob = async (req, res) => {
  await res.send("createJob");
};

const getAllJobs = async (req, res) => {
  await res.send("getAllJobs");
};

const deleteJob = async (req, res) => {
  await res.send("deleteJob");
};

const updateJob = async (req, res) => {
  await res.send("updateJob");
};

const showStats = async (req, res) => {
  await res.send("showStats");
};

export { createJob, getAllJobs, deleteJob, updateJob, showStats };
