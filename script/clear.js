document.getElementById('activityLog-btn').addEventListener('click', function (e){
    e.preventDefault()
    cleardiv('activityLog')
})

document.getElementById('blog').addEventListener('click', function (e){
    e.preventDefault()

    window.location.href = './blog.html'
})