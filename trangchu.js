// function boollogout() {
//     let setLogout = localStorage.getItem(`boollogout`);
//     let newBool = JSON.parse(setLogout);
//     if (setLogout == false){
//         window.location.href = "./index.html" ;
//     } else {
//         setLogout = false
//         window.location.href = "./index.html";
//     }

// }



let checkLogin = localStorage.getItem(`boolLogin`);
if(checkLogin == `true`){
    let getIdUser = document.getElementById(`user`);
    let getIndexLogin = Number(localStorage.getItem(`indexLogin`));
    let arrUser = JSON.parse(localStorage.getItem(`information`));
    let userName = arrUser[getIndexLogin].username
    getIdUser.innerHTML = userName;
}
// console.log(checkLogin); 



let data = [{
    image: "./img/anh1.jpg",
    title: "Tủ Decor góc phòng khách",
    price: "50$"
},
{
    image: "./img/anhs2.jpg",
    title: "Tủ Decor cạnh đầu giường",
    price: "65$"
}, 
{
    image: "./img/anhs3.jpg",
    title: "Tủ để giày",
    price: "60$"
}, 
{
    image: "./img/anhs4.jpg",
    title: "Tủ để giày-ss2",
    price: "60$"
}, 
{
    image: "./img/anhs6.jpg",
    title: "Tủ sách-s2",
    price: "105$"
},
{
    image: "./img/anhz1.jpg",
    title: "Bàn làm việc",
    price: "105$"
}, 
{
    image: "./img/anhz4.jpg",
    title: "Giường ",
    price: "75$"
}, 
{
    image: "./img/anhz5.jpg",
    title: "Bàn làm việc",
    price: "100$"
}, 
{
    image: "./img/anhs9.jpg",
    title: "Kệ Tivi-EZ-2",
    price: "75$"
}, 
{
    image: "./img/anhs10.jpg",
    title: "Tủ quần áo",
    price: "69$"
}, 
{
    image: "./img/anhz6.jpg",
    title: "Ghế sofa",
    price: "102$"
}, 
{
    image: "./img/anhs12.jpg",
    title: "Tủ để sách-(decor)",
    price: "85$"
}, 
{
    image: "./img/anhz8.jpg",
    title: "Ghế sofa(2)",
    price: "60$"
}, 
{
    image: "./img/anhs14.jpg",
    title: "Tủ để dày dép",
    price: "75$"
}, 
{
    image: "./img/anhz11.jpg",
    title: "Ghế đơn",
    price: "43$"
}, 
{
    image: "./img/anhz10.jpg",
    title: "Bàn trang điểm ",
    price: "95$"
}, 
{
    image: "./img/anhz13.jpg",
    title: "giường-zz ",
    price: "85$"
}, 
{
    image: "./img/anhz14.jpg",
    title: "Bàn-yy",
    price: "65$"
}, 
{
    image: "./img/anhz15.jpg",
    title: "Bàn mini-ix ",
    price: "55$"
}, 
{
    image: "./img/anhz16.jpg",
    title: "Bàn trang điểm-zz2 ",
    price: "75$"
}, 
{
    image: "./img/anhzx0.jpg",
    title: "Bàn tròn-aa ",
    price: "85$"
}, 
{
    image: "./img/anhzx1.jpg",
    title: "Giá đựng đồ trang trí ",
    price: "65$"
}, 
{
    image: "./img/anhzx2.jpg",
    title: "Giá đựng đồ trang trí-(2) ",
    price: "66$"
},
{
    image: "./img/anhjs.jpg",
    title: "Giá đựng đồ trang trí + sách ",
    price: "88$"
}
]
// show toàn bộ list sản phẩm .
function showListProduct() {
    let result = "";
    let showCart = document.getElementById("showCart");
    for (let i = 0; i < data.length; i++) {
        result += `
        <div class="item1">
            <div class="card-imge">
                <img src=${data[i].image} alt="hình ảnh">
            </div>
            <div><h3>${data[i].title}</h3></div>
            <div class="card-display">
                <div class="card-icon"><i class="fa-regular fa-heart"></i></div>
                <div class="card-price">${data[i].price}</div>
            </div>
            <div class="card-onclick">
                <div class="click-box1">Thêm vào giỏ hàng</div>
                <div class="click-box2">Xem chi tiết</div>
            </div>
        </div>
      `
    }
    showCart.innerHTML = result;
}
showListProduct();
// search theo tên sản phẩm


function search() {
    let inputValue = document.getElementById("search").value.toLocaleLowerCase();
    console.log(inputValue);
    let showCart = document.getElementById("showCart");
    let result = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLocaleLowerCase().includes(inputValue)) {
            result += `
            <div class="item1">
                <div class="card-imge">
                    <img src=${data[i].image} alt="hình ảnh">
                </div>
                <div><h3>${data[i].title}</h3></div>
                <div class="card-display">
                    <div class="card-icon"><i class="fa-regular fa-heart"></i></div>
                    <div class="card-price">${data[i].price}</div>
                </div>
                <div class="card-onclick">
                    <div class="click-box1">Thêm vào giỏ hàng</div>
                    <div class="click-box2">Xem chi tiết</div>
                </div>
            </div>
          `
       
    }
}
    showCart.innerHTML =result;
   
}
