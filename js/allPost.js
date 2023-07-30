const url = 'https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts';
const inputVal = document.querySelector('.input');
const postList = document.querySelector('.post-list');

async function getAllPosts() {
    try {
      const res = await axios.get(url);
      // console.log(res.data);
    } catch (err) {
      // console.log(err.name, err.message);
    }
  }

  getAllPosts();

async function sortPosts(by) {
    try {
      const res = await axios.get(url, {
        params: {
          orderBy: by,
          order: 'asc',
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.name, err.message);
    }
  }
  // sortPosts('title');



//  FILTER POSTS
async function filterPosts(text) {
    try {
      const res = await axios.get(url, {
        params: {
          filter: text,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.name, err.message);
    }
  }
  filterPosts('cumque');


// let loading = false;
async function getAllPostsByLoading() {
  // loading = true;
  try {
    const res = await axios.get(url);
    // loading = false;
    displayPosts(res.data);
    // loadingFunc();
  } catch (err) {
    // loading = false;
    console.log(err.name, err.message);
    // loadingFunc();
  }
}  
getAllPostsByLoading();



// LOADING FUNCTION
// loadingFunc();
// function loadingFunc() {
//   if (loading) {
//     document.querySelector('.loading').style.display = 'block';
//   } else {
//     document.querySelector('.loading').style.display = 'none';
//   }
// }


  function displayPosts(posts) {
    let str = '';
    posts.forEach((post) => {
      str += `
      <div class="data w-100 h-50 d-flex gap-5 mb-5 border"> 
        
      <div class=" w-25 h-25">  
              <img class="w-auto h-100" src='${post.img}' />
        </div>

        <div class="body w-75 h-auto">
                <h3 class="text-primary text-uppercase"> ${post.category}</h3><br><br>
                <h2>${post.title}</h2><br>
                <h4 class=" lh-LG">${post.body}</h4> 
        </div>      
       </div>
          `;
    });
    
    
    postList.innerHTML = str;
  }
