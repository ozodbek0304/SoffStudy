let products = [
  {
    id: 1,
    title: "Next.js is the future of React",
    data: "2h ago",
    status: ["Draft", "Pablished"],
  },
  {
    id: 2,
    title: "Why do you need Lint?",
    data: "sunday",
    status: ["Pablished", null],
  },
  {
    id: 3,
    title: "React.js vs Vue.js, what’s better for you next project?",
    data: "yesterday",
    status: ["Draft", null],
  },
  {
    id: 4,
    title: "Next.js is the future of React",
    data: "4 week ago",
    status: ["Pablished", null],
  },
  {
    id: 5,
    title: "Pixel-perfect development at Zoftify. Essential steps to take.",
    data: "4h ago",
    status: ["Draft", "Pablished"],
  },
  {
    id: 6,
    title: "Why do you need Lint?",
    data: "2 week ago",
    status: ["Pablished", "Draft"],
  },
  {
    id: 7,
    title: "Next.js is the future of React",
    data: "yesterday",
    status: ["Draft", null],
  },
  {
    id: 8,
    title: "Pixel-perfect development at Zoftify. Essential steps to take.",
    data: "3 week ago",
    status: ["Pablished", null],
  },
  {
    id: 9,
    title: "React.js vs Vue.js, what’s better for you next project?",
    data: "5 week ago",
    status: ["Draft", "Pablished"],
  },
  {
    id: 10,
    title: "Why do you need Lint?",
    data: "6h ago",
    status: ["Pablished", "Draft"],
  },
  {
    id: 11,
    title: "Pixel-perfect development at Zoftify. Essential steps to take.",
    data: "11 week ago",
    status: ["Draft", null],
  },
  {
    id: 12,
    title: "Next.js is the future of React",
    data: "7 week ago",
    status: ["Pablished", null],
  },
  {
    id: 13,
    title: "React.js vs Vue.js, what’s better for you next project?",
    data: "yesterday",
    status: ["Draft", "Pablished"],
  },
  {
    id: 14,
    title: "Why do you need Lint?",
    data: "2 week ago",
    status: ["Pablished", "Draft"],
  },
  {
    id: 15,
    title: "Next.js is the future of React",
    data: "2h ago",
    status: ["Draft",null],
  },
];

let table = document.querySelector("#table");
let tbody = document.querySelector("tbody");
let search = document.querySelector("#search");
let section = document.querySelector("#section");
let section1 = document.querySelector("#section1");
let newForm = document.querySelector("#newForm");
let createPost = document.querySelector("#createPost");
let allStatus = document.querySelector("#allStatus");
let allSpan = document.querySelector(".allSpan");
let allDraft = document.querySelector("#allDraft");
let drafSpan = document.querySelector(".drafSpan");
let allPublish = document.querySelector("#allPublish");
let pablishSpan = document.querySelector(".pablishSpan");
let create = document.querySelector(".create");
let newPost = document.querySelector(".newPost");
let posts = document.querySelector("#posts");
let newPost1 = document.querySelector("#newPost1");
let btnSpan = document.querySelector(".btnSpan");
 newPost1.style.display = "none";
section1.style.display = "none";

function render(items) {
  tbody.innerHTML = ""    
    items.forEach(item => {
      let tr = document.createElement("tr");
      let thId = document.createElement("th");
      let tdTitle = document.createElement("td");
      let tdData = document.createElement("td");
      let tdDescription = document.createElement("td");
      let select = document.createElement("select");
      let option1 = document.createElement("option");
     let option2 = document.createElement("option");
     select.classList.add("form-select","border-0","fs-5")   
        
    thId.innerText = item.id;
    tdTitle.innerText = item.title;
    tdData.innerText = item.data;
    option1.innerText = item.status[0];     
    option2.innerText = item.status[1]; 
    
        select.appendChild(option1);
        select.appendChild(option2);
        tdDescription.appendChild(select);
        tr.appendChild(thId);
        tr.appendChild(tdTitle);
        tr.appendChild(tdData);
        tr.appendChild(tdDescription);
        tbody.appendChild(tr);
        table.appendChild(tbody);

 })
} render(products);

search.addEventListener("input", function (e) {
    let text = e.target.value;
    let searchFiltir = products.filter(item => {
        return (
            item.title.toLowerCase().includes(text.toLowerCase())
        );
    })
    console.log(searchFiltir);
    render(searchFiltir);
});

createPost.addEventListener("click", function (e) {
    e.preventDefault();
    section.style.display = "none";
  section1.style.display = "block"
    posts.style.display = "none";
    newPost1.style.display = "block";
    
});

newForm.addEventListener("submit", function (e) {
  e.preventDefault();

  products.push({
    id: document.querySelector("#newId").value,
    title: document.querySelector("#newtitle").value,
    data: document.querySelector("#newDate").value,
    categories: document.querySelector("#newCategories").value,
    categories1: document.querySelector("#newCategories1").value ,
  });
  section1.style.display = "none";
  section.style.display = "block";
  render(products);
  document.querySelector("#newId").value = "";
  document.querySelector("#newtitle").value = "";
  document.querySelector("#newDate").value = "";
  document.querySelector("select").value="";
});

allStatus.addEventListener("click", function (e) {
  e.preventDefault();
  let allFilter = products.filter(item => {
    return (
      item.categories
    );
  })
  allSpan.innerText = allFilter.length;
  render(allFilter)
});

allDraft.addEventListener("click", function (e) {
  e.preventDefault();
  let allFilter = products.filter((item) => {
    return item.categories.includes("Draft");
  });
  drafSpan.innerText= allFilter.length;
  render(allFilter);
  console.log(allFilter);
});

allPublish.addEventListener("click", function (e) {
  e.preventDefault();
  let allFilter = products.filter((item) => {
    return item.categories.includes("Pablished")
  });
  pablishSpan.innerText = allFilter.length;
  render(allFilter);
});

create.addEventListener("click", function () {
  section.style.display = "block";
  section1.style.display = "none";
  posts.style.display = "block";
  newPost1.style.display = "none";
});

newPost.addEventListener("click", function () {
  section.style.display = "none";
  section1.style.display = "block";
  posts.style.display = "none";
  newPost1.style.display = "block";
});

btnSpan.addEventListener("click", function () {
  section.style.display = "block";
  section1.style.display = "none";
  posts.style.display = "block";
  newPost1.style.display = "none";
});