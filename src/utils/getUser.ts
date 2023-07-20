export async function getUser() {
  return await $fetch('/api/user', {
    method: 'GET',
  });
}
