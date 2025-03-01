document.getElementById('activityLog-btn').addEventListener('click', function (e){
    e.preventDefault()
    cleardiv('activityLog')
})

document.getElementById('blog').addEventListener('click', function (e){
    e.preventDefault()

    window.location.href = './blog.html'
})

let f = 0

document.getElementById('btn1').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn1')
    const title = document.getElementById('title1').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})
document.getElementById('btn2').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn2')
    const title = document.getElementById('title2').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})
document.getElementById('btn3').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn3')
    const title = document.getElementById('title3').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})
document.getElementById('btn4').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn4')
    const title = document.getElementById('title4').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})
document.getElementById('btn5').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn5')
    const title = document.getElementById('title5').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})
document.getElementById('btn6').addEventListener('click', function (e){
    e.preventDefault()
    const button = document.getElementById('btn6')
    const title = document.getElementById('title6').innerText
    let activity = creatActivity(title)
    document.getElementById('activityLog').innerHTML += activity
    button.disabled = true; // Disable the button
    button.classList.add("opacity-50", "cursor-not-allowed");
    let compTask = parseFloat(document.getElementById('complitedTask').innerText)
    compTask = compTask + 1
    document.getElementById('complitedTask').innerText = compTask
    let taskLeft = parseFloat(document.getElementById('taskLeft').innerText)
    taskLeft = taskLeft - 1
    document.getElementById('taskLeft').innerText = taskLeft
    alert('Board Updated Successfully')
    f+= 1
    if(f === 6){
        alert('Congratulations! You have completed all the task')
    }
})



