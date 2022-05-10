// document.cookie = "name=Sarkhan;"
// document.cookie = "age=27;"


function getItemCookie(key) {

    let cookieArr = document.cookie.split(';')

    for (element of cookieArr) {
        let elArr = element.split('=')

        if (elArr[0].trim() === key) {
            return elArr[1];
        }
    }

}

function setItemCookie(key, value) {
    document.cookie = key + '=' + value + ";"
}

setItemCookie("moodle","Wasf3746ksd")


let a = getItemCookie("name")


console.log(a);