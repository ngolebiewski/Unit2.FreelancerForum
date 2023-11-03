const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Prof. Bob Ross", price: 175, occupation: "illustrator" },
];

/////////////////////////////////////////////////////////////////////////////
//Function to calculate the average starting price of the freelancers' array?
  //forEach
    //reduce method on freelancers array. 
    //returns sum of all prices/length of freelancers array. --> round to 2 decimal places too.

const averagePrice = (freelancers) => {
  const sumAllPrices = freelancers.reduce((acc, userInfo) => acc += userInfo.price, 0);
  return (sumAllPrices/ freelancers.length).toFixed(2);
}

/////////////////////////////////////
//make the top/header section of page

const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
body.appendChild(h1);

const p = document.createElement("p");
p.textContent = `The average starting price is $${averagePrice(freelancers)}`;
body.appendChild(p);

const h2 = document.createElement("h2")
h2.textContent = "Available Freelancers";
body.appendChild(h2);

///////////////////////////////////////////////////////////
//make the "chart" section of the lower half of the webpage

const bigArticle = document.createElement("article");
body.appendChild(bigArticle);

//make the containers for the freelancer info table
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

//place the divs for the freelancer info in the bigArticle
bigArticle.appendChild(div1);
bigArticle.appendChild(div2);
bigArticle.appendChild(div3);

//make a function to get info from freelancer array to plug into the arrays as HTML
//Reference on the web: https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
//because it would be repetitive to have to make a zillion <li> elements in 3 unordered lists

const freelanceInfoMaker = (freelancer, key) => {
  let htmlInfoString = `<div><h3>${key}</h3>`;
  if (key === "price") freelancer.forEach(element => htmlInfoString += `<p>$${element[key]}</p>`);
  else freelancer.forEach(element => htmlInfoString += `<p>${element[key]}</p>`);
  return htmlInfoString + `</div>`;
}

//now use the function above to put in that text
div1.outerHTML = freelanceInfoMaker(freelancers, "name");
div2.outerHTML = freelanceInfoMaker(freelancers, "occupation");
div3.outerHTML = freelanceInfoMaker(freelancers, "price");

/////////
//STYLIN'
body.setAttribute("style", "background-color: #EEEEEE; font-family: futura, helvetica, sans-serif; text-align: center; display: flex; align-items: center; flex-direction: column;");

h1.style.fontSize = "2.5em";

bigArticle.setAttribute("style", "display: flex;flex-wrap: nowrap;flex-direction: row;justify-content: center;align-items: flex-start; border: 2px solid magenta; width: 70%; min-width: 550px;")

const allDivs = document.querySelectorAll("div");
allDivs.forEach(div => div.setAttribute("style", "width: 30%; max-width: 200px; margin: 3%; text-align: center;"));

/////////////////////////////////////
/* //TESTING OUT THE "OUTERHTML" METHOD
bigArticle.id = "funky-pumpkin-party";
const weirdTest = document.getElementById("funky-pumpkin-party");
weirdTest.outerHTML = "<p>hey hey</p><p>test hey</p><p>YO YO YO YO</p><p>many lines</p>";
 */