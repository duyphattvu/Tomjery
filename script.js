function showMembers() {
    // Kiểm tra xem box đã được tạo chưa
    let box = document.getElementById('customBox');
    
    // Nếu chưa có, tạo mới
    if (!box) {
        box = document.createElement('div');
        box.id = 'customBox';  // Đặt id để dễ nhận diện
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.gap = '20px';
        box.style.padding = '20px';
        box.style.border = '2px solid #0077cc';
        box.style.backgroundColor = '#e6f3ff';
        box.style.borderRadius = '12px';
        box.style.marginTop = '20px';
        box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

        // Danh sách thành viên và ảnh
        const members = [
            { name: "Tom", img: "img/anh1.png" },
            { name: "Jerry", img: "img/anh2.png" },
            { name: "Spike", img: "img/anh3.png" }
        ];

        // Thêm ảnh + tên thành viên vào box
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.style.textAlign = 'center';

            const img = document.createElement('img');
            img.src = member.img;  // Đường dẫn ảnh từ thư mục img/
            img.alt = member.name;
            img.style.width = '80px';
            img.style.height = '80px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.marginBottom = '8px';

            const name = document.createElement('p');
            name.textContent = member.name;
            name.style.margin = '0';
            name.style.fontWeight = 'bold';

            memberDiv.appendChild(img);
            memberDiv.appendChild(name);
            box.appendChild(memberDiv);
        });

        document.body.appendChild(box);
    } else {
        // Nếu box đã có, ẩn nó đi
        box.style.display = (box.style.display === 'none') ? 'flex' : 'none';
    }
}

// Gắn sự kiện click vào nút
document.getElementById('actionButton').onclick = showMembers;
