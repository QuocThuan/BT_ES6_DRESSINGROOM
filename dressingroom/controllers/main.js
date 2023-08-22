
let arrMenu = ['Áo','Quần','Giày Dép','Túi Xách','Dây Chuyền','Kiểu Tóc','Nền'];
let arrIdMenu = ['ao','quan','giay','tuiXach','dayChuyen','toc','nen'];
let arrTenFolder = ['clothes','clothes','shoes','handbags','necklaces','hairstyle','background'];
let arrTenFile = ['topcloth','botcloth','shoes','handbag','necklace','hairstyle','background'];
let arrClass = ['.bikinitop','.bikinibottom','.feet','.handbag','.necklace','.hairstyle','.background'];
let layout = () => {
    let content = '';
    let content2 = '';
    for (  let i = 0; i < arrMenu.length; i++) {
        
        content += 
        `
            <button class="nav-link ${i === 0 ? ' active' : ''}" id="nav-${arrIdMenu[i]}-tab" data-bs-toggle="tab" data-bs-target="#nav-${arrIdMenu[i]}" type="button" role="tab" aria-controls="nav-${arrIdMenu[i]}" aria-selected="${i === 0 ? 'true' : 'false'}">${arrMenu[i]}</button>
        
        `;

        content2 += 
        `
        <div class="tab-pane fade ${i === 0 ? 'show active' : ''} " id="nav-${arrIdMenu[i]}" role="tabpanel" aria-labelledby="nav-${arrIdMenu[i]}-tab" tabindex="0">
            
        </div>
        `;
    }
    document.getElementById('navLayout').innerHTML = content;
    document.getElementById('myTabContent').innerHTML = content2;


    function handleTabClick(event) {
        // Loại bỏ lớp "active" từ tất cả các tab và nội dung
        const allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach(tab => tab.classList.remove('active'));
    
        const allTabContents = document.querySelectorAll('.tab-pane');
        allTabContents.forEach(content => content.classList.remove('active', 'show'));
    
        // Thêm lớp "active" vào tab được chọn và nội dung tương ứng
        const clickedTab = event.currentTarget;
        const targetTabId = clickedTab.getAttribute('data-bs-target');
        const targetTabContent = document.querySelector(targetTabId);
        
        clickedTab.classList.add('active');
        targetTabContent.classList.add('active', 'show',);
    }
    
    // Gắn sự kiện "click" cho tất cả các tab
    const allTabs = document.querySelectorAll('.nav-link');
    allTabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
    
    content = '';

    let renderItem = (so,tenFolder,tenFile,id,tenClass) => {
        let index = 0;
        let tenH5 = tenFile.toUpperCase();
        let tabContent = '';

        for ( let z = 1; z < so ; z++) {
            index = z;
            tabContent += 
            `
            <div class="card w-25" style="width: 18rem;">
                <img src="./../assets/images/${tenFolder}/${tenFile}${index}_show.jpg" class="card-img-top w-100" >
                <div class="card-body">
                    <h4 class="card-title text-center">${tenH5} ${index}</h4>
                    <button href="#" id="${tenFile}${index}" value="${tenFolder}" data-bs-target="${tenClass}" class="btn btn-primary mx-5">Thử đồ</button>
                </div>
            </div>
            `
        }
        console.log(document.getElementById(`${id}-tab-pane`));
        document.getElementById(`nav-${id}`).innerHTML = tabContent;  
    }

    renderItem(7,arrTenFolder[0],arrTenFile[0],arrIdMenu[0],arrClass[0]);
    renderItem(6,arrTenFolder[1],arrTenFile[1],arrIdMenu[1],arrClass[1]);
    renderItem(6,arrTenFolder[2],arrTenFile[2],arrIdMenu[2],arrClass[2]);
    renderItem(4,arrTenFolder[3],arrTenFile[3],arrIdMenu[3],arrClass[3]);
    renderItem(3,arrTenFolder[4],arrTenFile[4],arrIdMenu[4],arrClass[4]);
    renderItem(4,arrTenFolder[5],arrTenFile[5],arrIdMenu[5],arrClass[5]);
    renderItem(8,arrTenFolder[6],arrTenFile[6],arrIdMenu[6],arrClass[6]);
}
layout();


let thuDo = (event) => {
    const idButton =  event.target.id;
    const valueButton = event.target.value;
    const classButton = event.target.getAttribute('data-bs-target');
    console.log(classButton);
    
    console.log('first');
    let classElement = document.querySelectorAll(classButton);
    console.log(classElement);
    classElement.forEach(function(element) {
        element.style.background = `url('./../assets/images/${valueButton}/${idButton}.png')`;
        element.style.backgroundSize = "cover";
        element.style.backgroundRepeat = "no-repeat";
    });
}

const clickButton = document.querySelectorAll('.btn-primary');
clickButton.forEach(button => {
    button.addEventListener('click',thuDo);
})






