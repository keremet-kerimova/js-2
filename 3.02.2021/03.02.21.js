// let  example = document.querySelector('h1');
// let article = document.querySelector('article');
// let paragrafs = document.querySelectorAll('p:nth-child(even)');


// console.log(example.innerText);
// console.log (example.textContent);
// console.log(article.innerHTML);
// console.log(example.outerHTML);

// for( const  paragraf of paragrafs){
//     if (paragraf.className){
//         console.log(paragraf.className);
//     }
//     if (paragraf.id){
//         console.log(paragraf.id);
//     }
// }



// let newParagraph = document.createElement('p');
// newParagraph.innerText = "This is a new paragraph  added by JavaScript";
// article.appent(newParagraph);

// article.prepend(newParagraph);
// article.after(newParagraph)
// article.beforeaa(newParagraph);
// article.replaceWith(newParagraph);


// newParagraph.className = "example-paragraph";
// newParagraph.id = "exampl-id";

// let exampList = ["Apple", "Bananas" ,"Grapes","Lemon"];
// let ul = document.querySelector("ul");
// for ( const fruits of exampList){
// let li = document.createElement("li");
// li.innerText = fruits;
// ul.append(li)
// }


// let exampList2 = [
//     {name:"Apple", weight:20},
//     {name:"Bananas", weight:30},
//     {name:"Grapes", weight:40},
//     {nmae:"Lemon", weight:10},
// ]
// let ul2 = document.querySelector("#example-ul2");
// for (const fruits of exampList2){
//     let li = document.createElement("li");
//     li.innerText = fruits.name + ' - ' + fruits.weight;
//     ul2.append(li)
// }



let exampleList4 = {
   "Apple":10,
   "Bananas":20,
   "Grapes":30,
   "Lemon":10,
}
let ul4 = document.querySelector("#example-ul4");
for (const name of exampleList4){
    let li = document.createElement("li");
    li.innerText = name + ' - ' + exampleList4[number];
    ul4.append(li);
}





let exampleList5 = [
    ["Apple", "Bananas" ,"Grapes","Lemon"],
        [10, 20, 30, 10],
];





let exampleList6 = [
    {type:"header", cells:["Apple", "Bananas" ,"Grapes","Lemon"]},
    {type:"row", cells:[10, 20, 30, 10]},
];