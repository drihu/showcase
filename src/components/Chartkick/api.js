const getRepos = async () => {
  const response = await fetch(
    `https://github-trending-api.now.sh/repositories?since="2020-01-01"`
  );
  return response.json();
};

export { getRepos };
