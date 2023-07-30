const url = 'https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts';

const postList = document.querySelector('.post-list');

async function getAllPosts() {
    try {
      const res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.log(err.name, err.message);
    }
  }

//   getAllPosts();

let loading = false;
async function getAllPostsByLoading() {
  loading = true;
  try {
    const res = await axios.get(url);
    loading = false;
    displayPosts(res.data);
    
    loadingFunc();
  } catch (err) {
    loading = false;
    console.log(err.name, err.message);
    loadingFunc();
  }
}
getAllPostsByLoading();

// LOADING FUNCTION
loadingFunc();
function loadingFunc() {
  if (loading) {
    document.querySelector('.loading').style.display = 'block';
  } else {
    document.querySelector('.loading').style.display = 'none';
  }
}


  function displayPosts(posts) {
    const a = posts.data.sort((a, b) => b.rating - a.rating);
      let str = '';
      for (let i = 0; i <= 2; i++) {
        const date = new Date(a[i].createdDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        str += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img
            src="${a[i].img}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-date">
              By <span> </span> | ${date} | Rating : ${a[i].rating}
            </p>
            <h5 class="card-title"> ${a[i].title}</h5>
            <p class="card-text">
            ${a[i].body}
            </p>
          </div>
        </div>
      </div>
        `;
        postList.innerHTML = str;
      }
  }

  // function displayPosts(response) {
  //   const a = response.data.sort((a, b) => b.rating - a.rating);
  //   let str = "";
    // for (let i = 0; i <= 2; i++) {
    //   const date = new Date(a[i].createdDate).toLocaleDateString("en-US", {
    //     year: "numeric",
    //     month: "short",
    //     day: "numeric",
    //   });
    //   str += `
    //   <div class="col-12 col-md-6 col-lg-4">
    //   <div class="card">
    //     <img
    //       src="${a[i].img}"
    //       class="card-img-top"
    //       alt="..."
    //     />
    //     <div class="card-body">
    //       <p class="card-date">
    //         By <span> </span> | ${date} | Rating : ${a[i].rating}
    //       </p>
    //       <h5 class="card-title"> ${a[i].title}</h5>
    //       <p class="card-text">
    //       ${a[i].body}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    //   `;
    //   postList.innerHTML = str;
    // }
  