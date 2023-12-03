const dscx = new DSCX();

getLocalStorage();

// function để rút gọn câu lệnh DOM từ id.
function getEle(id) {
    return document.getElementById(id);
}

function layThongTinCX() {
    const _soXe = getEle("txtsoXe").value;
    const _soCont = getEle("txtSoCont").value;
    const _ngayChay = getEle("txtNgayChay").value;
    const _tienCuoc = getEle("txtTienCuoc").value;
    const _tuyenDuong = getEle("txtTuyenDuong").value;

    // Tạo đối tượng chuyến xe (cx) từ lớp đối tượng ChuyenXe

    const cx = new ChuyenXe(_soXe, _soCont, _ngayChay, _tienCuoc, _tuyenDuong);

    return cx;
}

// function renderUI
function renderUI(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        const cx = data[i];
        content += `
        <tr>
            <td>${cx.soXe}</td>
            <td>${cx.ngayChay}</td>
            <td>${cx.soCont}</td>
            <td>${cx.tuyenDuong}</td>
            <td>${cx.tienCuoc}</td>
            <td>
            <button class="btn btn-info" onclick="handleEdit('${cx.soCont}')">Sửa</button>
            <button class="btn btn-danger" onclick="handleDelete('${cx.soCont}')">Xóa</button>
            </td>
        </tr>
         `;
    }

    getEle("tbodyChuyenXe").innerHTML = content;

    // hiển thị thông tin của mảng arr
}

function handleThemChuyen() {
    //lấy thông tin chuyến xe
    const cx = layThongTinCX();

    dscx.themCX(cx);

    renderUI(dscx.arr);

    setLocalStorage();

}

function setLocalStorage() {
    //convert data từ JSON => string
    const dataString = JSON.stringify(dscx.arr);
    // lưu data xuống localStorage
    localStorage.setItem("DSCX", dataString);

}

function getLocalStorage() {
    const dataString = localStorage.getItem("DSCX");

    if (dataString) {
        //convert ngược lại từ string => json
        const dataJson = JSON.parse(dataString);
        //Phục hồi data cho dssv.arr
        dscx.arr = dataJson;
        // render lại UI
        renderUI(dscx.arr);

    }

}

function handleDelete(id) {
    // xóa cx
    dscx.xoaCX(id);
    // render lại tbody
    renderUI(dscx.arr);
    // lưu data xuống localStorage
    setLocalStorage();
}

function handleEdit(id) {
    const cx = dscx.layThongTinCX(id);

    if (cx !== null) {
        getEle("txtsoXe").value = cx.soXe;
        getEle("txtSoCont").value = cx.soCont;
        getEle("txtNgayChay").value = cx.ngayChay;
        getEle("txtTienCuoc").value = cx.tienCuoc;
        getEle("txtTuyenDuong").value = cx.tuyenDuong;
    }
}

function handleCapNhatChuyenXe() {
    const cx = layThongTinCX();
    dscx.capNhatCX(cx);

    renderUI(dscx.arr);

    setLocalStorage();
}

getEle("txtSearch").addEventListener("keyup", function () {
    const keyword = getEle("txtSearch").value;
    // tìm kiếm cx
    const mangTimKiem = dscx.timKiemCX(keyword);
    //render lai tbody
    renderUI(mangTimKiem)
})



