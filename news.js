// // const url = 'https://bing-search-apis.p.rapidapi.com/api/rapid/web_search?keyword=how-to-use-excel-for-free&page=0&size=30';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '38af4452ccmsh1c1864bc19850b0p1e7f5fjsn24084f63bae0',
// // 		'X-RapidAPI-Host': 'bing-search-apis.p.rapidapi.com'
// // 	}
// // };

// // try {
// // 	const response =  fetch(url, options);
// // 	const result =  response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }


// async function getNews(){
//     const url = 'https://bing-search-apis.p.rapidapi.com/api/rapid/web_search?keyword=how-to-use-excel-for-free&page=0&size=30';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '38af4452ccmsh1c1864bc19850b0p1e7f5fjsn24084f63bae0',
// 		'X-RapidAPI-Host': 'bing-search-apis.p.rapidapi.com'
// 	}
// };

// try {
//     let demoTag = document.getElementById("demo")
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	const newsArr = result.data.items
//     console.log(newsArr)
//     newsArr.map((item,) => {
//         console.log(item)
//         let p = document.createElement("p");
//         demoTag.append(`${item.title} - ${item.description}`, p)
        
//     })
    
// } catch (error) {
// 	console.error(error);
// }
// }