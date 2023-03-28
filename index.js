let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// myLeads = JSON.stringify(myLeads)
//to push a new thingie in this array now 

// myLeads = JSON.parse(myLeads)
// myLeads.push("www")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("save-btn")
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})



function render(arr){
    let listItems = ""
    for(let i=0;i<arr.length;i++){
        listItems += `
        <li>
            <a target='_blank' href='${arr[i]}'>
                ${arr[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}


// localStorage.clear()
// localStorage.setItem("myLeads"(key),"some link"(value)) 
//localStorage.getItem(key)
//localStorage.clear()
// so this will clear local storage w the site w local storage and the other one will set a new one