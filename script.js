function toggleSwitch() {
    const switcher = document.getElementById("switcher");
    let index = parseInt(switcher.value);

    index = (index + 1) % 3;
    switcher.value = index;

    document.querySelector(".switch").setAttribute("data-position", index);

}