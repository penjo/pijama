//Khai báo các module cần thiết
var multer = require('multer'); //Khai báo multer để có thể thực hiện thao tác với file
const bcrypt = require('bcryptjs'); //Khai báo bcrypt để sử dụng mã hóa password

//Khai báo storage trong multer để thực hiện thao tác với file
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        //Lưu tên file với prefix unique
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = Buffer.from(file.originalname, 'latin1').toString(
            'utf8',
        )
        cb(null, uniquePrefix + '_' + fileName);
        //Lưu tên file bằng tên của file trong máy gửi lên hiện tại
        //cb(null, file.originalname);
    }
});
// const storage = multer.memoryStorage();  

//Khai báo upload truyền vào storage đã khai báo ở trên
const upload = multer({ storage: storage });

//Function kiểm tra object có properties mình cần hay không
//Nếu có: trả về value của properties đó
//Nếu không: trả về value mặc định mà mình gán (defaultValue)
const getParam = (params, properties, defaultValue) => {
    if (params.hasOwnProperty(properties) && params[properties] !== undefined) {
        return params[properties];
    }
    return defaultValue;
}

//Function format date theo định dạng dd/MM/yyyy HH:mm:ss
const formatDate = (date, isShowHour) => {
    const today = new Date(date);
    const year = today.getFullYear();
    let month = twoCharacterFormatWithDigits(today.getMonth() + 1); // Months start at 0!
    let day = twoCharacterFormatWithDigits(today.getDate());
    const hour = twoCharacterFormatWithDigits(today.getHours());
    const minute = twoCharacterFormatWithDigits(today.getMinutes());
    const second = twoCharacterFormatWithDigits(today.getSeconds());
    if (isShowHour) {
        return day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    }
    return day + '/' + month + '/' + year;
}

//Function hash password bằng bcrypt
const hashPassword = async (strPassword) => {
    const saltRounds = 10; //Số vòng dao động, số vòng dao động càng lớn thì thời gian băm càng lâu
    const salt = await bcrypt.genSalt(saltRounds);
    const password = await bcrypt.hash(strPassword, salt);
    return password;
}

//Function so sánh 2 password
const comparePassword = (strPasswordA, strPasswordB) => {
    console.log(strPasswordA, strPasswordB)
    const bResult = bcrypt.compare(strPasswordA, strPasswordB);
    return bResult;
}

//Function format 2 kí tự đối với chữ số (nếu nhỏ hơn 10 thì sẽ có kí tự 0 phía trước)
const twoCharacterFormatWithDigits = (strValue) => {
    if (strValue < 10) {
        strValue = '0' + strValue;
    }
    return strValue;
}


module.exports = {
    upload: upload,
    getParam: getParam,
    formatDate: formatDate,
    hashPassword: hashPassword,
    comparePassword: comparePassword,
    twoCharacterFormatWithDigits: twoCharacterFormatWithDigits,
}