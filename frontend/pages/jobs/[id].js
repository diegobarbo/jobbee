import Layout from "../../components/layout/Layout";
import JobDetails from "../../components/job/JobDetails";

import axios from "axios";

export default function JobDetailsPage({ job, candidates }) {
  return (
    <Layout>
      <JobDetails job={job} candidates={candidates} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`);

  const job = res.data.job;
  const candidates = res.data.candidates;

  return {
    props: {
      job,
      candidates,
    },
  };
}