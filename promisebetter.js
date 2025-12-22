// Old Way (.then)
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

//   New Way (async/await)
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}