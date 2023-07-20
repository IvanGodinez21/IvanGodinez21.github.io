export async function getRepos(query: { page: number }) {
  return await $fetch('/api/repos', {
    method: 'GET',
    query,
  });
}
