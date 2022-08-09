export async function loadCoins() {
  const res = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=20"
  );
  const data = await res.json();
  return data;
}
// export async function loadCoin(){
//   const res =  await fetch(`https://api.coinstats.app/public/v1/coins/${params.id}`)
// }
