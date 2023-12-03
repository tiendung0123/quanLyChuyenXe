// Tạo lớp đối tượng danh sách các chuyến xe
function DSCX() {
    this.arr = [];

    this.themCX = function (cx) {
        this.arr.push(cx);
    };

    this.timViTriCX = function (id) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            const cx = this.arr[i];
            if (cx.soCont === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    this.xoaCX = function (id) {
        const index = this.timViTriCX(id);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.layThongTinCX = function (id) {
        const index = this.timViTriCX(id);
        if (index !== -1) {
            return this.arr[index];
        }
        return null
    };

    this.capNhatCX = function (cx) {
        const index = this.timViTriCX(cx.soCont);
        if (index !== -1) {
            this.arr[index] = cx;
        }

    };

    this.timKiemCX = function (keyword) {
        var mangTimKiem = [];
        for(var i = 0; i < this.arr.length; i++) {
            const cx = this.arr[i];

            const keywordLower = keyword.toLowerCase();

            const soXeLower = cx.soXe.toLowerCase();

            const indexLower = soXeLower.indexOf(keywordLower);

            if(indexLower != -1) {
                mangTimKiem.push(cx);
            }
        }
        return mangTimKiem;

    };

}