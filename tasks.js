if (!localStorage.getItem("sandhuTasks"))
{
    localStorage.setItem( "sandhuTasks", " " );
}

//localStorage.clear()
//console.log(document.getElementById("forum").value);

//document.addEventListener("DOMContentLoaded", listtasks());
// no need to call seperately as it is called inside removetask() function
// if this included it gives duble list of tasks

document.addEventListener("DomContentLoaded", removetask());

// Disabling the submit button to not enabling the blank task to submitted
document.querySelector("#submit1").disabled = true;
document.querySelector("#input1").onkeyup = ()=>{
    if (document.querySelector('#input1').value.length > 0 )
    {
        document.querySelector("#submit1").disabled = false;
    }
    else
    {
        document.querySelector('#submit1').disabled = true;
    }
}

//Disabling submit button to not enabling the blank removing of elements
document.querySelector("#submit2").disabled = true;
document.querySelector("#input2").onclick = ()=>{
    if (document.querySelector('#input2').value != '')
    {
        document.querySelector("#submit2").disabled = false;
    }
    else
    {
        document.querySelector('#submit2').disabled = true;
    }
}


function listtasks()
{
    let sandhuTasks = localStorage.getItem("sandhuTasks");
    var arr = [];
    if (sandhuTasks == '')
    {
        arr.push(sandhuTasks);
        let li = document.createElement('li');
        li.innerHTML = sandhuTasks;
        console.log(li);
        console.log(document.querySelector('#tasks'))
        document.querySelector('#tasks').append(li);
    }
    else
    {
        arr = sandhuTasks.split(",")
        for (let i = 0; i < arr.length; i++) 
        {
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            console.log(li);
            document.querySelector('#tasks').append(li);
        }
    }

    return arr;
}


function newtask()
{
    var sandhuTask = localStorage.getItem("sandhuTasks");
    console.log(sandhuTask)
    if (sandhuTask == "")
    {
        sandhuTask = [];
        var n = document.getElementById("input1").value;
        sandhuTask.push(n)
        sandhuTask.push("")
        localStorage.setItem("sandhuTasks", sandhuTask );
    }
    else
    {
        var n = document.getElementById("input1").value;

        // replacing , because after setting to local storage it coverted to string
        // and then that string is accessed and splited at , the it make 2 seperate elements 

        n = n.replaceAll(',', ';')
        const arr = sandhuTask.split(",");
        arr.pop()
        arr.push(n)
        arr.push("")
        //sandhuTask.push(n);
        localStorage.setItem("sandhuTasks", arr );
    }

    // Making value of the form null or clearing the value, The is dumb idea
    document.querySelector("#input1").value = '';

    // re-disabling the submit button
    document.querySelector("#submit1").disabled = true;

    return false; //to not submit to website keep all things client side
}


function removetask()
{
    const arr = listtasks();
    let b = arr.length - 1;
    for (let i = 0; i < arr.length; i++) 
    {
        let op = document.createElement('option')
        op.innerHTML = arr[i]
        op.value= i
        if (i==b)
        {
            op.hidden = true;
        }
        console.log(op)
        document.querySelector('#input2').append(op)
    }
    let op = document.createElement('option')
    op.innerHTML = "***-----CLEAR ALL-----***"
    op.value= "all"
    document.querySelector('#input2').append(op)
}

function removingTask()
{
    if (document.querySelector('#input2').value == '')
    {
        return;
    }
    let b = document.querySelector("#input2").value
    if (b == "all")
    {
        localStorage.setItem("sandhuTasks", " ")
    }
    console.log(b)
    let sandhutasks = localStorage.getItem("sandhuTasks")
    const arr = sandhutasks.split(',')
    console.log(arr)
    arr.splice(b,1); //remove specific element of array
    console.log(arr)
    localStorage.setItem("sandhuTasks", arr)

    //disable submit button
    document.querySelector('#submit2').disabled = true;

    return false; //not submit form to website
}

//document.addEventListener("DOMContentLoaded", listtasks());

