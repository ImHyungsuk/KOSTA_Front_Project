// DOM 요소
const fruitList = document.getElementById("fruitList");
const veggieList = document.getElementById("veggieList");

const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let veggiePage = 0;

// 카드 렌더링 함수
function renderProducts(data, container) {
  //data는 과일 또는 야채의 배열
  console.log(data);
  container.innerHTML = "";
  data.forEach((item) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
        <a href="detail.html?id=${item.id}" class="text-decoration-none text-dark">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-primary fw-bold">${item.price.toLocaleString()}원</p>
          </div>
          </a>
        </div>
      </div>`;
  });
}
////////아래 filterAndSortFruits() 와 loadVeggies() 완성하세요. /////////////////////////////////
/* 
  과일 출력
*/
function filterAndSortFruits() {
  //화면에 다시 출력
  //renderProducts(?, ?);
  const filterFruits =
    searchBox.value === ""
      ? [...fruits]
      : fruits.filter((f) => f.name.includes(searchBox.value));
  filterFruits.sort((a, b) => {
    if (sortSelect.value === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortSelect.value === "low") {
      return a.price - b.price;
    } else if (sortSelect.value === "high") {
      return b.price - a.price;
    }
  });
  renderProducts(filterFruits, fruitList);
}

// 채소 출력 (3개씩 증가)
function loadVeggies() {
  if (veggiePage >= veggies.length) {
    alert("더이상 상품이 없습니다.");
    return;
  }
  veggiePage += 3;
  const newVeggies = veggies.slice(0, veggiePage);
  //화면에 다시 출력
  //renderProducts(?, ?);
  renderProducts(newVeggies, veggieList);
}
////////////////////////////////////////////////////////

// 이벤트 리스너
searchBox.addEventListener("input", filterAndSortFruits);
sortSelect.addEventListener("change", filterAndSortFruits);
loadMoreBtn.addEventListener("click", loadVeggies);

// 초기 실행
filterAndSortFruits();
loadVeggies();
