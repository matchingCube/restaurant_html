function search_func() {
    var input, filter, ul, li, a, i, txtval;
    input = document.getElementById("search_dish");
    filter = input.value.toUpperCase();
    ul = document.getElementById("dish_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtval = a.textContent || a.innerText;
        if (txtval.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}