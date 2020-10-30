let pageNumJson = 'placeholderForJinjaGeneration';

function setUpPageNumNavigation() {
    console.log('setting up');
    let pageNumElement = document.getElementById("page-num-clickable");
    let pageNum = pageNumElement.innerHTML;
    let height = pageNumElement.getBoundingClientRect().height;
    pageNumElement.onclick = function() {
        let offsetTop = pageNumElement.offsetTop;
        let offsetLeft = pageNumElement.offsetLeft;
        console.log(offsetTop, offsetLeft, pageNum);
        let background = document.createElement('div');
        background.style.cssText = `width:100%;height:100%;z-index:98;opacity:0.3;background:#000;position:fixed;left:0;top:0;`;
        let changePageNum = document.createElement('div');
        styleText = `position:sticky;width:auto;height:${height*1.2}px;z-index:100;top:${offsetTop}px;left:${offsetLeft}px;background:blue;color:snow;`;
        changePageNum.style.cssText = styleText;
        console.log(changePageNum.style.cssText);
        console.log(styleText);
        changePageNum.innerHTML = `<form id="new-page-num-form"><label for="pagenum">Go to Page: </label><input type="text" style="background:white;color:black;width:4em;" name="pagenum" value="${pageNum}"></form>`;
        background.appendChild(changePageNum);
        document.body.appendChild(background);
        form = document.getElementById("new-page-num-form");
        form.onsubmit = function(e) {
            console.log('hi');
            let newPageNum = form.pagenum.value;
            console.log(newPageNum);
            e.stopPropagation();
            e.preventDefault();
            if (!(newPageNum in pageNumJson)) {
                alert("Did not find page " + newPageNum + " on this site!");
                return;
            }
            newPagePath = "../" + pageNumJson[newPageNum];
            console.log(newPagePath);
            window.open(newPagePath, "_self");
        };

        changePageNum.onclick = function(e) {
            e.stopPropagation(); // Prevent closing the page num changer when you click on the div itself, rather than on the background
        }
        background.onclick = function() {
            document.body.removeChild(background);
        }
    }
};

setUpPageNumNavigation();