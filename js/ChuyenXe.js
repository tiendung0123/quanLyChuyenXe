// Tạo lớp đối tượng các chuyến xe, có tham số
function ChuyenXe (_soXe, _soCont, _ngayChay, _tienCuoc, _tuyenDuong) {
    // Khai báo các thuộc tính trong lớp đối tượng, cần có this.tenThuocTinh
    this.soXe = _soXe;
    this.soCont = _soCont;
    this.ngayChay = _ngayChay;
    this.tienCuoc = _tienCuoc;
    this.tuyenDuong = _tuyenDuong;
}