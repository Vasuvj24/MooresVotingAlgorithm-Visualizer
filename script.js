function id(id) {
    return document.getElementById(id);
}
var array = [1, 1, 2, 3, 1, 5, 1];
window.onload = () => {
    id("start").addEventListener('click', async() => {
        id("start").style.display="none";
        id("message").innerText = "Main intution behind this algorithm is if a element is repeating than it will repeat N/2 times that it must have occurences which will be left at the reference element at the end when iterated over the array How let us see!"
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 4000)
        )
        id("start").style.display = "none";
        let idcount = 0;
        for (let i = 0; i < array.length; i++) {
            let tile = document.createElement('span');
            tile.id = idcount;
            tile.classList.add("tile");
            tile.innerText = array[i];
            id("container").appendChild(tile);
            idcount++;
            MooresVoting(array,array.length);
        }
    })

}
const MooresVoting = async (array, size) => {
    // console.log("inside function")
    var count = 0;
    var candidate = -1;
    var votes = 0;
    id("message").innerText = "Watching the initializer elements first";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 2000)
    )
    id("votes").innerText = `Votes is ${votes}`;
    id("candidate").innerText = `Present Candidate is at index ${candidate}`;
    // id("count").innerText = `Count is ${count}`;
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3000)
    )
    id("message").innerText = `iterating over the array now`
    // id("message").innerText="Main intution behind this algorithm is if a element is repeating than it will repeat N/2 times that it must have occurences which will be left at the reference element at the end when iterated over the array How let us see!"
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3000)
    )
    id("message").innerText = "";
    for (let i = 0; i < size; i++) {
        id(i).classList.add("greenyellow")
        // id(i).style.color="greenyellow";
        if (votes == 0){
            id("votes").style.color = "Red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 3000)
            )
            id("votes").style.color="white";
            // id("candidate").style.color="cyan";
            id("candidate").classList.add("cyan");
            id("votes").classList.add("cyan");
            // id("votes").style.color="cyan";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 2000)
            )
            candidate=i;
            votes=1;
            id("candidate").innerText=`Present Candidate is at index ${candidate}`;
            id("votes").innerText=`Votes is ${votes}`;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 3000)
            )
            // id("candidate").style.color="white";
            // id("votes").style.color="white";
            id("candidate").classList.remove("cyan");
            id("votes").classList.remove("cyan");
        }else{
            // console.log("inside else");
            // console.log(`${i} ${candidate}`);
            console.log(`inside else ${array[i]} and cand ${candidate}`);
            if(array[i]==array[candidate]){
                console.log("inside array[i]==candidate");
                id(i).style.borderColor="cyan";
                id(i).style.color="cyan";
                id(candidate).style.borderColor="cyan";
                id(candidate).style.color="cyan"
                id("votes").style.color="cyan";
                await new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                })
                votes++;
                id("votes").innerText=`Votes is ${votes}`;
                await new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve();
                    }, 3000);
                })
                id("votes").style.color="white";
                id(i).style.borderColor="black";
                id(candidate).style.color="white"
                id(candidate).style.borderColor="black";
            }
            else{
                id("votes").style.color="cyan";
                await new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve();
                    }, 3000);
                })
                votes--;
                id("votes").innerText=`Votes is ${votes}`
                await new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                })
                id("votes").style.color="white";
            }
        }
        id(i).style.color="white";
        id(i).style.borderColor="black" 
    }
    id("message").innerText=`Now we gonna check element we found was actually occuring more than N/2 times and that candidate is ${candidate}`;
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 3000);
    })
    id("message").innerText="";
    id("votes").innerText="";
    id("candidate").innerText="";
    for(let i=0;i<size;i++){
        id(i).style.borderColor="greenyellow";
        id(i).style.color="greenyellow";
        await new Promise((resolve)=>{
            setTimeout(() => {
                resolve();
            }, 3000);
        })
        // console.log(`array of candidate ${array[candidate]} and ${array[i]}`);
        if(array[i]==array[candidate]){
            id("count").style.color="cyan";
            await new Promise((resolve)=>{
                setTimeout(() => {
                    resolve();
                }, 3000);
            })
            count++;
            id("count").innerText=`Count is now ${count}`
            id("count").style.color="white";
        }
        id(i).style.color="white";
        id(i).style.borderColor="black" 
    }
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 3000);
    })
    // console.log(`count is ${count} and size is ${size/2}`);
    if(count>size/2){
        id("message").innerText=`Found the Majority element at Index ${candidate}`;
    }else{
        id("message").innerText=`Did'nt found the Majority Element`;
    }
}