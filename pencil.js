document.addEventListener('mousemove', function (e) {
    // Create a div for the tail
    const tail = document.createElement('div')
    tail.classList.add('pencil-line')

    // Set the tail's position to the cursor's position
    tail.style.left = `${e.pageX}px`
    tail.style.top = `${e.pageY}px`

    // Append the tail to the body
    document.body.appendChild(tail)

    // Remove the tail after a short delay (to prevent too many elements)
    setTimeout(() => {
        tail.remove()
    }, 1000) // 1 second delay before removing the trail
})
