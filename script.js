
const form = document.getElementById("bookForm");
const successMessage = document.getElementById("successMessage");

let participants = 0;
let books = 0;
let reviews = 0;


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const className = document.getElementById("className").value;
    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;
    const comment = document.getElementById("comment").value;


    // Hiện tại chỉ lưu tạm trên trình duyệt
    console.log({
        name: name,
        className: className,
        bookName: bookName,
        author: author,
        comment: comment,
        time: new Date()
    });


    // Cập nhật số liệu minh họa
    participants++;
    books++;
    reviews++;

    document.getElementById("participants").textContent = participants;
    document.getElementById("books").textContent = books;
    document.getElementById("reviews").textContent = reviews;


    // Ẩn form
    form.style.display = "none";

    // Hiện thông báo
    successMessage.style.display = "block";


    // Đưa người dùng xuống phần kết quả
    document.getElementById("research").scrollIntoView({
        behavior: "smooth"
    });

});



